using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;

namespace CoolSpaceProject.Models
{
    [Table("favoriteApod")]
    public class FavoriteApod
    {
        [Key]
        public int id { get; set; }
        public int apodId  { get; set; }
        public int userId { get; set; }
       

    }
}
