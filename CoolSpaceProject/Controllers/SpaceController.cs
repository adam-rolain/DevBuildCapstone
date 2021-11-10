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
    public class SpaceController : ControllerBase
    {
        // https://localhost:44304/api/apod
        [HttpGet("/api/apod")]
        public async Task<Apod> GetTodaysAPOD()
        {
            return await DAL.GetAPOD();
        }

        // https://localhost:44304/api/apod/2021-11-01
        [HttpGet("/api/apod/{date}")]
        public async Task<Apod> GetAPODByDate(string date)
        {
            return await DAL.GetAPODbyDate(date);
        }

        // https://localhost:44304/api/apod/daterange?startDate=2020-10-10&endDate=2020-10-13
        [HttpGet("/api/apod/daterange")]
        public async Task<List<Apod>> GetAPODByDate(string startDate, string endDate)
        {
            return await DAL.GetAPODbyRange(startDate, endDate);
        }

        // https://localhost:44304/api/favoriteApod?date=2021-10-10
        [HttpPost("/api/favoriteApod")]
        public FavoriteApod SaveFavoriteApod(string date)
        {
            return DAL.SaveFavAPOD(date);
        }

        // https://localhost:44304/api/favoriteApod/delete/1
        [HttpDelete("/api/favoriteApod/delete/{favoriteapodid}")]
        public bool DeleteFavApod(int favoriteapodid)
        {
            return DAL.DeleteFavApod(favoriteapodid);
        }

        // https://localhost:44304/api/marsrover?earthDate=2021-11-08&roverName=curiosity
        [HttpGet("/api/marsrover")]
        public async Task<Photos> GetRoverPhotosByEarthDate(string earthDate, string roverName)
        {
            return await RoverDAL.GetAllRoverPhotosbyEarthDate(earthDate, roverName);
        }

        // https://localhost:44304/api/favoriteRover?
        [HttpPost("/api/favoriteRover")]
        public FavoriteRover SaveFavoriteRover(string earthDate, int page, int index)
        {
            return RoverDAL.SaveFavoriteRoverPhoto(earthDate, page, index);
        }
    }
}

// api/marsrover?earth_date=2021-11-08&page=1 index
