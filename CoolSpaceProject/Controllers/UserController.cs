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
    public class UserController : ControllerBase
    {
        // https://localhost:44304/api/user/currentUser
        [HttpGet("/api/user/currentUser")]
        public int GetCurrentUserId()
        {
            return UserDAL.CurrentUserId;
        }

        // https://localhost:44304/api/user/login?userName=TFecto&password=dog1234
        [HttpGet("/api/user/login")]
        public bool LoginUser(string userName, string password)
        {
            return UserDAL.LoginUser(userName, password);
        }

        // https://localhost:44304/api/user/currentUser/3
        [HttpGet("/api/user/currentUser/{id}")]
        public User GetCurrentUserInformationById(int id)
        {
            return UserDAL.GetCurrentUserInformation(id);
        }

        // https://localhost:44304/api/user/new
        [HttpPost("/api/user/new")]
        public User CreateNewUser([FromBody] User newUser)
        {
            return UserDAL.CreateNewUser(newUser);
        }

        // https://localhost:44304/api/user/update
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
