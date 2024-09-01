using System.ComponentModel.DataAnnotations;

namespace BadReadsAPI
{
    public class Comment
    {
        public int Id { get; set; }
        [StringLength(200)]
        public string Description { get; set; } = string.Empty;
        public float Rating { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int BookId { get; set; }
        public Book Book { get; set; }
    }
}
