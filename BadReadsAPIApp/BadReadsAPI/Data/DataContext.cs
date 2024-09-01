using Microsoft.EntityFrameworkCore;

namespace BadReadsAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<BookShelf> BookShelfs { get; set; }
        public DbSet<BookLog> BookLogs { get; set; }
        public DbSet<Comment> Comments { get; set; }
    }
}
