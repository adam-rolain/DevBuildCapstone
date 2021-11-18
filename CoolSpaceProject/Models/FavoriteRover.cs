using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoolSpaceProject.Models
{
    [Table("favoriteRover")]
    public class FavoriteRover
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string cameraName { get; set; }
        public string image { get; set; }
        public string date { get; set; }
        public int userId { get; set; }
    }
}
