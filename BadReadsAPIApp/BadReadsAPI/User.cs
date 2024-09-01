using System.ComponentModel.DataAnnotations;

namespace BadReadsAPI
{
    public enum UserType
    {
        Normal,
        Admin
    }
    public class User
    {
        public int Id { get; set; }
        [StringLength(50)]
        public string UserName { get; set; } = string.Empty;
        [StringLength(50)]
        public string Password { get; set; } = string.Empty;
        public UserType UserType { get; set; } = UserType.Normal;
    }
}
