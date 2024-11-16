using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Helpers
{
    public class BookQueryObject
    {
        [FromQuery(Name = "isbn")]
        public string ISBN { get; set; } = string.Empty;
        [FromQuery(Name = "title")]
        public string Title { get; set; } = string.Empty;
    }
}