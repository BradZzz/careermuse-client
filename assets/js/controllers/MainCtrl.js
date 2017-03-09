angular.module('ambrosia').controller('MainCtrl',
['$scope', '$rootScope', '$q',
 function ($scope, $rootScope, $q)
{

    /***

    This is here to show the format of the parsed resumes

    ***/

    $scope.user =
    {
      "name" : "John Doe",
      "meta" : {
        "format" : "FRESH@0.6.0",
        "version" : "0.4.0" },
      "info" : {
        "label" : "*** MISSING JOB TITLE ***",
        "characterClass" : "",
        "brief" : "Creative recent graduate with passion for digital marketing, social media strategy, " +
        "advertising, and brand development seeking to drive brand evolution in e-commerce space. Skilled " +
        "at using data analytics to solve business problems. Great listener who thrives in team-setting " +
        "recognized for strong interpersonal skills, reliability, and ability to increase brand awareness " +
        "in a competitive landscape.\r\n",
        "image" : "",
        "quote" : "",
        "highlights" : [
          "Won first place for Nordstrom case competition by creating m-commerce wishlist extension for " +
          "Nordstrom app utilizing market research to assess user shopping needs.",
          "Received 4.0 on semester-long project by developing new product, driving market research, and creating marketing plan.",
          "Won first place for Nordstrom “Item of the Day” competition leveraging internal marketing, team collaboration, " +
          "leadership engagement, and data tracking to sell the most products out of six teams.",
          "Selected by UW professors to compete in two 48-hour case competitions for KPMG and Deloitte and capstone case competition for Zulily."
        ]
      },
      "contact" : {
        "website" : "",
        "phone" : "555-5555-55",
        "email" : "johndoe@gmail.com",
        "other":[]
      },
      "location" : {
        "address" : "",
        "city" : "",
        "region" : "",
        "code" : "",
        "country" : ""
      },
      "projects":[
        {
          "title" : "",
          "category" : "",
          "role" : "",
          "url" : "",
          "start" : "",
          "end" : "",
          "repo" : "",
          "description" : "",
          "summary" : "",
          "keywords" : "",
          "media" : [
          {
            "category" : "",
            "url" : ""
          }
          ]
        }
      ],
      "social" : [],
      "employment" : {
        "summary" : "",
        "history" : [
        {
          "employer" : "S C H A I Women’s Alternative Luxury Brand ",
          "url" : "",
          "position" : "Communications Intern",
          "summary" : "Boost brand presence by managing campaigns and inventory across three e-commerce sites, m-commerce " +
          "(Spring mobile shopping platform), and via media sources. Own social media engagement and copywriting for Mode " +
          "Legion brand. Plan and execute e-mail marketing strategies in Mailchimp. Create digital content and imagery in " +
          "Photoshop and Illustrator. Identify new buyer and PR contacts via online research and social media.",
          "start" : "April 2016",
          "end" : "Current",
          "keywords" : "",
          "highlights" : [
            "Designed and implemented all email campaigns for company launch on Spring mobile app, achieving 5.8% click "+
            "rate, 222% above industry average.","Achieved 7.1% click rate on EMP fashion show campaign, 294% above " +
            "industry average.",
            "Drove success of first runway show with EMP, “Reveal: Northwest Innovation in Fashion” through effective " +
            "social media strategy.","Increased Facebook organic page visits 1,700%, yielding 200% in organically reached " +
            "followers and +325% in follower engagement with **** content.",
            "Grew local subscriber list 40% for trunk show campaign."
          ],
          "location" : "Bellevue, WA"
        },
        {
          "employer" : "Nordstrom ",
          "url" : "",
          "position" : "Retail Management Intern",
          "summary" : "Drove sales and delivered exceptional customer service. Assisted customers in applying for " +
          "Nordstrom credit cards. Worked in several departments including sales and visual merchandising to better " +
          "understand retail. Developed holistic view of business by shadowing areas of Nordstrom outside of internship " +
          "to increase business knowledge.\r\n",
          "start" : "June 2015",
          "end" : "August 2015",
          "keywords" : "",
          "highlights" : [
            "Recognized as the only intern to win every competition during internship.",
            "Won first place for top sales among Northwest regional stores in an intern-team ‘Item of the Day’ competition.",
            "Recognized twice for top sales and Nordstrom Rewards sign-ups among Northwest regional interns.",
            "Won first place in storewide, intern-team case competition: “How to make the customer’s experience more " +
            "convenient inside Nordstrom stores.”"
          ],
          "location" : "Bellevue, WA"
        },
        {
          "employer" : "Hard Candy Licensing",
          "url" : "",
          "position" : "Marketing Intern",
          "summary" : "Created trend forecast and presented to Wal-mart buyers. Drove execution of brand’s first campaign, " +
          "producing digital content for website and brand advertisement. Utilized Adobe Photoshop and Illustrator to " +
          "create original motivational graphics to post on brand’s Facebook and Instagram. Researched brand competition " +
          "by focusing on all social media outlets including Facebook, Instagram, Pinterest, and Twitter. Used research " +
          "to shape unique social media “voice” for the brand.\r\n",
          "start" : "July 2014",
          "end" : "August 2014",
          "keywords" : "",
          "highlights" : [
            "Worked on 3+ projects a week including social media brand research and event organization.",
            "Oversaw creative direction of social media posts by designing images used on Instagram.",
            "Researched fashion trends and compiled presentation booklets for product buyer meetings with Walmart."
          ],
          "location" : "New York, NY"
        }]
      },
      "education" : {
        "summary" : "",
        "level" : "",
        "degree" : "",
        "history" : [
        {
          "institution" : "Michael G. Foster School of Business / University of Washington ",
          "title" : "Bachelors in Business Administration/ Major: Marketing",
          "url":"",
          "start":"",
          "end":"2016",
          "grade":"Cumulative GPA: 3.4",
          "summary":"Semester Exchange: Yonsei University Seoul, South Korea August 2015 - December 2015\r\n" +
          "Studied International Management, New Product Development and Marketing, and Fashion Consumerism. Dean’s List GPA 3.9\r\n",
          "curriculum":[]
        },
        {
          "institution" : "Seattle Central Community College",
          "title" : "Associates of the Arts/ Transfer Degree in Business ",
          "url" : "",
          "start" : "",
          "end" : "2013",
          "grade" : "GPA 3.8",
          "summary" : "",
          "curriculum" : []
        }]
      },
      "affiliation" : {
        "summary" : "",
        "history" : []
      },
      "writing" : [
      {
        "flavor" : "",
        "date" : "",
        "url" : "",
        "author" : "",
        "summary" : "",
        "title" : "",
        "publisher" : {
          "name" : "",
          "url" : ""
        }
      }],
      "reading" : [],
      "speaking" : [
      {
        "title" : "",
        "date" : "",
        "event" : "",
        "location" : "",
        "highlights" : []
      }],
      "interests" : [
      {
        "name" : "",
        "summary" : "",
        "keywords" : []
      }],
      "recognition" : [
      {
        "flavor" : "",
        "from" : "",
        "title" : "",
        "event" : "",
        "summary" : "",
        "date" : ""
      }],
      "languages" : [
      {
        "language" : "Elementary French and Spanish",
        "level" : ""
      }],
      "extracurricular" : [],
      "governance" : [
      {
        "flavor" : "",
        "url" : "",
        "role" : "",
        "organization" : "",
        "start" : "",
        "end" : "",
        "summary" : "",
        "location" : ""
      }],
      "disposition" : {
        "travel" : [""],
        "commitment" : [""],
        "authorization" : [""],
        "remote" : [""]
      },
      "skills" : {
        "sets" : [
        {
          "name" : "",
          "level" : "",
          "skills" : []
        }]
      },
      "service" : {
        "summary" : "",
        "history" : [
        {
          "flavor" : "volunteer",
          "position" : "",
          "organization" : "",
          "role" : "",
          "location" : "",
          "start" : "",
          "end" : "",
          "summary" : "VOLUNTEER\r\nVolunteer teacher’s assistant in Alternative K-8 (3 months)\r\nVolunteer tax preparer " +
          "for low income families with United Way (1 tax season)\r\n",
          "highlights" : []
        }]
      },
      "order" : ",Summary,Skills,Employment,Education,Projects,Interests,Languages,Recognition,Governance,Volunteering,Speaking,Writing,Disposition"
    }

    $scope.categories = [
      {
        name : 'Personal',
        cats : [
          'info',
          'contact',
          'location',
          'education',
        ]
      },
      {
        name : 'Experience',
        cats : [
          'employment',
        ]
      },
      {
        name : 'Skills',
        cats : [
//          'writing',
//          'reading',
//          'speaking',
          'languages',
          'skills',
        ]
      },
      {
        name : 'Accolades / Interests',
        cats : [
          'projects',
//          'social',
          'affiliation',
//          'interests',
//          'recognition',
//          'extracurricular',
//          'governance',
//          'disposition',
          'service',
        ]
      },
    ]

    $scope.select = function(pick){
      $scope.selected = pick
    }

    $scope.isArr = function(obj){
        return angular.isArray(obj)
    }

    $scope.isObject = function(obj) {
      return obj !== null && typeof obj === 'object'
    }

    $scope.selected = 0


}])