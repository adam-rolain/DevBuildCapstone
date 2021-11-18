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
        // https://localhost:44304/api/favoriteRoverList
        [HttpGet("/api/favoriteRoverList")]
        public List<FavoriteRover> GetFavoriteMarsRovers()
        {
            return RoverDAL.GetFavoriteMarsRovers();
        }

        // https://localhost:44304/api/favoriteRover
        [HttpPost("/api/favoriteRover")]
        public long SaveFavoriteApod([FromBody] SaveFavoriteRover favoriteRover)
        {
            return RoverDAL.SaveFavoriteRover(favoriteRover);
        }

        // https://localhost:44304/api/favoriteRover/delete/1
        [HttpDelete("/api/favoriteRover/delete/{favoriteRoverId}")]
        public bool DeleteFavApod(int favoriteRoverId)
        {
            return RoverDAL.DeleteFavoriteRover(favoriteRoverId);
        }
    }
}
