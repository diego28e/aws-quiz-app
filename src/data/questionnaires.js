// src/data/questionnaires.js

const questionnaires = [
  {
    id: "quiz1",
    title: "Practice exam 1 🥇",
    questions: [
      {
        question:
          "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
        type: "single",
        options: ["AWS Management Console", "AWS SDK", "AWS API", "AWS CLI"],
      },
      {
        question:
          "Which of the following is an example of horizontal scaling in the AWS Cloud?",
        type: "single",
        options: [
          "Adding more EC2 instances of the same size to handle an increase in traffic.",
          "Adding more RAM capacity to an EC2 instance",
          "Increasing the compute capacity of a single EC2 instance to address the growing demands of an application.",
          "Replacing an existing EC2 instance with a larger, more powerful one",
        ],
      },
      {
        question:
          "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
        type: "single",
        options: [
          "AWS CloudTrail",
          "Amazon Inspector",
          "AWS Trusted Advisor",
          "EC2 Instance Usage Report",
        ],
      },
      {
        question:
          "Which of the below options are related to the reliability of AWS? (Choose TWO)",
        type: "multiple",
        options: [
          "Automatically provisioning new resources to meet demand.",
          "Ability to recover quickly from failures.",
          "Applying the principle of least privilege to all AWS resources.",
          "All AWS services are considered Global Services, and this design helps customers serve their international users.",
          "Providing compensation to customers if issues occur.",
        ],
      },
      {
        question:
          "Which statement is true regarding the AWS Shared Responsibility Model?",
        type: "single",
        options: [
          "Responsibilities vary depending on the services used.",
          "Security of the IaaS services is the responsibility of AWS.",
          "Patching the guest OS is always the responsibility of AWS.",
          "Security of the managed services is the responsibility of the customer.",
        ],
      },
      {
        question:
          "You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?",
        type: "single",
        options: [
          "All accounts can receive the hourly cost benefit of the Reserved Instances.",
          "The Reserved Instance discounts can only be shared with the master account.",
          "Patching the guest OS is always the responsibility of AWS.",
          "The purchased instances will have better performance than On-demand instances",
        ],
      },
      {
        question:
          "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
        type: "single",
        options: [
          "Deploy the application across multiple Regions and Availability Zones.",
          "Deploy the application across multiple VPC's and subnets.",
          "Deploy the application across multiple Availability Zones and subnets.",
          "Deploy the application across multiple Availability Zones and Edge locations.",
        ],
      },
      {
        question: "What does AWS Snowball provide? (Choose TWO)",
        type: "multiple",
        options: [
          "Built-in computing capabilities that allow customers to process data locally.",
          "Secure transfer of large amounts of data into and out of the AWS.",
          "A catalog of third-party software solutions that customers need to build solutions and run their businesses",
          "A hybrid cloud storage between on-premises environments and the AWS Cloud.",
          "An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS.",
        ],
      },
      {
        question:
          "A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?",
        type: "single",
        options: [
          "AWS Support Concierge",
          "AWS Health Dashboard",
          "AWS Customer Service",
          "AWS Operations Support",
        ],
      },
      {
        question:
          "A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?",
        type: "single",
        options: [
          "Deploying new Amazon EC2 instances in a Region located in the US.",
          "Building a new data center in the US and implementing a hybrid model.",
          "Registering a new US domain name to serve the users in the US.",
          "Applying the Amazon Connect latency-based routing policy",
        ],
      },
      {
        question:
          "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team??",
        type: "single",
        options: [
          "opIAM user groups",
          "IAM roles",
          "IAM users",
          "AWS Organizations",
        ],
      },
      {
        question:
          "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
        type: "single",
        options: [
          "AWS Database Migration Service",
          "AWS OpsWorks",
          "AWS Server Migration Service",
          "AWS Application Discovery Service",
        ],
      },
      {
        question:
          "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
        type: "single",
        options: [
          "opImplement elasticity",
          "Build security in every layer",
          "Parallelize tasks",
          "Adopt monolithic architecture",
        ],
      },
      {
        question:
          "What are the benefits of having infrastructure hosted in AWS? (Choose TWO)",
        type: "multiple",
        options: [
          "Increasing speed and agility",
          "All of the physical security and most of the data/network security are taken care of for you",
          "Operating applications on behalf of customers",
          "Gaining complete control over the physical infrastructure",
          "There is no need to worry about security",
        ],
      },
      {
        question:
          "What is the advantage of the AWS-recommended practice of 'decoupling' applications?",
        type: "single",
        options: [
          "Reduces inter-dependencies so that failures do not impact other components of the application",
          "Allows treating an application as a single, cohesive unit",
          "Allows updates of any monolithic application quickly and easily",
          "Allows tracking of any API call made to any AWS service",
        ],
      },
      {
        question:
          "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
        type: "single",
        options: [
          "AWS Cost & Usage Reports",
          "AWS Systems Manager",
          "AWS Pricing Calculator",
          "AWS Budgets",
        ],
      },
      {
        question:
          "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
        type: "single",
        options: [
          "Each AWS account gets volume discounts.",
          "Each AWS account gets five times the free-tier services capacity",
          "The consolidated billing feature is just for organizational purpose",
          "AWS services' costs will be reduced to half the original price",
        ],
      },
      {
        question:
          "What should you do in order to keep the data on EBS volumes safe? (Choose TWO)",
        type: "multiple",
        options: [
          "Ensure that EBS data is encrypted at rest",
          "Create EBS snapshots",
          "Regularly update firmware on EBS devices",
          "Store a backup daily in an external drive",
          "Prevent any unauthorized access to AWS data centers",
        ],
      },
      {
        question:
          "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture's design?",
        type: "single",
        options: [
          "By automatically provisioning the required AWS resources based on changes in demand",
          "By reducing interdependencies between application components wherever possible",
          "By automatically scaling your AWS resources using an Elastic Load Balancer",
          "By automatically scaling your on-premises resources based on changes in demand",
        ],
      },
      {
        question:
          "A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? (Choose TWO)",
        type: "multiple",
        options: [
          "Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded",
          "Configure the AWS Budgets Service to alert the company when the threshold is exceeded",
          "Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis",
          "Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded",
          "Configure the Amazon Connect Service to alert the company when the threshold is exceeded",
        ],
      },
      /* To be translated down below */
      {
        question:
          "What does Amazon CloudFront use to distribute content to global users with low latency?",
        type: "single",
        options: [
          "AWS Global Accelerator",
          "AWS Regions",
          "AWS Edge Locations",
          "AWS Availability Zones",
        ],
      },
      {
        question: "What does the 'Principle of Least Privilege' refer to?",
        type: "single",
        options: [
          "You should grant your users only the permissions they need when they need them and nothing more",
          "All IAM users should have at least the necessary permissions to access the core AWS services",
          "All trusted IAM users should have access to any AWS service in the respective AWS account",
          "IAM users should not be granted any permissions; to keep your account safe",
        ],
      },
      {
        question:
          "Which of the following does NOT belong to the AWS Cloud Computing models?",
        type: "single",
        options: [
          "Networking as a Service (NaaS)",
          "Software as a Service (SaaS)",
          "Infrastructure as a Service (IaaS)",
          "Platform as a Service (PaaS)",
        ],
      },
      {
        question:
          "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
        type: "single",
        options: [
          "Amazon S3 Glacier Deep Archive",
          "Amazon EBS",
          "AWS Marketplace",
          "S3 Intelligent-Tiering",
        ],
      },
      {
        question: "Which service provides DNS in the AWS cloud?",
        type: "single",
        options: ["Route 53", "AWS Config", "Amazon CloudFront", "Amazon EMR"],
      },
      {
        question:
          "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)",
        type: "multiple",
        options: [
          "AWS Shield",
          "AWS WAF",
          "AWS Config",
          "Amazon Cognito",
          "AWS KMS",
        ],
      },
      {
        question:
          "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application's response time is optimal?",
        type: "single",
        options: [
          "Amazon ElastiCache",
          "Amazon EBS volume",
          "AWS Storage Gateway",
          "AWS OpsWorks",
        ],
      },
      {
        question:
          "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
        type: "single",
        options: [
          "On-demand instances",
          "Dedicated instances",
          "Spot instances",
          "Reserved instances",
        ],
      },
      {
        question:
          "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
        type: "single",
        options: [
          "Spot Instances",
          "Dedicated Instances",
          "On-demand Instances",
          "Reserved Instances",
        ],
      },
      {
        question:
          "Which of the following can be described as a global content delivery network (CDN) service?",
        type: "single",
        options: [
          "Amazon CloudFront",
          "AWS Regions",
          "AWS Direct Connect",
          "AWS VPN",
        ],
      },
      {
        question:
          "Which of the following services allows customers to manage their agreements with AWS?",
        type: "single",
        options: [
          "AWS Artifact",
          "AWS Certificate Manager",
          "AWS Systems Manager",
          "AWS Organizations",
        ],
      },
      {
        question: "Question",
        type: "single",
        options: ["option", "option", "option", "option"],
      },
      {
        question:
          "Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)",
        type: "multiple",
        options: [
          "Amazon DynamoDB",
          "Amazon Elastic MapReduce",
          "Amazon VPC",
          "AWS IAM",
          "Amazon Elastic Compute Cloud",
        ],
      },
      {
        question:
          "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
        type: "single",
        options: [
          "Amazon DynamoDB",
          "Amazon Aurora",
          "Amazon Elastic Block Store",
          "Amazon Redshift",
        ],
      },
      {
        question:
          "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
        type: "single",
        options: [
          "Technical Account Manager (TAM)",
          "AWS Consulting Partners",
          "Infrastructure Event Management (IEM) engineer",
          "AWS Identity and Access Management (IAM) user",
        ],
      },
      {
        question:
          "How can you view the distribution of AWS spending in one of your AWS accounts?",
        type: "single",
        options: [
          "By using AWS Cost Explorer",
          "By using Amazon VPC console",
          "By contacting the AWS Support team",
          "By contacting the AWS Finance team",
        ],
      },
      {
        question:
          "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?",
        type: "single",
        options: [
          "Access keys",
          "Secret token",
          "UserID",
          "User name and password",
        ],
      },
      {
        question:
          "You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?",
        type: "single",
        options: [
          "Contact the AWS Abuse team",
          "Contact the AWS Customer Service team",
          "Contact the AWS Concierge team",
          "Contact the AWS Security team",
        ],
      },
      {
        question: "Select TWO examples of the AWS shared controls",
        type: "multiple",
        options: [
          "Patch Management",
          "Configuration Management",
          "Data Center operations",
          "VPC Management",
          "IAM Management",
        ],
      },
      {
        question:
          "In order to implement best practices when dealing with a “Single Point of Failure,” you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)",
        type: "multiple",
        options: ["ELB", "Auto Scaling", "Amazon Athen", "ECR", "Amazon EC2"],
      },
      {
        question:
          "A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?",
        type: "single",
        options: [
          "Amazon CloudFront",
          "AWS CloudFormation",
          "Amazon Kinesis Video Streams",
          "Amazon SNS",
        ],
      },
      {
        question:
          "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
        type: "single",
        options: [
          "Amazon Aurora",
          "Amazon DynamoDB",
          "Amazon Neptune",
          "A MySQL database installed on an EC2 instance",
        ],
      },
      {
        question:
          "What is the AWS service that enables AWS architects to manage infrastructure as code?",
        type: "single",
        options: [
          "AWS CloudFormation",
          "AWS Config",
          "Amazon SES",
          "Amazon EMR",
        ],
      },
      {
        question:
          "Under the shared responsibility model, which of the following is the responsibility of AWS?",
        type: "single",
        options: [
          "Configuring infrastructure devices",
          "Client-side encryption",
          "Server-side encryption",
          "Filtering traffic with Security Groups",
        ],
      },
      {
        question: "What does the AWS Health Dashboard provide? (Choose TWO)",
        type: "multiple",
        options: [
          "Detailed troubleshooting guidance to address AWS events impacting your resources",
          "Personalized view of AWS service health",
          "Health checks for Auto Scaling instances",
          "Recommendations for Cost Optimization",
          "A dashboard detailing vulnerabilities in your applications",
        ],
      },
      {
        question:
          "You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can’t reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?",
        type: "single",
        options: [
          "Amazon CloudWatch",
          "AWS CloudTrail",
          "AWS Config",
          "AWS Lambda",
        ],
      },
      {
        question:
          "Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?",
        type: "single",
        options: [
          "AWS Trusted Advisor",
          "AWS Secrets Manager",
          "AWS Management Console",
          "AWS Shield",
        ],
      },
      {
        question:
          "Which of the following is not a benefit of Amazon S3? (Choose TWO)",
        type: "multiple",
        options: [
          "Amazon S3 can run any type of application or backend system",
          "Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere",
          "Amazon S3 provides 99.999999999% (11 9's) of data durability",
          "Amazon S3 stores any number of objects, but with object size limits",
          "Amazon S3 provides unlimited storage for any type of data",
        ],
      },
      {
        question:
          "In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)",
        type: "multiple",
        options: [
          "Setting password complexity rules",
          "Configuring network access rules",
          "Patching the Network infrastructure",
          "Controlling physical access to compute resources",
          "Disk disposal",
        ],
      },
      {
        question:
          "What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?",
        type: "single",
        options: [
          "AWS Quick Start reference deployments",
          "AWS OpsWorks",
          "Amazon CloudWatch",
          "Amazon Aurora",
        ],
      },
      {
        question:
          "An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?",
        type: "single",
        options: ["Convertible RI", "Standard RI", "Premium RI", "Elastic RI"],
      },
    ],
  },
  {
    id: "quiz2",
    title: "Examen de practica 1 🥇",
    questions: [
      {
        question:
          "AWS permite a los usuarios gestionar sus recursos utilizando una interfaz de usuario basada en la web. ¿Cómo se llama esta interfaz?",
        type: "single",
        options: [
          "Consola de administración de AWS",
          "AWS SDK",
          "AWS API",
          "AWS CLI",
        ],
      },
      {
        question:
          "¿Cuál de las siguientes es un ejemplo de escalado horizontal en la Nube de AWS?",
        type: "single",
        options: [
          "Agregar más instancias EC2 del mismo tamaño para manejar un aumento en el tráfico.",
          "Agregar más capacidad de RAM a una instancia EC2",
          "Aumentar la capacidad de cómputo de una sola instancia EC2 para abordar las crecientes demandas de una aplicación.",
          "Reemplazar una instancia EC2 existente por una más grande y poderosa",
        ],
      },
      {
        question:
          "Has notado que varias instancias críticas de Amazon EC2 han sido terminadas. ¿Cuál de los siguientes servicios de AWS te ayudaría a determinar quién tomó esta acción?",
        type: "single",
        options: [
          "AWS CloudTrail",
          "Amazon Inspector",
          "AWS Trusted Advisor",
          "Informe de uso de instancias EC2",
        ],
      },
      {
        question:
          "¿Cuáles de las siguientes opciones están relacionadas con la confiabilidad de AWS? (Elige DOS)",
        type: "multiple",
        options: [
          "Provisionamiento automático de nuevos recursos para satisfacer la demanda.",
          "Capacidad de recuperarse rápidamente de fallos.",
          "Aplicar el principio de menor privilegio a todos los recursos de AWS.",
          "Todos los servicios de AWS se consideran Servicios Globales, y este diseño ayuda a los clientes a servir a sus usuarios internacionales.",
          "Proporcionar compensación a los clientes si ocurren problemas.",
        ],
      },
      {
        question:
          "¿Cuál afirmación es verdadera con respecto al Modelo de Responsabilidad Compartida de AWS?",
        type: "single",
        options: [
          "Las responsabilidades varían dependiendo de los servicios utilizados.",
          "La seguridad de los servicios IaaS es responsabilidad de AWS.",
          "La aplicación de parches al sistema operativo huésped es siempre responsabilidad de AWS.",
          "La seguridad de los servicios gestionados es responsabilidad del cliente.",
        ],
      },
      {
        question:
          "Has configurado la facturación consolidada para varias cuentas de AWS. Una de las cuentas ha adquirido varias instancias reservadas por 3 años. ¿Cuál de las siguientes es verdadera en relación con este escenario?",
        type: "single",
        options: [
          "Todas las cuentas pueden recibir el beneficio de costo por hora de las instancias reservadas.",
          "Los descuentos de las instancias reservadas solo pueden compartirse con la cuenta principal.",
          "La aplicación de parches al sistema operativo huésped es siempre responsabilidad de AWS.",
          "Las instancias compradas tendrán mejor rendimiento que las instancias bajo demanda",
        ],
      },
      {
        question:
          "Una empresa ha desarrollado una aplicación web de comercio electrónico en AWS. ¿Qué deberían hacer para garantizar que la aplicación tenga el mayor nivel de disponibilidad?",
        type: "single",
        options: [
          "Desplegar la aplicación en múltiples Regiones y Zonas de Disponibilidad.",
          "Desplegar la aplicación en múltiples VPC y subredes.",
          "Desplegar la aplicación en múltiples Zonas de Disponibilidad y subredes.",
          "Desplegar la aplicación en múltiples Zonas de Disponibilidad y ubicaciones de borde.",
        ],
      },
      {
        question: "¿Qué proporciona AWS Snowball? (Elige DOS)",
        type: "multiple",
        options: [
          "Capacidades de cómputo integradas que permiten a los clientes procesar datos localmente.",
          "Transferencia segura de grandes cantidades de datos hacia y desde AWS.",
          "Un catálogo de soluciones de software de terceros que los clientes necesitan para construir soluciones y operar sus negocios.",
          "Un almacenamiento en nube híbrido entre los entornos locales y la Nube de AWS.",
          "Un servicio de transferencia de datos a escala Exabyte que permite mover cantidades extremadamente grandes de datos a AWS.",
        ],
      },
      {
        question:
          "Una empresa tiene un plan de Soporte Empresarial de AWS. Quieren orientación rápida y eficiente con sus consultas de facturación y cuenta. ¿Cuál de los siguientes servicios debería utilizar la empresa?",
        type: "single",
        options: [
          "Conserje de Soporte de AWS",
          "Panel de Salud de AWS",
          "Servicio al Cliente de AWS",
          "Soporte de Operaciones de AWS",
        ],
      },
      {
        question:
          "Una empresa japonesa aloja sus aplicaciones en instancias de Amazon EC2 en la Región de Tokio. La empresa ha abierto nuevas sucursales en Estados Unidos, y los usuarios de EE. UU. se quejan de alta latencia. ¿Qué puede hacer la empresa para reducir la latencia para los usuarios en EE. UU. mientras minimiza los costos?",
        type: "single",
        options: [
          "Desplegar nuevas instancias de Amazon EC2 en una Región ubicada en EE. UU.",
          "Construir un nuevo centro de datos en EE. UU. e implementar un modelo híbrido.",
          "Registrar un nuevo dominio de EE. UU. para servir a los usuarios en EE. UU.",
          "Aplicar la política de enrutamiento basada en latencia de Amazon Connect",
        ],
      },
      {
        question:
          "Una organización tiene un gran número de empleados técnicos que operan su infraestructura en la Nube de AWS. ¿Qué proporciona AWS para ayudar a organizarlos en equipos y luego asignar los permisos adecuados para cada equipo?",
        type: "single",
        options: [
          "Grupos de usuarios de IAM",
          "Roles de IAM",
          "Usuarios de IAM",
          "AWS Organizations",
        ],
      },
      {
        question:
          "Una empresa ha decidido migrar su base de datos Oracle a AWS. ¿Qué servicio de AWS puede ayudar a lograr esto sin afectar negativamente la funcionalidad de la base de datos fuente?",
        type: "single",
        options: [
          "Servicio de Migración de Bases de Datos de AWS",
          "AWS OpsWorks",
          "Servicio de Migración de Servidores de AWS",
          "Servicio de Descubrimiento de Aplicaciones de AWS",
        ],
      },
      {
        question:
          "Ajustar la capacidad de cómputo dinámicamente para reducir costos es una implementación de cuál de las mejores prácticas de la nube de AWS?",
        type: "single",
        options: [
          "Implementar elasticidad",
          "Construir seguridad en cada capa",
          "Paralelizar tareas",
          "Adoptar una arquitectura monolítica",
        ],
      },
      {
        question:
          "¿Cuáles son los beneficios de tener infraestructura alojada en AWS? (Elige DOS)",
        type: "multiple",
        options: [
          "Incrementar la velocidad y agilidad",
          "Toda la seguridad física y la mayor parte de la seguridad de datos/red están a cargo de AWS.",
          "Operar aplicaciones en nombre de los clientes",
          "Obtener control total sobre la infraestructura física",
          "No es necesario preocuparse por la seguridad",
        ],
      },
      {
        question:
          "¿Cuál es la ventaja de la práctica recomendada por AWS de 'desacoplar' aplicaciones?",
        type: "single",
        options: [
          "Reduce las interdependencias para que los fallos no afecten a otros componentes de la aplicación",
          "Permite tratar una aplicación como una unidad única y cohesiva",
          "Permite actualizar cualquier aplicación monolítica de forma rápida y sencilla",
          "Permite rastrear cualquier llamada API realizada a cualquier servicio de AWS",
        ],
      },
      {
        question:
          "¿Cuál de los siguientes ayuda a un cliente a ver la actividad de facturación de Amazon EC2 del mes pasado?",
        type: "single",
        options: [
          "Informes de Costos y Uso de AWS",
          "AWS Systems Manager",
          "Calculadora de Precios de AWS",
          "Presupuestos de AWS",
        ],
      },
      {
        question:
          "¿Qué se obtiene al configurar la facturación consolidada para cinco cuentas de AWS diferentes bajo otra cuenta maestra?",
        type: "single",
        options: [
          "Cada cuenta de AWS obtiene descuentos por volumen.",
          "Cada cuenta de AWS obtiene cinco veces la capacidad de los servicios del nivel gratuito.",
          "La función de facturación consolidada es solo para fines organizativos.",
          "Los costos de los servicios de AWS se reducirán a la mitad del precio original.",
        ],
      },
      {
        question:
          "¿Qué deberías hacer para mantener los datos en volúmenes EBS seguros? (Elige DOS)",
        type: "multiple",
        options: [
          "Asegurarse de que los datos de EBS estén cifrados en reposo",
          "Crear instantáneas de EBS",
          "Actualizar regularmente el firmware en los dispositivos EBS",
          "Almacenar una copia de seguridad diaria en una unidad externa",
          "Evitar cualquier acceso no autorizado a los centros de datos de AWS",
        ],
      },
      {
        question:
          "Uno de los principios más importantes de las mejores prácticas de AWS a seguir es el principio de elasticidad en la arquitectura en la nube. ¿Cómo mejora este principio el diseño de tu arquitectura?",
        type: "single",
        options: [
          "Provisionando automáticamente los recursos de AWS necesarios en función de los cambios en la demanda",
          "Reduciendo las interdependencias entre los componentes de la aplicación siempre que sea posible",
          "Escalando automáticamente tus recursos de AWS utilizando un Balanceador de Carga Elástico",
          "Escalando automáticamente tus recursos locales en función de los cambios en la demanda",
        ],
      },
      {
        question:
          "Una empresa emergente opera con fondos limitados y está extremadamente preocupada por los excesos de costos. ¿Cuáles de las siguientes opciones pueden usarse para notificar a la empresa cuando su factura mensual de AWS supere los $2000? (Elige DOS)",
        type: "multiple",
        options: [
          "Configurar una alarma de facturación de CloudWatch que dispare una notificación SNS cuando se supere el umbral",
          "Configurar el Servicio de Presupuestos de AWS para alertar a la empresa cuando se supere el umbral",
          "Configurar el Servicio de Correo Electrónico Simple de Amazon para enviar alertas de facturación a su dirección de correo electrónico diariamente",
          "Configurar AWS CloudTrail para eliminar automáticamente todos los recursos de AWS cuando se supere el umbral",
          "Configurar el Servicio Amazon Connect para alertar a la empresa cuando se supere el umbral",
        ],
      },
      {
        question:
          "¿Qué utiliza Amazon CloudFront para distribuir contenido a usuarios globales con baja latencia?",
        type: "single",
        options: [
          "AWS Global Accelerator",
          "Regiones de AWS",
          "Ubicaciones de borde de AWS",
          "Zonas de disponibilidad de AWS",
        ],
      },
      {
        question: "¿A qué se refiere el 'Principio de Menor Privilegio'?",
        type: "single",
        options: [
          "Solo debes otorgar a tus usuarios los permisos que necesitan cuando los necesitan y nada más",
          "Todos los usuarios de IAM deben tener al menos los permisos necesarios para acceder a los servicios principales de AWS",
          "Todos los usuarios de IAM de confianza deben tener acceso a cualquier servicio de AWS en la cuenta respectiva",
          "A los usuarios de IAM no se les debe otorgar ningún permiso para mantener tu cuenta segura",
        ],
      },
      {
        question:
          "¿Cuál de los siguientes NO pertenece a los modelos de Computación en la Nube de AWS?",
        type: "single",
        options: [
          "Networking as a Service (NaaS)",
          "Software as a Service (SaaS)",
          "Infrastructure as a Service (IaaS)",
          "Platform as a Service (PaaS)",
        ],
      },
      {
        question:
          "El proceso de identificación de una empresa de servicios financieros en línea requiere que los nuevos usuarios completen una entrevista en línea con su equipo de seguridad. Las entrevistas grabadas solo se requieren en caso de un problema legal o una infracción de cumplimiento normativo. ¿Cuál es el servicio más rentable para almacenar los videos grabados?",
        type: "single",
        options: [
          "Amazon S3 Glacier Deep Archive",
          "Amazon EBS",
          "AWS Marketplace",
          "S3 Intelligent-Tiering",
        ],
      },
      {
        question: "¿Qué servicio proporciona DNS en la nube de AWS?",
        type: "single",
        options: ["Route 53", "AWS Config", "Amazon CloudFront", "Amazon EMR"],
      },
      {
        question:
          "Se registran cientos de miles de ataques DDoS cada mes en todo el mundo. ¿Qué servicio proporciona AWS para ayudar a proteger a los clientes de AWS de estos ataques? (Elige DOS)",
        type: "multiple",
        options: [
          "AWS Shield",
          "AWS WAF",
          "AWS Config",
          "Amazon Cognito",
          "AWS KMS",
        ],
      },
      {
        question:
          "Una empresa está implementando una nueva aplicación web de dos niveles en AWS. ¿Dónde se deben almacenar los datos más accedidos para que el tiempo de respuesta de la aplicación sea óptimo?",
        type: "single",
        options: [
          "Amazon ElastiCache",
          "Volumen de Amazon EBS",
          "AWS Storage Gateway",
          "AWS OpsWorks",
        ],
      },
      {
        question:
          "Quieres ejecutar una aplicación de cuestionario por solo un día (sin interrupciones), ¿qué opción de compra de Amazon EC2 deberías utilizar?",
        type: "single",
        options: [
          "Instancias bajo demanda",
          "Instancias dedicadas",
          "Instancias spot",
          "Instancias reservadas",
        ],
      },
      {
        question:
          "Estás trabajando en un proyecto que implica crear miniaturas de millones de imágenes. El tiempo de actividad constante no es un problema, y no se requiere procesamiento continuo. ¿Qué opción de compra de EC2 sería la más rentable?",
        type: "single",
        options: [
          "Instancias spot",
          "Instancias dedicadas",
          "Instancias bajo demanda",
          "Instancias reservadas",
        ],
      },
      {
        question:
          "¿Cuál de los siguientes puede describirse como un servicio de red de entrega de contenido global (CDN)?",
        type: "single",
        options: [
          "Amazon CloudFront",
          "Regiones de AWS",
          "AWS Direct Connect",
          "AWS VPN",
        ],
      },
      {
        question:
          "¿Cuál de los siguientes servicios permite a los clientes gestionar sus acuerdos con AWS?",
        type: "single",
        options: [
          "AWS Artifact",
          "AWS Certificate Manager",
          "AWS Systems Manager",
          "AWS Organizations",
        ],
      },
      {
        question:
          "¿Cuál de los siguientes son ejemplos de servicios gestionados por AWS, donde AWS es responsable de las cargas operativas y de mantenimiento del servicio? (Elige DOS)",
        type: "multiple",
        options: [
          "Amazon DynamoDB",
          "Amazon Elastic MapReduce",
          "Amazon VPC",
          "AWS IAM",
          "Amazon Elastic Compute Cloud",
        ],
      },
      {
        question:
          "Tu empresa tiene una aplicación de almacenamiento de datos que requiere acceso a una base de datos NoSQL. ¿Qué oferta de base de datos de AWS cumpliría con este requisito?",
        type: "single",
        options: [
          "Amazon DynamoDB",
          "Amazon Aurora",
          "Amazon Elastic Block Store",
          "Amazon Redshift",
        ],
      },
      {
        question:
          "Como parte del plan de soporte Enterprise, ¿quién es el principal punto de contacto para las necesidades de soporte continuas?",
        type: "single",
        options: [
          "Gerente de Cuenta Técnica (TAM)",
          "Socios Consultores de AWS",
          "Ingeniero de Gestión de Eventos de Infraestructura (IEM)",
          "Usuario de AWS Identity and Access Management (IAM)",
        ],
      },
      {
        question:
          "¿Cómo puedes ver la distribución del gasto en AWS en una de tus cuentas de AWS?",
        type: "single",
        options: [
          "Usando AWS Cost Explorer",
          "Usando la consola de Amazon VPC",
          "Contactando al equipo de Soporte de AWS",
          "Contactando al equipo de Finanzas de AWS",
        ],
      },
      {
        question:
          "¿Qué debe proporcionar un usuario de IAM para interactuar con los servicios de AWS utilizando la Interfaz de Línea de Comandos de AWS (AWS CLI)?",
        type: "single",
        options: [
          "Claves de acceso",
          "Token secreto",
          "ID de usuario",
          "Nombre de usuario y contraseña",
        ],
      },
      {
        question:
          "Tienes el soporte básico de AWS, y has descubierto que algunos recursos de AWS están siendo utilizados maliciosamente y esos recursos podrían comprometer tus datos. ¿Qué deberías hacer?",
        type: "single",
        options: [
          "Contactar al equipo de Abuso de AWS",
          "Contactar al equipo de Servicio al Cliente de AWS",
          "Contactar al equipo de Conserjería de AWS",
          "Contactar al equipo de Seguridad de AWS",
        ],
      },
      {
        question: "Selecciona DOS ejemplos de los controles compartidos de AWS",
        type: "multiple",
        options: [
          "Gestión de parches",
          "Gestión de configuración",
          "Operaciones del centro de datos",
          "Gestión de VPC",
          "Gestión de IAM",
        ],
      },
      {
        question:
          "Para implementar las mejores prácticas al tratar con un “Punto Único de Fallo”, deberías intentar automatizar lo más posible tanto la detección como la reacción ante fallos. ¿Cuál de los siguientes servicios de AWS ayudaría? (Elige DOS)",
        type: "multiple",
        options: ["ELB", "Auto Scaling", "Amazon Athena", "ECR", "Amazon EC2"],
      },
      {
        question:
          "Una empresa planea alojar un sitio web educativo en AWS. Sus cursos en video serán transmitidos en todo el mundo. ¿Cuál de los siguientes servicios de AWS ayudará a lograr altas velocidades de transferencia?",
        type: "single",
        options: [
          "Amazon CloudFront",
          "AWS CloudFormation",
          "Amazon Kinesis Video Streams",
          "Amazon SNS",
        ],
      },
      {
        question:
          "Un desarrollador está planeando construir una aplicación web de dos niveles que tenga una capa de base de datos MySQL. ¿Cuál de los siguientes servicios de base de datos de AWS proporcionaría copias de seguridad automáticas para la aplicación?",
        type: "single",
        options: [
          "Amazon Aurora",
          "Amazon DynamoDB",
          "Amazon Neptune",
          "Una base de datos MySQL instalada en una instancia EC2",
        ],
      },
      {
        question:
          "¿Cuál es el servicio de AWS que permite a los arquitectos de AWS gestionar la infraestructura como código?",
        type: "single",
        options: [
          "AWS CloudFormation",
          "AWS Config",
          "Amazon SES",
          "Amazon EMR",
        ],
      },
      {
        question:
          "Bajo el modelo de responsabilidad compartida, ¿cuál de los siguientes es responsabilidad de AWS?",
        type: "single",
        options: [
          "Configurar los dispositivos de infraestructura",
          "Cifrado del lado del cliente",
          "Cifrado del lado del servidor",
          "Filtrado de tráfico con Grupos de Seguridad",
        ],
      },
      {
        question: "¿Qué proporciona el Panel de Salud de AWS? (Elige DOS)",
        type: "multiple",
        options: [
          "Guía detallada de solución de problemas para abordar eventos de AWS que afectan a tus recursos",
          "Vista personalizada del estado de los servicios de AWS",
          "Verificaciones de salud para instancias de Auto Scaling",
          "Recomendaciones para la optimización de costos",
          "Un panel que detalla vulnerabilidades en tus aplicaciones",
        ],
      },
      {
        question:
          "Has implementado tu aplicación en varias instancias de Amazon EC2. Tus clientes se quejan de que a veces no pueden acceder a tu aplicación. ¿Qué servicio de AWS te permite monitorear el rendimiento de tus instancias EC2 para ayudar a resolver estos problemas?",
        type: "single",
        options: [
          "Amazon CloudWatch",
          "AWS CloudTrail",
          "AWS Config",
          "AWS Lambda",
        ],
      },
      {
        question:
          "Tu empresa está desarrollando una aplicación web crítica en AWS, y la seguridad de la aplicación es una de las principales prioridades. ¿Cuál de los siguientes servicios de AWS proporcionará recomendaciones de optimización de seguridad de la infraestructura?",
        type: "single",
        options: [
          "AWS Trusted Advisor",
          "AWS Secrets Manager",
          "Consola de gestión de AWS",
          "AWS Shield",
        ],
      },
      {
        question:
          "¿Cuál de los siguientes NO es un beneficio de Amazon S3? (Elige DOS)",
        type: "multiple",
        options: [
          "Amazon S3 puede ejecutar cualquier tipo de aplicación o sistema backend",
          "Amazon S3 se puede escalar manualmente para almacenar y recuperar cualquier cantidad de datos desde cualquier lugar",
          "Amazon S3 proporciona 99.999999999% (11 nueves) de durabilidad de los datos",
          "Amazon S3 almacena cualquier número de objetos, pero con límites de tamaño de objeto",
          "Amazon S3 proporciona almacenamiento ilimitado para cualquier tipo de datos",
        ],
      },
      {
        question:
          "En el Modelo de Responsabilidad Compartida de AWS, ¿cuál de las siguientes es responsabilidad del cliente? (Elige DOS)",
        type: "multiple",
        options: [
          "Establecer reglas de complejidad de contraseñas",
          "Configurar reglas de acceso a la red",
          "Aplicar parches a la infraestructura de red",
          "Controlar el acceso físico a los recursos de cómputo",
          "Eliminación de discos",
        ],
      },
      {
        question:
          "¿Qué proporciona AWS para implementar tecnologías populares como IBM MQ en AWS con el menor esfuerzo y tiempo posible?",
        type: "single",
        options: [
          "Implementaciones de referencia de AWS Quick Start",
          "AWS OpsWorks",
          "Amazon CloudWatch",
          "Amazon Aurora",
        ],
      },
      {
        question:
          "Una organización ha decidido comprar una instancia reservada de Amazon EC2 (RI) por tres años para reducir costos. Es posible que las cargas de trabajo de la aplicación cambien durante el período de reserva. ¿Cuál es el tipo de instancia reservada (RI) de EC2 que permitirá a la empresa intercambiar la instancia reservada comprada por otra instancia reservada con mayor potencia de cómputo si es necesario?",
        type: "single",
        options: ["RI Convertible", "RI Estándar", "RI Premium", "RI Elástica"],
      },
    ],
  },
  // Add more questionnaires as needed
  {
    id: "quiz3",
    title: "Practicante de la nube AWS #2 🥇",
    questions: [
      {
        question:
          "¿Cuál de las siguientes opciones es la MÁS rentable para adquirir una instancia reservada (RI) de EC2?",
        type: "single",
        options: [
          "Opción de pago inicial parcial con un plazo estándar de 3 años",
          "Opción sin pago inicial con un plazo estándar de 1 año",
          "Opción sin pago inicial con un plazo estándar de 3 años",
          "Opción de pago inicial total con un plazo estándar de 1 año",
        ],
        feedback: [
          "https://d0.awsstatic.com/whitepapers/aws_pricing_overview.pdf",
        ],
      },
      {
        question:
          "Una empresa utiliza instancias reservadas de EC2 en varias unidades, donde cada unidad tiene su propia cuenta de AWS. Sin embargo, algunas unidades infrautilizan sus instancias reservadas mientras que otras unidades necesitan más instancias reservadas. Como Cloud Practitioner, ¿cuál de las siguientes opciones recomendarías como la solución más rentable?",
        type: "single",
        options: [
          "Usar AWS Organizations para gestionar las cuentas de AWS de todas las unidades y luego compartir las instancias reservadas de EC2 entre todas las unidades",
          "Usar AWS Cost Explorer para gestionar las cuentas de AWS de todas las unidades y luego compartir las instancias reservadas de EC2 entre todas las unidades.",
          "Usar AWS Systems Manager para gestionar las cuentas de AWS de todas las unidades y luego compartir las instancias reservadas de EC2 entre todas las unidades.",
          "Usar AWS Trusted Advisor para gestionar las cuentas de AWS de todas las unidades y luego compartir las instancias reservadas de EC2 entre todas las unidades.",
        ],
        feedback: [
          "https://aws.amazon.com/organizations/",
          "https://aws.amazon.com/premiumsupport/technology/trusted-advisor/",
          "https://aws.amazon.com/systems-manager/",
        ],
      },
      {
        question:
          "¿Qué política de enrutamiento de AWS Route 53 usarías para enrutar tráfico a múltiples recursos y también elegir cuánto tráfico se enruta a cada recurso?",
        type: "single",
        options: [
          "Enrutamiento ponderado",
          "Enrutamiento simple",
          "Enrutamiento basado en latencia",
          "Enrutamiento de conmutación por error",
        ],
        feedback: [
          "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html",
        ],
      },
      {
        question:
          "Un gerente de proyecto, que trabaja con AWS por primera vez, está confundido acerca de cómo se usan los créditos en AWS. Hay dos créditos disponibles en la cuenta del gerente. El crédito uno es de $100, vence en julio de 2022, y se puede usar tanto para Amazon S3 como para Amazon EC2. El crédito dos es de $50, vence en diciembre de 2022, y solo se puede usar para Amazon EC2. La cuenta de AWS del gerente tiene dos cargos: $1000 por Amazon EC2 y $500 por Amazon S3. ¿Cuál será el resultado en la factura total una vez que se usen los créditos? (ELIGE DOS)",
        type: "multiple",
        options: [
          "El crédito uno se aplica, que vence en julio, al cargo de Amazon EC2, lo que deja un cargo de $900 para Amazon EC2 y $500 para Amazon S3.",
          "Luego, el crédito dos se aplica a los $900 restantes de uso de Amazon EC2.",
          "Entonces, el crédito dos se aplica a los $500 de uso de Amazon S3.",
          "El crédito uno se aplica, que vence en julio, al uso de Amazon S3, lo que deja un cargo de $1000 para Amazon EC2 y $400 para Amazon S3.",
          "Solo se puede usar un crédito en un ciclo de facturación, y el cliente puede elegir entre los disponibles.",
        ],
        feedback: ["https://www.amazonaws.cn/en/support/faqs/"],
      },
      {
        question:
          "¿Qué servicios de AWS se pueden usar para facilitar la gestión de cambios organizacionales, parte del pilar de Confiabilidad del Marco Well-Architected de AWS? (Elige tres)",
        type: "multiple3",
        options: [
          "AWS CloudTrail",
          "Amazon CloudWatch",
          "AWS Config",
          "AWS Trusted Advisor",
          "Amazon Inspector",
          "Amazon GuardDuty",
        ],
        feedback: [
          "https://aws.amazon.com/config/",
          "https://aws.amazon.com/cloudtrail/",
          "https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf",
        ],
      },
      {
        question:
          "Una empresa quiere migrar a la nube de AWS y lanzar nuevas características con iteraciones rápidas utilizando los servicios relevantes de AWS siempre que sea necesario. ¿Cuál de las siguientes características de AWS Cloud quiere aprovechar?",
        type: "single",
        options: [
          "Agilidad.",
          "Confiabilidad.",
          "Escalabilidad.",
          "Elasticidad.",
        ],
        feedback: [
          "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html",
          "https://wa.aws.amazon.com/wat.concepts.wa-concepts.en.html",
        ],
      },
      {
        question:
          "¿Cuál de los siguientes es un servicio de AWS sin servidor (serverless)?",
        type: "single",
        options: [
          "AWS Lambda.",
          "Amazon EMR.",
          "Amazon Elastic Compute Cloud (Amazon EC2).",
          "AWS Elastic Beanstalk.",
        ],
        feedback: ["https://aws.amazon.com/lambda/"],
      },
      {
        question:
          "Una startup unicornio está desarrollando una aplicación de análisis con soporte para una interfaz basada en voz. La aplicación aceptará entradas de voz de los usuarios y luego transmitirá los resultados mediante voz. Como Cloud Practitioner, ¿qué solución recomendarías para este caso de uso?",
        type: "single",
        options: [
          "Usar Amazon Transcribe para convertir voz a texto para análisis posterior. Luego usar Amazon Polly para transmitir los resultados del texto mediante voz.",
          "Usar Amazon Polly para convertir voz a texto para análisis posterior. Luego usar Amazon Translate para transmitir los resultados del texto mediante voz.",
          "Usar Amazon Translate para convertir voz a texto para análisis posterior. Luego usar Amazon Polly para transmitir los resultados del texto mediante voz.",
          "Usar Amazon Polly para convertir voz a texto para análisis posterior. Luego usar Amazon Transcribe para transmitir los resultados del texto mediante voz.",
        ],
        feedback: [
          "https://aws.amazon.com/transcribe/",
          "https://aws.amazon.com/polly/",
        ],
      },
      {
        question:
          "Una startup quiere configurar su infraestructura de TI en la nube de AWS. El CTO desea obtener una estimación de la factura mensual de AWS basada en los servicios que la startup quiere usar. Como Cloud Practitioner, ¿qué servicio de AWS recomendarías para este caso de uso?",
        type: "single",
        options: [
          "AWS Pricing Calculator.",
          "AWS Cost Explorer.",
          "AWS Cost & Usage Report (AWS CUR)",
          "AWS Budgets",
        ],
        feedback: [
          "https://calculator.aws/#/",
          "https://calculator.s3.amazonaws.com/index.html",
        ],
      },
      {
        question:
          "De acuerdo con el Marco de Adopción de la Nube de AWS (AWS CAF), ¿cuáles son dos tareas que una empresa debe realizar al planificar migrar a la nube de AWS y al mismo tiempo buscar responder de manera más efectiva a las consultas y comentarios de los clientes como parte de su transformación organizacional? (Elige dos)",
        type: "multiple",
        options: [
          "Utilizar métodos ágiles para iterar y evolucionar rápidamente.",
          "Organizar a tus equipos en torno a productos y flujos de valor.",
          "Crear nuevos conocimientos analíticos con productos y servicios existentes.",
          "Organizar a tus equipos en torno a principios de diseño burocráticos.",
          "Aprovechar la infraestructura heredada para eficiencias de costos.",
        ],
        feedback: ["https://aws.amazon.com/cloud-adoption-framework/"],
      },
      {
        question:
          "El AWS Web Application Firewall (WAF) ofrece protección contra los ataques web comunes en ¿qué capa?",
        type: "single",
        options: ["Capa 7", "Capa 3", "Capa 4 y 7", "Capa 4"],
        feedback: [
          "https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html",
        ],
      },
      {
        question:
          "Una empresa necesita una solución de almacenamiento para un proyecto donde los datos se acceden con menos frecuencia pero requieren acceso rápido cuando sea necesario. ¿Qué clase de almacenamiento de S3 es la MÁS rentable para este caso de uso?",
        type: "single",
        options: [
          "Amazon S3 Standard-Accesso Poco Frecuente (S3 Standard-IA)",
          "Amazon S3 Standard",
          "Amazon S3 Intelligent-Tiering (S3 Intelligent-Tiering)",
          "Amazon S3 Glacier (S3 Glacier)",
        ],
        feedback: ["https://aws.amazon.com/s3/storage-classes/"],
      },
      {
        question:
          "Un equipo de análisis forense cibernético ha detectado que direcciones IP propiedad de AWS están siendo utilizadas para llevar a cabo ataques maliciosos. Dado que esto constituye un uso prohibido de los servicios de AWS, ¿cuál de las siguientes opciones es la solución correcta para abordar este problema?",
        type: "single",
        options: [
          "Contactar al equipo de abuso de AWS (AWS Abuse Team).",
          "Escribir un correo electrónico a Jeff Bezos, el fundador de Amazon, con los detalles del incidente.",
          "Contactar con el soporte de AWS.",
          "Obtener control total sobre la infraestructura física",
          "Contactar con los moderadores del foro de desarrolladores de AWS.",
        ],
        feedback: [
          "https://aws.amazon.com/premiumsupport/knowledge-center/report-aws-abuse/",
        ],
      },
      {
        question:
          "El equipo de DevOps en una empresa de TI está moviendo 500 GB de datos desde una instancia de EC2 a un bucket de S3 en la misma región. ¿Cuál de los siguientes escenarios refleja correctamente los cargos por esta transferencia de datos?",
        type: "single",
        options: [
          "La empresa no sería cobrada por esta transferencia de datos.",
          "La empresa solo sería cobrada por la transferencia de datos de entrada al bucket de S3.",
          "La empresa sería cobrada tanto por la transferencia de datos de salida desde EC2 como por la transferencia de datos de entrada al bucket de S3.",
          "La empresa solo sería cobrada por la transferencia de datos de salida desde EC2.",
        ],
        feedback: [
          "https://aws.amazon.com/s3/pricing/",
          "https://d0.awsstatic.com/whitepapers/aws_pricing_overview.pdf",
        ],
      },
      {
        question:
          "¿Cuáles de los siguientes planes de soporte de AWS proporcionan acceso solo a las verificaciones principales de las Prácticas Recomendadas de AWS Trusted Advisor? (Elige dos)",
        type: "multiple",
        options: [
          "AWS Basic Support",
          "AWS Developer Support",
          "AWS Business Support",
          "AWS Enterprise Support",
          "AWS Enterprise On-Ramp Support",
        ],
        feedback: ["https://aws.amazon.com/premiumsupport/plans/"],
      },
      {
        question:
          "¿Cuál de las siguientes entidades aplica parches al sistema operativo subyacente para Amazon Aurora?",
        type: "single",
        options: [
          "El equipo de producto de AWS automáticamente.",
          "El equipo de soporte de AWS después de recibir una solicitud del cliente.",
          "El cliente de AWS usando AWS Systems Manager.",
          "El cliente de AWS mediante SSH en las instancias.",
        ],
        feedback: ["https://aws.amazon.com/rds/aurora/"],
      },
      {
        question:
          "Una empresa quiere mejorar la resiliencia de su aplicación principal, por lo que desea pasar de su sistema de base de datos tradicional a un servicio de base de datos NoSQL administrado por AWS que soporte una configuración activa-activa en las regiones Este y Oeste de EE. UU. La configuración activa-activa con soporte entre regiones es el criterio principal para cualquier solución de base de datos que considere la empresa. ¿Qué servicio de base de datos de AWS es el más adecuado para este requisito?",
        type: "single",
        options: [
          "Amazon DynamoDB con tablas globales",
          "Amazon Relational Database Service (Amazon RDS) para MySQL",
          "Amazon Aurora con clústeres multi-master",
          "Amazon DynamoDB con DynamoDB Accelerator",
        ],
        feedback: [
          "https://aws.amazon.com/dynamodb/features/",
          "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-multi-master.html",
        ],
      },
      {
        question:
          "Una startup quiere migrar sus datos y aplicaciones desde un centro de datos local a la nube de AWS. ¿Cuáles de las siguientes opciones pueden ser utilizadas por la startup para ayudar con esta migración? (Elige dos)",
        type: "multiple",
        options: [
          "Aprovechar los Servicios Profesionales de AWS (AWS Professional Services) para acelerar la migración de infraestructura.",
          "Utilizar la Red de Socios de AWS (AWS Partner Network - APN) para crear una solución personalizada para esta migración de infraestructura.",
          "Consultar con moderadores en los foros de desarrolladores de AWS.",
          "Usar AWS Trusted Advisor para automatizar la migración de la infraestructura.",
          "Crear un ticket de soporte con AWS Support para obtener más ayuda.",
        ],
        feedback: [
          "https://aws.amazon.com/partners/",
          "https://aws.amazon.com/professional-services/",
          "https://aws.amazon.com/solutions/implementations/aws-landing-zone/",
        ],
      },
      {
        question:
          "¿Cuáles de las siguientes son las ventajas de la computación en la nube? (Elige tres)",
        type: "multiple3",
        options: [
          "Expandirse globalmente en minutos y desplegar aplicaciones en múltiples regiones alrededor del mundo con solo unos pocos clics.",
          "Cambiar gastos de capital por gastos variables.",
          "Beneficiarse de las economías de escala masivas.",
          "Asignar algunos meses de planificación para las necesidades de capacidad de tu infraestructura.",
          "Gastar dinero en construir y mantener centros de datos.",
          "Cambiar gastos variables por gastos de capital",
        ],
        feedback: [
          "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html",
        ],
      },
      {
        question:
          "¿Qué servicios de AWS se pueden usar para desacoplar componentes de una aplicación basada en microservicios en la nube de AWS? (Elige dos)",
        type: "multiple",
        options: [
          "Amazon Simple Queue Service (SQS)",
          "Amazon Simple Notification Service (SNS)",
          "AWS Step Functions",
          "AWS Lambda",
          "Amazon Elastic Compute Cloud (Amazon EC2)",
        ],
        feedback: [
          "https://aws.amazon.com/blogs/compute/building-loosely-coupled-scalable-c-applications-with-amazon-sqs-and-amazon-sns/",
          "https://aws.amazon.com/microservices/",
        ],
      },
      {
        question:
          "¿Cuáles de los siguientes servicios de AWS admiten VPC Endpoint Gateway para una conexión privada desde una VPC? (Elige dos)",
        type: "multiple",
        options: [
          "Amazon DynamoDB",
          "Amazon Simple Storage Service (Amazon S3)",
          "Amazon Simple Queue Service (SQS)",
          "Amazon Elastic Compute Cloud (Amazon EC2)",
          "Amazon Simple Notification Service (SNS)",
        ],
        feedback: [
          "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html",
        ],
      },
      {
        question:
          "¿Cuál de las siguientes es una afirmación INCORRECTA sobre el escalado, un principio de diseño del pilar de Confiabilidad del Marco Well-Architected de AWS?",
        type: "single",
        options: [
          "La tolerancia a fallos se logra mediante una operación de escalado vertical.",
          "Una operación de escalado vertical implica escalar agregando más potencia (CPU, RAM) a tu máquina/nodo existente.",
          "La tolerancia a fallos se logra mediante una operación de escalado horizontal.",
          "Una operación de escalado horizontal implica escalar agregando más instancias a tu grupo existente de recursos.",
        ],
        feedback: [
          "https://wa.aws.amazon.com/wat.concept.horizontal-scaling.en.html",
        ],
      },
      {
        question:
          "¿Qué servicio de AWS te ayudará a recibir alertas cuando la utilización de la reserva caiga por debajo del umbral definido?",
        type: "single",
        options: [
          "AWS Budgets",
          "AWS CloudTrail",
          "AWS Pricing Calculator",
          "AWS Trusted Advisor",
        ],
        feedback: [
          "https://aws.amazon.com/aws-cost-management/aws-budgets/",
          "https://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/",
        ],
      },
      {
        question:
          "¿Cuáles de las siguientes afirmaciones son CORRECTAS con respecto al servicio AWS VPC? (Elige dos)",
        type: "multiple",
        options: [
          "Un Security Group solo puede tener reglas de permiso.",
          "Un gateway de traducción de direcciones de red (NAT gateway) es administrado por AWS.",
          "Una instancia de traducción de direcciones de red (NAT instance) es administrada por AWS.",
          "Un Security Group puede tener tanto reglas de permiso como de denegación.",
          "Una lista de control de acceso a la red (network ACL) solo puede tener reglas de permiso.",
        ],
        feedback: [
          "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html",
          "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html",
          "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-comparison.html",
        ],
      },
      {
        question:
          "Una startup de investigación médica quiere entender la conformidad de los servicios de AWS con respecto a las directrices de HIPAA. ¿Qué servicio de AWS se puede usar para revisar los documentos relacionados con la conformidad y gobernanza de HIPAA en AWS?",
        type: "single",
        options: [
          "AWS Artifact",
          "AWS Trusted Advisor",
          "AWS Systems Manager",
          "AWS Secrets Manager",
        ],
        feedback: ["https://aws.amazon.com/artifact/"],
      },
      {
        question:
          "Una empresa quiere tener control sobre la creación y uso de sus propias claves para encriptación en los servicios de AWS. ¿Cuál de las siguientes opciones se puede utilizar para este caso de uso?",
        type: "single",
        options: [
          "Clave administrada por el cliente (CMK - customer managed key)",
          "Clave propiedad de AWS (AWS owned key)",
          "AWS Secrets Manager",
          "Clave administrada por AWS (AWS managed key)",
        ],
        feedback: [
          "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys",
        ],
      },
      {
        question:
          "¿Cuál de los siguientes es un servicio de base de datos de AWS?",
        type: "single",
        options: [
          "Amazon Redshift",
          "AWS Storage Gateway",
          "AWS Glue",
          "AWS Database Migration Service (AWS DMS)",
        ],
        feedback: [
          "https://aws.amazon.com/redshift/",
          "https://aws.amazon.com/dms/",
        ],
      },
      {
        question:
          "Una startup de Silicon Valley del sector salud almacena datos de pacientes anonimizados en Amazon S3. El CTO además quiere garantizar que cualquier dato sensible en S3 sea identificado y detectado para prevenir fugas de datos confidenciales. Como Cloud Practitioner, ¿qué servicio de AWS recomendarías para abordar este caso de uso?",
        type: "single",
        options: [
          "Amazon Macie",
          "Amazon Polly",
          "AWS Secrets Manager",
          "AWS Glue",
        ],
        feedback: ["https://aws.amazon.com/macie/"],
      },
      {
        question:
          "¿Cuál de las siguientes es una forma recomendada de proporcionar acceso programático a los recursos de AWS?",
        type: "single",
        options: [
          "Usar Access Key ID y Secret Access Key para acceder a los recursos de AWS programáticamente",
          "Usar un grupo de usuarios IAM para acceder a los recursos de AWS programáticamente",
          "Usar Autenticación Multi-Factor de AWS (AWS MFA) para acceder a los recursos de AWS programáticamente",
          "Crear un nuevo usuario IAM y compartir el nombre de usuario y la contraseña",
        ],
        feedback: [
          "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html",
        ],
      },
      {
        question:
          "Una aplicación web almacena todos sus datos en buckets de Amazon S3. Un cliente ha solicitado que los datos sean cifrados antes de enviarlos a Amazon S3. ¿Cuál de las siguientes es la técnica correcta para cifrar los datos según lo solicitado por el cliente?",
        type: "single",
        options: [
          "Habilitar cifrado del lado del cliente usando el AWS Encryption SDK",
          "Habilitar cifrado del lado del servidor con claves administradas por Amazon S3 (SSE-S3)",
          "Habilitar cifrado del lado del servidor con claves del servicio de administración de claves de AWS (AWS KMS) (SSE-KMS)",
          "El cifrado está habilitado por defecto para todos los objetos escritos en Amazon S3. No se requiere configuración adicional",
        ],
        feedback: [
          "https://docs.aws.amazon.com/en_us/AmazonS3/latest/userguide/UsingClientSideEncryption.html",
          "https://docs.aws.amazon.com/en_us/AmazonS3/latest/userguide/serv-side-encryption.html",
        ],
      },
      {
        question:
          "¿Cuáles de las siguientes son afirmaciones correctas con respecto a la infraestructura global de AWS? (Selecciona dos)",
        type: "multiple",
        options: [
          "Cada Zona de Disponibilidad (AZ) consta de uno o más centros de datos discretos.",
          "Cada Región de AWS consta de un mínimo de tres Zonas de Disponibilidad (AZ).",
          "Cada Zona de Disponibilidad (AZ) consta de dos o más centros de datos discretos",
          "Cada Región de AWS consta de un mínimo de dos Zonas de Disponibilidad (AZ)",
          "Cada Región de AWS consta de dos o más Edge Locations (locaciones de borde).",
        ],
        feedback: [
          "https://aws.amazon.com/about-aws/global-infrastructure/regions_az/",
        ],
      },
      {
        question:
          "¿Cuáles son las ventajas que AWS Cloud ofrece sobre una infraestructura de TI tradicional en las instalaciones? (Elige dos)",
        type: "multiple",
        options: [
          "Cambiar el gasto de capital por gasto variable.",
          "Eliminar la incertidumbre sobre las necesidades de capacidad de tu infraestructura.",
          "Aumentar la velocidad y agilidad manteniendo servidores y otros recursos necesarios listos con anticipación en tus centros de datos.",
          "Proporcionar menor latencia a las aplicaciones manteniendo servidores en las instalaciones.",
          "Tomar decisiones de capacidad antes de implementar una aplicación para reducir costos.",
        ],
        feedback: [
          "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html",
        ],
      },
      {
        question:
          "El equipo de DevOps de una empresa de comercio electrónico está intentando depurar problemas de rendimiento en su aplicación serverless construida usando una arquitectura de microservicios. Como Cloud Practitioner, ¿qué servicio de AWS recomendarías para abordar este caso de uso?",
        type: "single",
        options: [
          "AWS X-Ray",
          "Amazon Pinpoint",
          "AWS CloudFormation",
          "AWS Trusted Advisor",
        ],
        feedback: [
          "https://aws.amazon.com/xray/",
          "https://aws.amazon.com/pinpoint/",
        ],
      },
      {
        question:
          "Una corporación multinacional quiere obtener asesoramiento profesional experto sobre la migración a AWS y la gestión de sus aplicaciones en la nube de AWS. ¿Cuál de las siguientes entidades recomendarías para este compromiso?",
        type: "single",
        options: [
          "APN Consulting Partner",
          "Concierge Support Team",
          "AWS Trusted Advisor",
          "APN Technology Partner",
        ],
        feedback: ["https://aws.amazon.com/partners/"],
      },
      {
        question:
          "Una empresa multinacional acaba de trasladar su infraestructura desde su centro de datos local a la nube de AWS. Como parte del modelo de responsabilidad compartida, ¿de qué es responsable AWS?",
        type: "single",
        options: [
          "Controles físicos y ambientales",
          "Protección de servicios y comunicaciones o seguridad de la zona",
          "Aplicar parches al sistema operativo invitado",
          "Configurar aplicaciones del cliente",
        ],
        feedback: [
          " https://aws.amazon.com/compliance/shared-responsibility-model/",
        ],
      },
      {
        question:
          "¿Cuáles de los siguientes son servicios de almacenamiento ofrecidos por la nube de AWS? (Selecciona dos)",
        type: "multiple",
        options: [
          "Amazon Simple Storage Service (Amazon S3)",
          "Amazon Elastic File System (Amazon EFS)",
          "Amazon Simple Notification Service (SNS)",
          "Amazon Simple Queue Service (SQS)",
          "Amazon Elastic Compute Cloud (Amazon EC2)",
        ],
        feedback: ["https://aws.amazon.com/s3/", "https://aws.amazon.com/efs/"],
      },
      {
        question:
          "Según el Modelo de Responsabilidad Compartida de AWS, ¿cuáles de las siguientes son responsabilidades de AWS? (Selecciona dos)",
        type: "multiple",
        options: [
          "Operar la capa de infraestructura, el sistema operativo y la plataforma para el servicio Amazon S3.",
          "Reemplazar hardware defectuoso de instancias Amazon EC2.",
          "Habilitar la autenticación multifactor (MFA) en las cuentas de AWS de tu organización.",
          "Crear roles IAM para acceder a las instancias Amazon EC2.",
          "Crear políticas de buckets S3 para el acceso apropiado de los usuarios.",
        ],
        feedback: [
          "https://aws.amazon.com/compliance/shared-responsibility-model/",
        ],
      },
      {
        question:
          "¿Cuál de las siguientes clases de almacenamiento de Amazon S3 toma más tiempo para recuperar datos (también conocido como latencia del primer byte)?",
        type: "single",
        options: [
          "Amazon S3 Glacier Deep Archive.",
          "Amazon S3 Glacier Flexible Retrieval.",
          "Amazon S3 Standard.",
          "Amazon S3 Intelligent-Tiering",
        ],
        feedback: ["https://aws.amazon.com/s3/storage-classes/"],
      },
      {
        question:
          "AWS Shield Advanced proporciona protección ampliada contra ataques DDoS para aplicaciones web que se ejecutan en cuáles de los siguientes recursos? (Elige dos)",
        type: "multiple",
        options: [
          "Amazon Route 53",
          "AWS Global Accelerator",
          "Amazon API Gateway",
          "AWS Elastic Beanstalk",
          "AWS CloudFormation",
        ],
        feedback: [
          "https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html",
        ],
      },
      {
        question:
          "Una empresa de análisis de datos está ejecutando una aplicación de análisis por lotes propietaria en AWS y desea usar un servicio de almacenamiento al que accederían simultáneamente cientos de instancias EC2 para añadir datos a archivos existentes. Como Cloud Practitioner, ¿qué servicio de AWS sugerirías para este caso de uso?",
        type: "single",
        options: [
          "Amazon Elastic File System (Amazon EFS)",
          "Amazon Simple Storage Service (Amazon S3)",
          "Instance Store",
          "Amazon Elastic Block Store (Amazon EBS)",
        ],
        feedback: ["https://aws.amazon.com/efs/"],
      },
      {
        question:
          "¿Cuál de los siguientes servicios de AWS tiene habilitado el cifrado por defecto?",
        type: "single",
        options: [
          "AWS CloudTrail Logs",
          "Amazon Elastic File System (Amazon EFS)",
          "Amazon Elastic Block Store (Amazon EBS)",
          "Amazon Relational Database Service (Amazon RDS)",
        ],
        feedback: [
          "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/encrypting-cloudtrail-log-files-with-aws-kms.html",
        ],
      },
      {
        question:
          "¿Qué servicio de seguridad de AWS está habilitado para todos los clientes de AWS, por defecto, sin costo adicional?",
        type: "single",
        options: [
          "AWS Shield Standard",
          "AWS Secrets Manager",
          "AWS Web Application Firewall (AWS WAF)",
          "AWS Shield Advanced",
        ],
        feedback: [
          "https://docs.aws.amazon.com/waf/latest/developerguide/shield-chapter.html",
        ],
      },
      {
        question:
          "Una empresa de comercio electrónico ha implementado una base de datos RDS en una única Zona de Disponibilidad (AZ). El equipo de ingeniería quiere asegurarse de que, en caso de una interrupción en la AZ, la base de datos continúe funcionando en el mismo endpoint sin necesidad de intervención administrativa manual. ¿Cuál de las siguientes soluciones puede abordar este caso de uso?",
        type: "single",
        options: [
          "Configurar la base de datos en una implementación Multi-AZ de RDS con cambio automático al respaldo",
          "Configurar la base de datos en modo de réplica de lectura RDS con cambio automático al respaldo",
          "Aprovisionar la base de datos mediante AWS CloudFormation",
          "Implementar la base de datos mediante AWS Elastic Beanstalk",
        ],
        feedback: ["https://aws.amazon.com/rds/features/multi-az/"],
      },
      {
        question:
          "¿Cuáles de los siguientes servicios de AWS admiten reservas para optimizar costos? (Elige tres)",
        type: "multiple3",
        options: [
          "Amazon Relational Database Service (Amazon RDS)",
          "Amazon DynamoDB",
          "Amazon Elastic Compute Cloud (Amazon EC2)",
          "Amazon DocumentDB",
          "AWS Lambda",
          "Amazon Simple Storage Service (Amazon S3)",
        ],
        feedback: [
          "https://d0.awsstatic.com/whitepapers/aws_pricing_overview.pdf",
        ],
      },
      {
        question:
          "¿Cuál de los siguientes es un beneficio de utilizar servicios administrados por AWS como Amazon Relational Database Service (Amazon RDS)?",
        type: "single",
        options: [
          "El rendimiento de las instancias administradas de Amazon Relational Database Service (Amazon RDS) por AWS es mejor que el de una instancia de base de datos gestionada por el cliente",
          "El cliente necesita gestionar los respaldos de la base de datos",
          "No es necesario optimizar el tipo y tamaño de la instancia de base de datos",
          "El cliente necesita parchear el sistema operativo subyacente",
        ],
        feedback: ["https://aws.amazon.com/rds/instance-types/"],
      },
      {
        question:
          "¿Qué tipo de computación en la nube representa Amazon Elastic Compute Cloud (EC2)?",
        type: "single",
        options: [
          "Infrastructure as a Service (IaaS)",
          "Network as a Service (NaaS)",
          "Software as a Service (SaaS)",
          "Platform as a Service (PaaS)",
        ],
        feedback: ["https://aws.amazon.com/types-of-cloud-computing/"],
      },
      {
        question:
          "¿Cuál de las siguientes afirmaciones son CORRECTAS con respecto a las características específicas de las Zonas de Disponibilidad (AZ) de Amazon Elastic Block Store (EBS) y Amazon Elastic File System (EFS)?",
        type: "single",
        options: [
          "El volumen de EBS puede ser adjuntado a una sola instancia en la misma Zona de Disponibilidad (AZ), mientras que el sistema de archivos EFS puede ser montado en instancias a través de múltiples Zonas de Disponibilidad (AZ)",
          "El volumen de EBS puede ser adjuntado a una o más instancias en múltiples Zonas de Disponibilidad (AZ), y el sistema de archivos EFS puede ser montado en instancias en la misma Zona de Disponibilidad (AZ)",
          "El volumen de EBS puede ser adjuntado a una sola instancia en la misma Zona de Disponibilidad (AZ), y el sistema de archivos EFS solo puede ser montado en instancias en la misma Zona de Disponibilidad (AZ)",
          "El volumen de EBS puede ser adjuntado a una o más instancias en múltiples Zonas de Disponibilidad (AZ), y el sistema de archivos EFS puede ser montado en instancias a través de múltiples Zonas de Disponibilidad (AZ).",
        ],
        feedback: [
          "https://aws.amazon.com/efs/faq/",
          "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-attaching-volume.html",
          "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html",
        ],
      },
      {
        question:
          "¿Cuál de las siguientes afirmaciones es CORRECTA con respecto a eliminar una cuenta de AWS de AWS Organizations?",
        type: "single",
        options: [
          "La cuenta de AWS debe poder operar como una cuenta independiente. Solo entonces puede ser eliminada de AWS Organizations.",
          "Crear un ticket de soporte con AWS Support para eliminar la cuenta.",
          "La cuenta de AWS puede ser eliminada desde AWS Systems Manager.",
          "Controlar el acceso físico a los recursos de cómputo",
          "La cuenta de AWS no debe tener ninguna Política de Control de Servicios (SCP) asociada. Solo entonces puede ser eliminada de AWS Organizations.",
        ],
        feedback: [
          "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html",
        ],
      },
      {
        question:
          "¿Cuál de los siguientes servicios de AWS debería usarse para distribuir automáticamente el tráfico entrante entre varios objetivos?",
        type: "single",
        options: [
          "AWS Elastic Load Balancing (ELB)",
          "Amazon OpenSearch Service",
          "AWS Elastic Beanstalk",
          "AWS Auto Scaling",
        ],
        feedback: ["https://aws.amazon.com/elasticloadbalancing/"],
      },
      {
        question:
          "Una empresa de servicios financieros quiere asegurarse de que la actividad de su cuenta de AWS cumpla con las normas de gobernanza, cumplimiento y auditoría. Como Cloud Practitioner, ¿qué servicio de AWS recomendarías para este caso de uso?",
        type: "single",
        options: [
          "AWS CloudTrail",
          "Amazon CloudWatch",
          "AWS Trusted Advisor",
          "AWS Config",
        ],
        feedback: ["https://aws.amazon.com/cloudtrail/"],
      },
      {
        question:
          "Una empresa de análisis de big data está trasladando su infraestructura de TI desde un centro de datos local a AWS Cloud. La empresa tiene algunas licencias de software vinculadas al servidor que desea usar en AWS. Como Cloud Practitioner, ¿qué tipo de instancia EC2 recomendarías a la empresa?",
        type: "single",
        options: [
          "Dedicated Host",
          "Reserved Instance (RI)",
          "On-Demand Instance",
          "Dedicated Instance",
        ],
        feedback: [
          "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html",
        ],
      },
      {
        question:
          "Una empresa de TI está planeando migrar de un entorno on-premises a AWS Cloud. ¿Cuáles de las siguientes áreas de gasto generarían ahorros de costos cuando la empresa se mude a AWS Cloud? (Selecciona dos)",
        type: "multiple",
        options: [
          "Gastos en seguridad física del centro de datos",
          "Gastos en infraestructura de hardware del centro de datos",
          "Salario del desarrollador",
          "Cuota de licencia de la aplicación SaaS",
          "Salario del gerente de proyecto",
        ],
        feedback: [
          "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html",
        ],
      },
      {
        question:
          "Una empresa ejecuta una aplicación en un conjunto de instancias EC2. La empresa quiere automatizar la tarea de mantenimiento tradicional de realizar evaluaciones oportunas y verificar vulnerabilidades del sistema operativo. Como Cloud Practitioner, ¿qué servicio recomendarías para este caso de uso?",
        type: "single",
        options: [
          "Amazon Inspector",
          "AWS Shield",
          "Amazon GuardDuty",
          "Amazon Macie",
        ],
        feedback: ["https://aws.amazon.com/inspector/"],
      },
      {
        question:
          "Un grupo de investigación quiere usar instancias EC2 para ejecutar una aplicación de cálculo científico que tiene una arquitectura tolerante a fallos. La aplicación necesita discos de hardware de alto rendimiento que proporcionen un acceso rápido de entrada/salida (I/O). Como Cloud Practitioner, ¿qué opción de almacenamiento de las siguientes recomendarías como la solución más rentable?",
        type: "single",
        options: [
          "Instance Store",
          "Amazon Elastic Block Store (EBS)",
          "Amazon Elastic File System (Amazon EFS)",
          "Amazon Simple Storage Service (Amazon S3)",
        ],
        feedback: [
          "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html",
        ],
      },
      {
        question:
          "¿Qué herramienta/servicio te ayudará a acceder a los servicios de AWS utilizando APIs específicas para lenguajes de programación?",
        type: "single",
        options: [
          "AWS Software Developer Kit (SDK)",
          "Consola de Administración de AWS",
          "AWS Command Line Interface (CLI)",
          "Entornos de Desarrollo Integrados (IDE)",
        ],
        feedback: [
          "https://aws.amazon.com/tools/",
          "https://aws.amazon.com/cli/",
        ],
      },
      {
        question:
          "¿A partir de qué plan de soporte de AWS se proporciona orientación arquitectónica contextualizada a tus casos de uso específicos?",
        type: "single",
        options: [
          "AWS Business Support",
          "AWS Enterprise Support",
          "AWS Enterprise On-Ramp Support",
          "AWS Developer Support",
        ],
        feedback: ["https://aws.amazon.com/premiumsupport/plans/"],
      },
      {
        question:
          "¿Cuál de los siguientes servicios de AWS se puede usar para conectar el entorno local de una empresa a una VPC sin usar el internet público?",
        type: "single",
        options: [
          "AWS Direct Connect",
          "Internet Gateway",
          "VPC Endpoint",
          "AWS Site-to-Site VPN",
        ],
        feedback: [
          "https://aws.amazon.com/directconnect/",
          "https://aws.amazon.com/vpn/",
        ],
      },
      {
        question:
          "Una startup quiere aprovisionar una instancia EC2 al costo más bajo posible para una duración a largo plazo, pero necesita asegurarse de que la instancia nunca sea interrumpida. Como Cloud Practitioner, ¿cuál de las siguientes opciones recomendarías?",
        type: "single",
        options: [
          "Instancia Reservada de EC2 (RI)",
          "Instancia EC2 On-Demand",
          "Instancia EC2 Spot",
          "Host Dedicado EC2",
        ],
        feedback: ["https://aws.amazon.com/ec2/pricing/"],
      },
      {
        question:
          "¿Qué servicio de AWS puede ser utilizado para mitigar un ataque de Denegación de Servicio Distribuido (DDoS)?",
        type: "single",
        options: [
          "AWS Shield",
          "AWS Systems Manager",
          "Amazon CloudWatch",
          "AWS Key Management Service (AWS KMS)",
        ],
        feedback: ["https://aws.amazon.com/shield/"],
      },
      {
        question:
          "Un interno en una empresa de TI aprovisionó una instancia EC2 bajo demanda basada en Linux con facturación por segundo, pero la terminó dentro de 30 segundos porque quería aprovisionar otro tipo de instancia. ¿Cuál es la duración por la cual se cobraría la instancia?",
        type: "single",
        options: ["60 segundos", "300 segundos", "600 segundos", "30 segundos"],
        feedback: [
          "https://aws.amazon.com/blogs/aws/new-per-second-billing-for-ec2-instances-and-ebs-volumes/",
        ],
      },
      {
        question:
          "Una empresa quiere identificar la configuración óptima de recursos de AWS para sus cargas de trabajo, de modo que pueda reducir costos y aumentar el rendimiento de las cargas de trabajo. ¿Cuál de los siguientes servicios se puede utilizar para cumplir con este requisito?",
        type: "single",
        options: [
          "AWS Compute Optimizer",
          "AWS Systems Manager",
          "AWS Cost Explorer",
          "AWS Budgets",
        ],
        feedback: ["https://aws.amazon.com/compute-optimizer/"],
      },
      {
        question:
          "¿Qué opción es un rol común de las partes interesadas desde la perspectiva de la plataforma en el AWS Cloud Adoption Framework (AWS CAF)? (Seleccione dos)",
        type: "multiple",
        options: [
          "Director de Tecnología (CTO)",
          "Ingeniero",
          "Director de Datos (CDO)",
          "Director de Producto (CPO)",
          "Director de Información (CIO)",
        ],
        feedback: [
          "https://docs.aws.amazon.com/whitepapers/latest/overview-aws-cloud-adoption-framework/platform-perspective.html",
          "https://d1.awsstatic.com/whitepapers/aws-caf-ebook.pdf",
        ],
      },
      {
        question:
          "Según el Modelo de Responsabilidad Compartida de AWS, ¿cuál de las siguientes es una responsabilidad compartida tanto de AWS como del cliente?",
        type: "single",
        options: [
          "Gestión de la configuración",
          "Mantenimiento de la infraestructura de las Zonas de Disponibilidad (AZ)",
          "Mantenimiento de la infraestructura de los servidores de almacenamiento de Amazon Simple Storage Service (Amazon S3)",
          "Garantizar la separación de datos entre los distintos clientes de AWS",
        ],
        feedback: [
          "https://aws.amazon.com/compliance/shared-responsibility-model/",
          "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys",
        ],
      },
      {
        question:
          "Comparado con los precios de las instancias bajo demanda, ¿cuál es el descuento máximo posible ofrecido para las instancias spot?",
        type: "single",
        options: ["90", "75", "10", "50"],
        feedback: [
          "https://aws.amazon.com/ec2/pricing/",
          "https://aws.amazon.com/ec2/spot/",
        ],
      },
      {
        question:
          "¿Cuáles de los siguientes planes de soporte de AWS proporcionan acceso a orientación, configuración y resolución de problemas relacionados con la interoperabilidad de AWS con software de terceros? (Elige dos)",
        type: "multiple",
        options: [
          "AWS Business Support",
          "AWS Enterprise Support",
          "AWS Developer Support",
          "AWS Basic Support",
          "AWS Corporate Support",
        ],
        feedback: ["https://aws.amazon.com/premiumsupport/plans/"],
      },
    ],
  },
];

export default questionnaires;
