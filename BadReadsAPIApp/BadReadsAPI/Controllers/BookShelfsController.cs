using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BadReadsAPI.Data; // Adjust according to your namespace
using BadReadsAPI;

namespace BadReadsAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookShelvesController : ControllerBase
    {
        private readonly DataContext _context;

        public BookShelvesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/bookShelves
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BookShelf>>> GetBookShelves()
        {
            return await _context.BookShelfs
                .Include(bs => bs.Books)
                .Include(bs => bs.User)
                .ToListAsync();
        }

        // GET: api/bookShelves/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BookShelf>> GetBookShelf(int id)
        {
            var bookShelf = await _context.BookShelfs
                .Include(bs => bs.Books)
                .Include(bs => bs.User)
                .FirstOrDefaultAsync(bs => bs.Id == id);

            if (bookShelf == null)
            {
                return NotFound();
            }

            return bookShelf;
        }

        // POST: api/bookShelves
        [HttpPost]
        public async Task<ActionResult<BookShelf>> CreateBookShelf(BookShelf bookShelf)
        {
            _context.BookShelfs.Add(bookShelf);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBookShelf), new { id = bookShelf.Id }, bookShelf);
        }

        // PUT: api/bookShelves/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBookShelf(int id, BookShelf bookShelf)
        {
            if (id != bookShelf.Id)
            {
                return BadRequest();
            }

            _context.Entry(bookShelf).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookShelfExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/bookShelves/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBookShelf(int id)
        {
            var bookShelf = await _context.BookShelfs.FindAsync(id);
            if (bookShelf == null)
            {
                return NotFound();
            }

            _context.BookShelfs.Remove(bookShelf);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BookShelfExists(int id)
        {
            return _context.BookShelfs.Any(e => e.Id == id);
        }
    }
}
