using Dapper;
using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace CoolSpaceProject.Models
{
    public class UserDAL
    {
        private static HttpClient client = null;
        public static int CurrentUserId = -1;

        private static HttpClient GetHttpClient()
        {
            if (client == null)
            {
                client = new HttpClient();
                client.BaseAddress = new Uri("https://api.nasa.gov");
            }
            return client;
        }

        // READ
        public static bool LoginUser(string userName, string password)
        {
            bool validLogin = false;
            List<User> queriedUser = ApodDAL.DB.Query<User>("SELECT * FROM user WHERE userName = @userName AND password = @password", new { userName = userName, password = password }).ToList();
            if (queriedUser.Count > 0)
            {
                if (queriedUser[0].userName == userName && queriedUser[0].password == password)
                {
                    validLogin = true;
                    CurrentUserId = queriedUser[0].id;
                }
            }
            else
            {
                validLogin = false;
            }
            return validLogin;
        }

        public static User GetCurrentUserInformation(int id)
        {
            return ApodDAL.DB.Get<User>(id);
        }

        public static int LogoutUser()
        {
            CurrentUserId = -1;
            return CurrentUserId;
        }

        // CREATE
        public static User CreateNewUser(User newUser)
        {
            newUser.id = Convert.ToInt32(ApodDAL.DB.Insert(newUser));
            CurrentUserId = newUser.id;
            return newUser;
        }

        // UPDATE
        public static bool UpdateUser(User user)
        {
            return ApodDAL.DB.Update<User>(user);
        }
    }
}
