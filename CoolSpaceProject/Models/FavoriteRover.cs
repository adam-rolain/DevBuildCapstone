using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;

namespace CoolSpaceProject.Models
{
    [Table("favoriteRover")]
    public class FavoriteRover
    {
        [Key]
        public int id { get; set; }
        public int userId { get; set; }
        public string earthDate { get; set; }
        public int page { get; set; }
        public int arrayIndex { get; set; }
    }
}
