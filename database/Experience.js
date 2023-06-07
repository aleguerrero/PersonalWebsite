var MongoClient = require("mongodb").MongoClient;
var url = "INSERT URL HERE";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("personalWebsite");
  var myobj = [
    {
      companyName: "Amazon",
      started: new Date("2018-10-01"),
      ended: new Date("2019-05-01"),
      jobs: [
        {
          jobName: "Customer Service Associate",
          jobDuration: "Full Time",
          startedTimePosition: new Date("2018-10-01"),
          endedTimePosition: new Date("2019-05-01"),
          jobTasks: [
            "Provide customer service support to end users",
            "Support was given through phone calls and emails",
          ],
          skillset: [
            "Prime Video",
            "Amazon Music",
            "Fire Devices",
            "Alexa",
            "Kindle Devices",
          ],
        },
      ],
    },
    {
      companyName: "Tek Experts",
      started: new Date("2019-05-01"),
      ended: new Date("2020-10-01"),
      jobs: [
        {
          jobName: "Microsoft Dynamics ERP Support Engineer",
          jobDuration: "Full Time",
          startedTimePosition: new Date("2019-05-01"),
          endedTimePosition: new Date("2020-03-01"),
          jobTasks: [
            "Acknowledge and troubleshoot customers' issues through emails, phone calls, chats and remote sessions",
            "Develop, test and research with usage of SQL, X++ and Powershell and my internal resources for problem solving cases",
            "Monitoring of customers errors of development, testing and production environments",
            "Knowledge of Azure Active Directory, Lifecycle Services, Relational Databases, and Development and customizations of the product",
          ],
          skillset: [
            "X++",
            "SQL",
            "Database Maintenance",
            "Azure",
            "Batch jobs",
          ],
        },
        {
          jobName: "Microsoft Dynamics ERP Senior Support Engineer",
          jobDuration: "Full Time",
          startedTimePosition: new Date("2020-03-01"),
          endedTimePosition: new Date("2020-10-01"),
          jobTasks: [
            "Review and help with the tickets that the support engineers were working on",
            "Test, develop and research with the product in order to bring new ideas for my support engineers in order to provide better troubleshooting steps",
            "Report my case reviews, insights, concerns and even testing results to my managers",
          ],
          skillset: [
            "X++",
            "SQL",
            "Database Maintenance",
            "Azure",
            "Batch jobs",
          ],
        },
        {
          jobName: "Microsoft Azure DevOps Senior Support Engineer",
          jobDuration: "Full Time",
          startedTimePosition: new Date("2020-09-01"),
          endedTimePosition: new Date("2020-10-01"),
          jobTasks: [
            "Review and troubleshoot in support tickets for the Azure DevOps platform through emails, chat and call",
            "Test, develop and research with the product in order to bring new ideas for my support engineers in order to provide better troubleshooting steps",
            "Report my case reviews, insights, concerns and even testing results to my managers",
          ],
          skillset: ["Azure Pipelines", "Azure DevOps", "CI/CD", "Automation"],
        },
      ],
    },
    {
      companyName: "Information Technology Support",
      started: new Date("2020-10-01"),
      ended: new Date("2021-08-01"),
      jobs: [
        {
          jobName: "DevOps Operations Engineer",
          jobDuration: "Full Time",
          startedTimePosition: new Date("2020-10-01"),
          endedTimePosition: new Date("2021-08-01"),
          jobTasks: [
            "Review and troubleshoot support tickets for production through Jira Service Desk, Skype, calls and emails",
            "Attend emergency topics where production is down and work on high pressure",
            "Acknowledgement of releases, deployment and status of the servers and the product after changes applied, also attending production problems after deployment, also keeping in touch with the Software Development team to be on the same page",
          ],
          skillset: [
            "Windows Server (IIS Management, Event Viewer)",
            "SQL Server",
            "PowerShell",
            "Git",
            "REST API (Swagger and Postman)",
            "LogicMonitor",
            "Splunk",
          ],
        },
      ],
    },
    {
      companyName: "Accenture",
      started: new Date("2021-08-01"),
      ended: new Date(),
      jobs: [
        {
          jobName: "Customer Service Associate",
          jobDuration: "Full Time",
          startedTimePosition: new Date("2018-10-01"),
          endedTimePosition: new Date("2019-05-01"),
          jobTasks: [
            "Designing and implementing cloud architectures and solutions for internal and external projects",
            "Building and deploying software through CI/CD practices",
            "Working by the side of the Software Development teams and Management teams to discuss and achieve practical solutions for our customers’ requests"
          ],
          skillset: [
            "Docker",
            "CI/CD",
            "Azure DevOps (Repos, Boards, Pipelines)",
            "Azure",
            "Terraform",
            "Git",
            "Python",
            "SQL Server"
          ],
        },
      ],
    },
  ];
  dbo.collection("Experience").insertMany(myobj, function (err, result) {
    if (err) throw err;
    console.log("Number of documents inserted: " + result.insertedCount);
    db.close();
  });
});
