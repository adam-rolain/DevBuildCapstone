using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;


namespace CoolSpaceProject.Models
{
    [Table("marsRover")]
    public class MarsRover
    {
        [Key]
        public int id { get; set; }
        public int sol { get; set; }
        public int cameraId { get; set; }
        public string img_src { get; set; }
        public string earth_date { get; set; }
        public int roverId { get; set; }


    }
}
