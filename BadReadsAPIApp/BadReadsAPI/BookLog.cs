namespace BadReadsAPI
{
    public enum Modification
    {
        Add,
        Remove,
        Update
    }
    public class BookLog
    {
        public int Id { get; set; }
        public Modification Modification { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int BookId { get; set; }
        public Book Book { get; set; }
    }
}
