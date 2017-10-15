/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
   "name": "Abdulmohsen Alateeq",
   "role": "Web developers",
   "contacts": {
     "mobile":"+966-59-555-1188",
     "email":"mohsenalateeq@gmail.com",
     "github":"MohsenAlateeq",
     "location":"Hail Province",
     },
   "welcomeMessage":"Welcome Welcome Welcome!",
   "skills": ["Buliding responsive web","Coding","Drink coffee!"],
   "biopic": "images/fry.jpg"
 }

 var education = {
   "schools": [
     {
       "name": "University of Hail",
       "location": "Hail Province",
       "degree": "BA",
       "majors": ["SWE"],
       "dates": 2018 ,
       "url": "http://www.uoh.edu.sa/"
     },
     {
       "name": "Saquer Quraish",
       "location": "Hail Province",
       "degree": "High school",
       "majors": ["Natural Science"],
       "dates": 2012,
       "url": ""
     }
   ],
   "onlineCourses": [
     {
       "title": "The Complete Web Developer Course ",
       "school": "Udemy",
       "dates": 2015,
       "url": "https://www.udemy.com/the-complete-web-developer-course-2/"
     }
   ]
 }

 var work = {
   "jobs": [
     {
       "employer": "LAND MARK group",
       "title": "Store Manager",
       "location": "Hail City",
       "dates": "2014 - Dec 2016",
       "description": "Checking all the store work daily, To give the customers a good shopping :)!"
     },
     {
       "employer": "Salamat polyclinic medical group",
       "title": "Relation ship",
       "location": "Hail City",
       "dates": "2010 - Dec 2012",
       "description": "Contacting other related companies, making and running projects."
     }
   ]
 }

var projects = {
  "projects": [
    {
      "title": "KSA gate",
      "dates": "2017",
      "description": "It's a web site for Saudi Arabia country, it will give any one a look and any searching about Saudi Arabia.",
      "images": [
        "images/ksa1.jpg",
        "images/ksa2.jpg"
    ]
    }
  ]
}

 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
 var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
 var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
 var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
 var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
 var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 $("#topContacts").append(formattedMobile);
 $("#topContacts").append(formattedemail);
 $("#topContacts").append(formattedgithub);
 $("#topContacts").append(formattedlocation);
 $("#header").append(formattedbiopic);
 $("#header").append(formattedwelcomeMsg);
    if(bio.skills.length > 0) {
       $("#header").append(HTMLskillsStart);
         var formattedskills = HTMLskills.replace("%data%", bio.skills[0]);
          $("#skills").append(formattedskills);
         var formattedskills = HTMLskills.replace("%data%", bio.skills[1]);
          $("#skills").append(formattedskills);
         var formattedskills = HTMLskills.replace("%data%", bio.skills[2]);
          $("#skills").append(formattedskills);
    }
    for(job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);

        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

        var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedworkDates);

        var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedworkDescription);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").prepend(formattedworkLocation);
    }
