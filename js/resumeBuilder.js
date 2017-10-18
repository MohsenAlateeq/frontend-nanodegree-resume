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
 };

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
 };

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
 };

var projects = {
  "project": [
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
};

bio.display = function() {
   var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
   $("#header").prepend(formattedRole);
   var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
   var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
   var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
   var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
   var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts , #footerContacts").append(formattedMobile, formattedemail, formattedgithub, formattedlocation);
   var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
   var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedbiopic, formattedwelcomeMsg);
      $("#header").append(HTMLskillsStart);
      for(var skill = 0; skill < bio.skills.length; skill++) {

           var formattedskills;
           formattedskills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedskills);

      }
 };
work.display = function() {
  for(var job = 0; job < work.jobs.length; job++) {
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
};
projects.display = function() {
  for(var projt = 0; projt < projects.project.length; projt++) {
    $("#projects").append(HTMLprojectStart);

      var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.project[projt].title);
    $(".project-entry:last").append(formattedprojectTitle);

      var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.project[projt].dates);
    $(".project-entry:last").append(formattedprojectDates);

      var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.project[projt].description);
    $(".project-entry:last").append(formattedprojectDescription);
        for(var img = 0;  img < projects.project[projt].images.length; img++) {
          var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.project[projt].images[img]);
          $(".project-entry:last").append(formattedprojectImage);
        }
  }
};
education.display = function() {
  for(var school = 0; school < education.schools.length; school++) {
      $("#education").append(HTMLschoolStart);

      var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedschoolTitle = formattedschoolName + formattedschoolDegree;
    $(".education-entry:last").append(formattedschoolTitle);

      var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedschoolDates);

      var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    $(".education-entry:last").append(formattedschoolMajor);
      var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").prepend(formattedschoolLocation);


  }
  for(var onlineCourse = 0; onlineCourse < education.onlineCourses.length; onlineCourse++) {
    $(".education-entry:last").append(HTMLonlineClasses);
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
    var formattedonlinename = formattedonlineTitle + formattedonlineSchool;
  $(".education-entry:last").append(formattedonlinename);
  var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
  $(".education-entry:last").append(formattedonlineDates);
  var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
  $(".education-entry:last").append(formattedonlineURL);
}
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
