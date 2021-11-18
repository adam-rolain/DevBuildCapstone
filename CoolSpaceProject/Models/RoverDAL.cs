using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;
using System.Net.Http;
using CoolSpaceProject.Models;
using Dapper;

namespace CoolSpaceProject.Models
{
    public class RoverDAL
    {
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

        //read
        //get all photos from one rover by earth_date with default camera

        public static List<FavoriteRover> GetFavoriteMarsRovers()
        {
            return DAL.DB.Query<FavoriteRover>("SELECT * FROM favoriteRover WHERE userId = @userId", new { userId = UserDAL.CurrentUserId }).ToList();
        }

        public static async Task<MarsRoverResponse> GetAllRoverPhotosbyEarthDate(string earth_date, string roverName)
        {
            // Curiosity: 2012-08-05 -> Present
            // Spirit: 2004-01-04 -> 2010-03-22
            // Opportunity: 2004-01-01 -> 2018-06-01
            var response = await GetHttpClient().GetAsync($"/mars-photos/api/v1/rovers/{roverName}/photos?api_key=AhkPJXB4fyYZfBLWbVJBv5HxNDZVUUb5ceAaC88r&camera=FHAZ&page=1&earth_date={earth_date}");
            MarsRoverResponse roverresponse = await response.Content.ReadAsAsync<MarsRoverResponse>();
            return roverresponse;
        }
        //comments for adam
        //more comments for adam

        //save one photo favorite roverId (save photo to favrover db)

        public static long SaveFavoriteRover(SaveFavoriteRover saveFavoriteRover)
        {
            FavoriteRover favoriteRover = new FavoriteRover()
            {
                name = saveFavoriteRover.name,
                cameraName = saveFavoriteRover.cameraName,
                image = saveFavoriteRover.image,
                date = saveFavoriteRover.date,
                userId = UserDAL.CurrentUserId
            };
            long responseFromDB = DAL.DB.Insert(favoriteRover);
            if (responseFromDB < 0)
            {
                return -1;
            }
            else
            {
                return responseFromDB;
            }
        }

        public static bool DeleteFavoriteRover(int favoriteRoverId)
        {
            return DAL.DB.Delete<FavoriteRover>(new FavoriteRover { id = favoriteRoverId });
        }

        //get all photos from diff rover by earth_date with default camera



        //get all photos from one camera on one rover by earth_date

    }
}
