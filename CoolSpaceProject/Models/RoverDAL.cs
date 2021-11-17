using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;
using System.Net.Http;

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

        public static async Task<MarsRoverResponse> GetAllRoverPhotosbyEarthDate(string earth_date, string roverName)
        {
            // Curiosity: 2012-08-05 -> Present
            // Spirit: 2004-01-04 -> 2010-03-22
            // Opportunity: 2004-01-01 -> 2018-06-01
            var response = await GetHttpClient().GetAsync($"/mars-photos/api/v1/rovers/{roverName}/photos?earth_date={earth_date}&page=1&api_key=AhkPJXB4fyYZfBLWbVJBv5HxNDZVUUb5ceAaC88r");
            MarsRoverResponse roverresponse = await response.Content.ReadAsAsync<MarsRoverResponse>();
            return roverresponse;
        }


        //save one photo favorite roverId (save photo to favrover db)

        public static  FavoriteRover SaveFavoriteRoverPhoto(string earthDate, int page, int arrayIndex)
        {
            FavoriteRover therover = new FavoriteRover()
            {
                userId = UserDAL.CurrentUserId,
                earthDate = earthDate,
                page = page,
                arrayIndex = arrayIndex
            };
            DAL.DB.Insert(therover);

            return therover ;
        }

        //get all photos from diff rover by earth_date with default camera



        //get all photos from one camera on one rover by earth_date

    }
}
