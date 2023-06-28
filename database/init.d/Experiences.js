db.experiences.insertMany([
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
          "AWS",
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
        jobName: "DevOps Engineer",
        jobDuration: "Full Time",
        startedTimePosition: new Date("2021-08-01"),
        endedTimePosition: new Date("2022-09-01"),
        jobTasks: [
          "Lead the back-end and DevOps side of a cost rating internal project and developing a REST API from scratch using Azure Functions with Python and SQL Server for the database",
          "Implemented CI/CD with pipelines and releases for the Front-end and Back-end sides of the project for the Sandbox and Production environment using Azure DevOps",
          "Designing and implementing cloud architectures and solutions for internal and external projects of the company using cloud consoles on each, CLI and Terraform (or IaC)",
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
      {
        jobName: "Senior Software Engineer",
        jobDuration: "Full Time",
        startedTimePosition: new Date("2022-09-01"),
        endedTimePosition: new Date(),
        jobTasks: [
          "Developing, maintaining and standardizing tools for the Accenture product named SynOps",
          "Using Python with the Fast API framework, building, debugging and running the project using Docker to be deployed in a Kubernetes cluster",
          "Managing conversations and meetings with different teams to be in sync for features and fixes in order to bring the product that the clients are looking for",
          "Using Git through Azure DevOps Repos to keep our source code with certain branch strategies to have a standardized workflow and deployments"
        ],
        skillset: [
          "Docker",
          "CI/CD",
          "Azure DevOps (Repos, Boards, Pipelines)",
          "Azure",
          "Terraform",
          "Git",
          "Python",
          "FastAPI",
          "PostgreSQL"
        ]
      }
    ],
  },
])