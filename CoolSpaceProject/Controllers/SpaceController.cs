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
        public async Task<List<Apod>> GetAPODByDateRange(string startDate, string endDate)
        {
            return await DAL.GetAPODbyRange(startDate, endDate);
        }

        //return the id also ---so we can call it to delete later. 

        // https://localhost:44304/api/favoriteApod?date=2021-10-10
        [HttpPost("/api/favoriteApod")]
        public long SaveFavoriteApod([FromBody] SaveFavoriteApod date)
        {
            return DAL.SaveFavAPOD(date);
        }

        [HttpGet("/api/favoriteApodList")]
        public async Task<List<Apod>> GetFavoriteApodList()
        {
            return await DAL.GetFavoriteApodList();
        }

        [HttpGet("/api/favoriteApodId")]
        public int GetFavoriteApodId(string date) {
            return DAL.GetFavoriteApodId(date);
        }


        // https://localhost:44304/api/favoriteApod/delete/1
        [HttpDelete("/api/favoriteApod/delete/{favoriteapodid}")]
        public bool DeleteFavApod(int favoriteapodid)
        {
            return DAL.DeleteFavApod(favoriteapodid);
        }
        //=======================================================================
        //                          Rover:
        //=======================================================================

        // https://localhost:44304/api/marsrover?earthDate=2021-11-08&roverName=curiosity
        [HttpGet("/api/marsrover")]
        public async Task<MarsRoverResponse> GetRoverPhotosByEarthDate(string earthDate, string roverName)
        {
            return await RoverDAL.GetAllRoverPhotosbyEarthDate(earthDate, roverName);
        }

        //=======================================================================
        //                             User:
        //=======================================================================

        // https://localhost:44304/api/user/login?userName=TFecto&password=dog1234
        [HttpGet("/api/user/login")]
        public bool LoginUser(string userName, string password)
        {
            return UserDAL.LoginUser(userName, password);
        }

        // https://localhost:44304/api/user/currentUser
        [HttpGet("/api/user/currentUser")]
        public int GetCurrentUser()
        {
            return UserDAL.CurrentUserId;
        }

        // https://localhost:44304/api/user/new
        [HttpPost("/api/user/new")]
        public User CreateNewUser([FromBody] User newUser)
        {
            return UserDAL.CreateNewUser(newUser);
        }

        // https://localhost:44304/api/user/currentUser
        [HttpGet("/api/user/currentUser/{id}")]
        public User GetCurrentUserById(int id)
        {
            return UserDAL.GetCurrentUser(id);
        }

        [HttpPut("/api/user/update")]
        public bool UpdateUser([FromBody] User user)
        {
            return UserDAL.UpdateUser(user);
        }

        [HttpGet("/api/user/logout")]
        public int LogoutUser()
        {
            return UserDAL.LogoutUser();
        }
    }
}
