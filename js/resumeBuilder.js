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
}

function displayBio() {
   var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
   $("#header").prepend(formattedRole);
   var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
   var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
   var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
     $("#topContacts").append(formattedemail);
   var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedgithub);
   var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedlocation);
   var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedbiopic);
   var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
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
 }
function displayWork() {
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
}
function displayProjects() {
  for(projt in projects.project) {
    $("#projects").append(HTMLprojectStart);

      var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.project[projt].title);
    $(".project-entry:last").append(formattedprojectTitle);

      var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.project[projt].dates);
    $(".project-entry:last").append(formattedprojectDates);

      var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.project[projt].description);
    $(".project-entry:last").append(formattedprojectDescription);
        for(img in projects.project[projt].images) {
          var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.project[projt].images[img]);
          $(".project-entry:last").append(formattedprojectImage);
        }
  }
}
function displayEducation() {
  for(school in education.schools) {
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
  for(onlineCourse in education.onlineCourses) {
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
}

displayBio();
displayWork();
displayProjects();
displayEducation();
