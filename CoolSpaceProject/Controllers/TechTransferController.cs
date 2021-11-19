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
    public class TechTransferController : ControllerBase
    {
        // https://localhost:44304/api/TechTransfer?search=engine
        [HttpGet("/api/TechTransfer")]
        public async Task<TechTransferResponse> SearchPatents(string search)
        {
            return await TechTransferDAL.SearchPatents(search);
        }

        // https://localhost:44304/api/TechTransfer/PreviousSearches
        [HttpGet("/api/TechTransfer/PreviousSearches")]
        public List<Search> GetPreviousSearches()
        {
            return TechTransferDAL.GetPreviousSearches();
        }

        // https://localhost:44304/api/TechTransfer/SaveSearch?search=engine
        [HttpGet("/api/TechTransfer/SaveSearch")]
        public bool SaveSearch(string search)
        {
            return TechTransferDAL.SaveSearch(search);
        }

        // Had to add something
    }
}
