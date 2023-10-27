db.technologies.insertMany(
    [
        { name: "Java", type: "ProgrammingLanguage", dateLearned: new Date("2016-09-01"), frameworks: ["Spring Boot", "Spring MVC"]},
        { name: "C#", type: "ProgrammingLanguage", dateLearned: new Date("2017-09-01"), frameworks: [".NET", "ASP.NET", "ASP.NET Core"] },
        { name: "Python", type: "ProgrammingLanguage", dateLearned: new Date("2018-05-01"), frameworks: ["FastAPI", "Flask", "Azure Functions"]},
        { name: "JavaScript", type: "ProgrammingLanguage", dateLearned: new Date("2018-01-01"), frameworks: ["ReactJS", "jQuery", "Express"]},
        { name: "SQL Server", type: "Database", dateLearned: new Date("2017-01-01") },
        { name: "Oracle", type: "Database", dateLearned: new Date("2017-09-01") },
        { name: "Firebase NoSQL", type: "Database", dateLearned: new Date("2018-05-01") },
        { name: "MongoDB", type: "Database", dateLearned: new Date("2022-01-01") },
        { name: "Azure", type: "PublicCloudProviders", dateLearned: new Date("2018-09-01"), tools: ["VPNs", "Web Apps", "Virtual Machines", "Serverless Instances", "Databases", "Containers", "Blob Storage", "Monitoring and Insights", "AAD", "IAM"]},
        { name: "AWS", type: "PublicCloudProviders", dateLearned: new Date("2020-09-01"), tools: ["EC2", "EKS", "CloudFormation", "Databases with RDS and DynamoDB", "S3"] },
        { name: "Google Cloud", type: "PublicCloudProviders", dateLearned: new Date("2021-09-01")},
        { name: "Azure DevOps", type: "DevOps", dateLearned: new Date("2020-01-01"), tools: ["Azure Repos", "Azure Pipelines", "Azure Boards", "Azure Artifacts"]},
        { name: "Docker", type: "DevOps", dateLearned: new Date("2021-01-01"), tools: ["Docker Images", "Volumes", "Docker Compose", "Container networking"]},
        { name: "Terraform", type: "DevOps", dateLearned: new Date("2021-01-01")},
        { name: "Kubernetes", type: "DevOps", dateLearned: new Date("2021-01-01")}
    ])