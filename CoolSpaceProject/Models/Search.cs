using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoolSpaceProject.Models
{
    [Table("searchHistory")]
    public class Search
    {
        [Key]
        public int id { get; set; }
        public string searchString { get; set; }
        public int userId { get; set; }
    }
}
