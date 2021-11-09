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
        public  FavoriteApod SaveFavoriteApod(string date)
        {
            return DAL.SaveFavAPOD(date);
        }

        [HttpDelete("/api/favoriteApod/delete/{favoriteapodid}")]
        public bool DeleteFavApod(int favoriteapodid)
        {
            return DAL.DeleteFavApod(favoriteapodid);
        }
    }
}
