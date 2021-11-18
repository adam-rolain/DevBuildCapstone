using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoolSpaceProject.Models;

namespace CoolSpaceProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MarsRoverController : ControllerBase
    {
        // https://localhost:44304/api/favoriteRover
        [HttpPost("/api/favoriteApod")]
        public long SaveFavoriteApod([FromBody] SaveFavoriteRover favoriteRover)
        {
            return RoverDAL.SaveFavoriteRover(favoriteRover);
        }
    }
}
