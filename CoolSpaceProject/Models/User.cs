using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;

namespace CoolSpaceProject.Models
{
    [Table("user")]
    public class User
    {
        [Key]
        public int id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
        public string userName { get; set; }
        public string password { get; set; }
    }
}
