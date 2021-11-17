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
            // Building a **SINGLETON** object of type HttpClient - avoids a lot extra traffic

            if (client == null)
            {
                // client instance hasn't been made yet, make it and initialize it
                client = new HttpClient();
                client.BaseAddress = new Uri("https://api.nasa.gov");
            }
            return client;
        }


        public static bool LoginUser(string userName, string password)
        {
            bool validLogin = false;
            List<User> queriedUser = DAL.DB.Query<User>("SELECT * FROM user WHERE userName = @userName AND password = @password", new { userName = userName, password = password }).ToList();
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

        public static User CreateNewUser(User newUser)
        {
            newUser.id = Convert.ToInt32(DAL.DB.Insert(newUser));
            CurrentUserId = newUser.id;
            return newUser;
        }

        public static User GetCurrentUser(int id)
        {
            return DAL.DB.Get<User>(id);
        }

        public static bool UpdateUser(User user)
        {
            return DAL.DB.Update<User>(user);
        }

        public static int LogoutUser()
        {
            CurrentUserId = -1;
            return CurrentUserId;
        }
    }
}
