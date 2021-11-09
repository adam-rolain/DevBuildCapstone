using System;
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
        //CREATE
        //save one apod into the favapod db 

        //? save a list of apods into favapod db//prob not...

        //DELETE
        //delete one apod from favapod db

        //UPDATE
        //could be update email/pw/spelling of name

    }
}
