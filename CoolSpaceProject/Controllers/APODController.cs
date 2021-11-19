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
    public class APODController : ControllerBase
    {
        // https://localhost:44304/api/apod
        [HttpGet("/api/apod")]
        public async Task<Apod> GetTodaysAPOD()
        {
            return await ApodDAL.GetAPOD();
        }

        // https://localhost:44304/api/apod/2021-11-01
        [HttpGet("/api/apod/{date}")]
        public async Task<Apod> GetAPODByDate(string date)
        {
            return await ApodDAL.GetAPODbyDate(date);
        }

        // https://localhost:44304/api/apod/daterange?startDate=2020-10-10&endDate=2020-10-13
        [HttpGet("/api/apod/daterange")]
        public async Task<List<Apod>> GetAPODByDateRange(string startDate, string endDate)
        {
            return await ApodDAL.GetAPODbyRange(startDate, endDate);
        }

        // https://localhost:44304/api/favoriteApod?date=2021-10-10
        [HttpPost("/api/favoriteApod")]
        public long SaveFavoriteApod([FromBody] SaveFavoriteApod date)
        {
            return ApodDAL.SaveFavAPOD(date);
        }

        // https://localhost:44304/api/favoriteApodList
        [HttpGet("/api/favoriteApodList")]
        public async Task<List<Apod>> GetFavoriteApodList()
        {
            return await ApodDAL.GetFavoriteApodList();
        }

        // https://localhost:44304/api/favoriteApodId?date=2021-03-30
        [HttpGet("/api/favoriteApodId")]
        public int GetFavoriteApodId(string date)
        {
            return ApodDAL.GetFavoriteApodId(date);
        }

        // https://localhost:44304/api/favoriteApod/delete/1
        [HttpDelete("/api/favoriteApod/delete/{favoriteapodid}")]
        public bool DeleteFavApod(int favoriteapodid)
        {
            return ApodDAL.DeleteFavApod(favoriteapodid);
        }
    }
}
