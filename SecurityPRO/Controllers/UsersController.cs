using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SecurityPRO.Controllers
{

    public class User
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string UCookie { get; set; }

    }
    public class UsersController : ApiController
    {
        


        [HttpGet, Route("users")]

        public IEnumerable<User> users()
        {
            User user1 = new User();
            user1.Id = 1;
            user1.Login = "Test";
            user1.Email = "Test";
            user1.Password = "Test";
            user1.UCookie = "Test";

            User user2 = new User();
            user2.Id = 2;
            user2.Login = "Test";
            user2.Email = "Test";
            user2.Password = "Test";
            user2.UCookie = "Test";

            List<User> lst = new List<User>();
            lst.Add(user1);
            lst.Add(user2);

            return lst;

        }
    }
}
