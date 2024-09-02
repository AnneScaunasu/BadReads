using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BadReadsAPI.Data;

namespace BadReadsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookLogsController : ControllerBase
    {
        private readonly DataContext _context;

        public BookLogsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/BookLogs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BookLog>>> GetBookLogs()
        {
            return await _context.BookLogs
                .Include(bl => bl.User)
                .Include(bl => bl.Book)
                .ToListAsync();
        }

        // GET: api/BookLogs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BookLog>> GetBookLog(int id)
        {
            var bookLog = await _context.BookLogs
                .Include(bl => bl.User)
                .Include(bl => bl.Book)
                .FirstOrDefaultAsync(bl => bl.Id == id);

            if (bookLog == null)
            {
                return NotFound();
            }

            return bookLog;
        }

        // POST: api/BookLogs
        [HttpPost]
        public async Task<ActionResult<BookLog>> CreateBookLog([FromBody] BookLog newBookLog)
        {
            if (newBookLog == null)
            {
                return BadRequest();
            }

            _context.BookLogs.Add(newBookLog);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBookLog), new { id = newBookLog.Id }, newBookLog);
        }

        // PUT: api/BookLogs/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBookLog(int id, [FromBody] BookLog updatedBookLog)
        {
            if (id != updatedBookLog.Id)
            {
                return BadRequest();
            }

            _context.Entry(updatedBookLog).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.BookLogs.Any(bl => bl.Id == id))
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

        // DELETE: api/BookLogs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBookLog(int id)
        {
            var bookLog = await _context.BookLogs.FindAsync(id);
            if (bookLog == null)
            {
                return NotFound();
            }

            _context.BookLogs.Remove(bookLog);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
