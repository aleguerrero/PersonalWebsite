db.technologies.insertMany(
    [
        { name: "Java", type: "ProgrammingLanguage", dateLearned: new Date("2016-09-01"), frameworks: ["Spring Boot", "Spring MVC"], imageName: "java.png"},
        { name: "C#", type: "ProgrammingLanguage", dateLearned: new Date("2017-09-01"), frameworks: [".NET", "ASP.NET", "ASP.NET Core"], imageName: "csharp.png" },
        { name: "Python", type: "ProgrammingLanguage", dateLearned: new Date("2018-05-01"), frameworks: ["FastAPI", "Flask", "Azure Functions"], imageName: "python.png"},
        { name: "JavaScript", type: "ProgrammingLanguage", dateLearned: new Date("2018-01-01"), frameworks: ["ReactJS", "jQuery", "Express"], imageName: "javascript.png"},
        { name: "SQL Server", type: "Database", dateLearned: new Date("2017-01-01"), imageName: "sqlserver.png" },
        { name: "Oracle", type: "Database", dateLearned: new Date("2017-09-01"), imageName: "oracle.png" },
        { name: "Firebase NoSQL", type: "Database", dateLearned: new Date("2018-05-01"), imageName: "firebase.png" },
        { name: "PostgreSQL", type: "Database", dateLearned: new Date("2022-05-01"), imageName: "postgresql.png" },
        { name: "MongoDB", type: "Database", dateLearned: new Date("2022-01-01"), imageName: "mongodb.png" },
        { name: "Azure", type: "PublicCloudProviders", dateLearned: new Date("2018-09-01"), tools: ["VPNs", "Web Apps", "Virtual Machines", "Serverless Instances", "Databases", "Containers", "Blob Storage", "Monitoring and Insights", "AAD", "IAM"], imageName: "azure.png"},
        { name: "AWS", type: "PublicCloudProviders", dateLearned: new Date("2020-09-01"), tools: ["EC2", "EKS", "CloudFormation", "Databases with RDS and DynamoDB", "S3"], imageName: "aws.png" },
        { name: "Google Cloud", type: "PublicCloudProviders", dateLearned: new Date("2021-09-01"), imageName: "gcp.png"},
        { name: "Azure DevOps", type: "DevOps", dateLearned: new Date("2020-01-01"), tools: ["Azure Repos", "Azure Pipelines", "Azure Boards", "Azure Artifacts"], imageName: "azuredevops.png"},
        { name: "Docker", type: "DevOps", dateLearned: new Date("2021-01-01"), tools: ["Docker Images", "Volumes", "Docker Compose", "Container networking"], imageName: "docker.png"},
        { name: "Terraform", type: "DevOps", dateLearned: new Date("2021-01-01"), imageName: "terraform.png"},
        { name: "Kubernetes", type: "DevOps", dateLearned: new Date("2021-01-01"), imageName: "kubernetes.png"},
        { name: "Ansible", type: "DevOps", dateLearned: new Date("2021-01-01"), imageName: "ansible.png"},
        { name: "Jenkins", type: "DevOps", dateLearned: new Date("2021-01-01"), imageName: "jenkins.png"}
    ])