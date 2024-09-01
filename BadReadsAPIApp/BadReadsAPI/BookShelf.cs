using System.ComponentModel.DataAnnotations;

namespace BadReadsAPI
{
    public class BookShelf
    {
        public int Id { get; set; }
        [StringLength(50)]
        public string Name { get; set; } = string.Empty;
        public int BookId { get; set; }
        public Book? Book { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
