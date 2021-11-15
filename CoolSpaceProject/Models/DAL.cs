﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;
using Dapper;
using MySql.Data.MySqlClient;
using System.Net.Http;

namespace CoolSpaceProject.Models
{
    public class DAL
    {
        public static MySqlConnection DB;

        //do a new http client in each method
        //add base address in methods
        //figure out what from a user perspective we need.

        private static HttpClient client = null;

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

        //READ
        //get and display the pic of the day--get one/current
        //return the id also ---so we can call it to delete later. 

        public static async Task<Apod> GetAPOD()
        {
            var response = await GetHttpClient().GetAsync("/planetary/apod?api_key=AhkPJXB4fyYZfBLWbVJBv5HxNDZVUUb5ceAaC88r&thumbs=true");
            Apod apodresponse = await response.Content.ReadAsAsync<Apod>();
            return apodresponse;
        }

        //get one apod by date

        public static async Task<Apod> GetAPODbyDate(string date)
        {
            var response = await GetHttpClient().GetAsync($"/planetary/apod?api_key=AhkPJXB4fyYZfBLWbVJBv5HxNDZVUUb5ceAaC88r&date={date}&thumbs=true");
            Apod apodresponse = await response.Content.ReadAsAsync<Apod>();
            return apodresponse;
        }

        //get all apod in date range
        // Got rid of IEnumerable and changed to list
        public static async Task<List<Apod>> GetAPODbyRange(string start_date, string end_date)
        {
            var response = await GetHttpClient().GetAsync($"/planetary/apod?api_key=AhkPJXB4fyYZfBLWbVJBv5HxNDZVUUb5ceAaC88r&start_date={start_date}&end_date={end_date}&thumbs=true");
            List<Apod> apodresponse = await response.Content.ReadAsAsync<List<Apod>>();
            return apodresponse;
        }

        public static async Task<List<Apod>> GetFavoriteApodList()
        {
            List<FavoriteApod> favoriteApods = DB.Query<FavoriteApod>("SELECT * FROM favoriteApod WHERE userId = @userId", new { userId = UserDAL.CurrentUserId }).ToList();
            List<Apod> apods = new List<Apod>();
            foreach (FavoriteApod favorite in favoriteApods)
            {
                apods.Add(await GetAPODbyDate(favorite.date));
            }
            return apods;
        }

        public static int GetFavoriteApodId(string date)
        {
            if (UserDAL.CurrentUserId == -1)
            {
                return -1;
            }
            List<int> favoriteId = DB.Query<int>("SELECT id FROM favoriteApod WHERE userId = @userId AND date = @date", new { userId = UserDAL.CurrentUserId, date = date }).ToList();
            if (favoriteId.Count > 0)
            {
                return favoriteId[0];
            }
            else
            {
                return -1;
            }
        }
        //CREATE
        //save one apod into the favapod db 

        public static long SaveFavAPOD(SaveFavoriteApod date)
        {
            FavoriteApod theapod = new FavoriteApod()
            {
                date = date.date,
                userId = UserDAL.CurrentUserId
            };
            long responseFromDB = DB.Insert(theapod);
            if (responseFromDB < 0)
            {
                return -1;
            }
            else
            {
                return responseFromDB;
            }
        }
     

        //DELETE
        //delete one apod from favapod db
       
        public static bool DeleteFavApod(int id)
        {
            return DB.Delete<FavoriteApod>(new FavoriteApod() { id = id });
        }

    }
}
