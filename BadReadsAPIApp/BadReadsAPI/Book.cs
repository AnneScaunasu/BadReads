using System.ComponentModel.DataAnnotations;

namespace BadReadsAPI
{
    public enum BookType
    {
        UNDEFINED,
        Horror,
        Fantasy,
        Thriller,
        Drama,
        Biography,
        Scientific,
        Romance,
        History,
        Poetry,
        Humor,
        Literary,
        Crime
    }
    public class Book
    {
        public int Id { get; set; }
        [StringLength(50)]
        public string Title { get; set; } = string.Empty;
        [StringLength(500)]
        public string Description { get; set; } = string.Empty;
        [StringLength(100)]
        public string Author { get; set; } = string.Empty;
        public float Rating { get; set; }
        public BookType Type { get; set; } = BookType.UNDEFINED;
        public ICollection<Comment> Comments { get; set; } = new List<Comment>();
    }
}
