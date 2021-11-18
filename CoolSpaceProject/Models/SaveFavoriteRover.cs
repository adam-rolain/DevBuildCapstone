using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoolSpaceProject.Models
{
    public class SaveFavoriteRover
    {
        public string name { get; set; }
        public string cameraName { get; set; }
        public string image { get; set; }
        public string date { get; set; }
    }
}