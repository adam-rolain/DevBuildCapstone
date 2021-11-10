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
        public static MySqlConnection DB;

        //do a new http client in each method
        //add base address in methods
        //figure out what from a user perspective we need.

        private static HttpClient client = null;
        public static int CurrentUserId = 1;

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

        //public static async Task<List<>> GetAllRoverPhotosbyEarthDate(string earth_date)
        //{
        //    var response = await GetHttpClient().GetAsync($"/planetary/apod?api_key=AhkPJXB4fyYZfBLWbVJBv5HxNDZVUUb5ceAaC88r&start_date={start_date}&end_date={end_date}&thumbs=true");
        //    List<Apod> apodresponse = await response.Content.ReadAsAsync<List<Apod>>();
        //    return apodresponse;
        //}


        //save one photo favorite roverId (save photo to favrover db)

        //get all photos from diff rover by earth_date with default camera

        //get all photos from one camera on one rover by earth_date

    }
}
