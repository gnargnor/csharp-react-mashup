using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CsharpReactMashup.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CsharpReactMashup.Controllers
{
    public class HomeController : Controller
	{
        private static readonly IList<CommentModel> _comments;

        //this would ordinarily be kept in a database - keeping static as per tutorial
        static HomeController()
        {
            _comments = new List<CommentModel>
            {
                new CommentModel
                {
                    Id = 1,
                    Author = "Ben Bizzey",
                    Text = "Heyyyyyy what it do pal?"
                },
                new CommentModel
                {
                    Id = 2,
                    Author = "Diggy Wiggler",
                    Text = "Hey ya chowdahead, get off my properties!"
                },
                new CommentModel
                {
                    Id = 3,
                    Author = "Winkle Burgleton",
                    Text = "Heyyyyyy who ya callin chowdahead ya codfish"
                },
            };
        }
        //Route keyword indicates this action will be taken when the route /comments is hit
        [Route("comments")]
        //This disables browser caching
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult Comments()
        {
            return Json(_comments); 
        }

        [Route("comments/new")]
        [HttpPost]
        public ActionResult AddComment(CommentModel comment)
        {
            comment.Id = _comments.Count + 1;
            _comments.Add(comment);
            return Content("GREAT JOB!");
        }


	    // GET: /<controller>/
	    public IActionResult Index()
	    {
            return View();
	    }
	}
}

