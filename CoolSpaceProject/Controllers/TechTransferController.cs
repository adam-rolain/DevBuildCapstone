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
    }
}
