// src/data/questionnaires.js

const questionnaires = [
    {
      id: "quiz1",
      title: "Practice exam 1 🥇",
      questions: [
        {
          question: "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
          type:"single",
          options: ["AWS Management Console", "AWS SDK", "AWS API", "AWS CLI"],
        },
        {
          question: "Which of the following is an example of horizontal scaling in the AWS Cloud?",
          type:"single",
          options: ["Adding more EC2 instances of the same size to handle an increase in traffic.", "Adding more RAM capacity to an EC2 instance", "Increasing the compute capacity of a single EC2 instance to address the growing demands of an application.", "Replacing an existing EC2 instance with a larger, more powerful one"],
        },
        {
          question: "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
          type:"single",
          options: [
            "AWS CloudTrail",
            "Amazon Inspector",
            "AWS Trusted Advisor",
            "EC2 Instance Usage Report",
          ],
        },
        {
            question: "Which of the below options are related to the reliability of AWS? (Choose TWO)",
            type:"multiple",
            options: [
              "Automatically provisioning new resources to meet demand.",
              "Ability to recover quickly from failures.",
              "Applying the principle of least privilege to all AWS resources.",
              "All AWS services are considered Global Services, and this design helps customers serve their international users.",
              "Providing compensation to customers if issues occur.",
            ],
          },
          {
            question: "Which statement is true regarding the AWS Shared Responsibility Model?",
            type:"single",
            options: [
              "Responsibilities vary depending on the services used.",
              "Security of the IaaS services is the responsibility of AWS.",
              "Patching the guest OS is always the responsibility of AWS.",
              "Security of the managed services is the responsibility of the customer.",
            ],
          },
          {
            question: "You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?",
            type:"single",
            options: [
              "All accounts can receive the hourly cost benefit of the Reserved Instances.",
              "The Reserved Instance discounts can only be shared with the master account.",
              "Patching the guest OS is always the responsibility of AWS.",
              "The purchased instances will have better performance than On-demand instances",
            ],
          },
          {
            question: "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
            type:"single",
            options: [
              "Deploy the application across multiple Regions and Availability Zones.",
              "Deploy the application across multiple VPC's and subnets.",
              "Deploy the application across multiple Availability Zones and subnets.",
              "Deploy the application across multiple Availability Zones and Edge locations.",
            ],
          },
          {
            question: "What does AWS Snowball provide? (Choose TWO)",
            type:"multiple",
            options: [
              "Built-in computing capabilities that allow customers to process data locally.",
              "Secure transfer of large amounts of data into and out of the AWS.",
              "A catalog of third-party software solutions that customers need to build solutions and run their businesses",
              "A hybrid cloud storage between on-premises environments and the AWS Cloud.",
              "An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS.",
            ],
          },
          {
            question: "A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?",
            type:"single",
            options: [
              "AWS Support Concierge",
              "AWS Health Dashboard",
              "AWS Customer Service",
              "AWS Operations Support",
            ],
          },
          {
            question: "A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?",
            type:"single",
            options: [
              "Deploying new Amazon EC2 instances in a Region located in the US.",
              "Building a new data center in the US and implementing a hybrid model.",
              "Registering a new US domain name to serve the users in the US.",
              "Applying the Amazon Connect latency-based routing policy",
            ],
          },
          {
            question: "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team??",
            type:"single",
            options: [
              "opIAM user groups",
              "IAM roles",
              "IAM users",
              "AWS Organizations",
            ],
          },
          {
            question: "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
            type:"single",
            options: [
              "AWS Database Migration Service",
              "AWS OpsWorks",
              "AWS Server Migration Service",
              "AWS Application Discovery Service",
            ],
          },
          {
            question: "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
            type:"single",
            options: [
              "opImplement elasticity",
              "Build security in every layer",
              "Parallelize tasks",
              "Adopt monolithic architecture",
            ],
          },
          {
            question: "What are the benefits of having infrastructure hosted in AWS? (Choose TWO)",
            type:"multiple",
            options: [
              "Increasing speed and agility",
              "All of the physical security and most of the data/network security are taken care of for you",
              "Operating applications on behalf of customers",
              "Gaining complete control over the physical infrastructure",
              "There is no need to worry about security",
            ],
          },
          {
            question: "What is the advantage of the AWS-recommended practice of 'decoupling' applications?",
            type:"single",
            options: [
              "Reduces inter-dependencies so that failures do not impact other components of the application",
              "Allows treating an application as a single, cohesive unit",
              "Allows updates of any monolithic application quickly and easily",
              "Allows tracking of any API call made to any AWS service",
            ],
          },
          {
            question: "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
            type:"single",
            options: [
              "AWS Cost & Usage Reports",
              "AWS Systems Manager",
              "AWS Pricing Calculator",
              "AWS Budgets",
            ],
          },
          {
            question: "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
            type:"single",
            options: [
              "Each AWS account gets volume discounts.",
              "Each AWS account gets five times the free-tier services capacity",
              "The consolidated billing feature is just for organizational purpose",
              "AWS services' costs will be reduced to half the original price",
            ],
          },
          {
            question: "What should you do in order to keep the data on EBS volumes safe? (Choose TWO)",
            type:"multiple",
            options: [
              "Ensure that EBS data is encrypted at rest",
              "Create EBS snapshots",
              "Regularly update firmware on EBS devices",
              "Store a backup daily in an external drive",
              "Prevent any unauthorized access to AWS data centers",
            ],
          },
          {
            question: "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture's design?",
            type:"single",
            options: [
              "By automatically provisioning the required AWS resources based on changes in demand",
              "By reducing interdependencies between application components wherever possible",
              "By automatically scaling your AWS resources using an Elastic Load Balancer",
              "By automatically scaling your on-premises resources based on changes in demand",
            ],
          },
          {
            question: "A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? (Choose TWO)",
            type:"multiple",
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
            question: "What does Amazon CloudFront use to distribute content to global users with low latency?",
            type:"single",
            options: [
              "AWS Global Accelerator",
              "AWS Regions",
              "AWS Edge Locations",
              "AWS Availability Zones",
            ],
          },
          {
            question: "What does the 'Principle of Least Privilege' refer to?",
            type:"single",
            options: [
              "You should grant your users only the permissions they need when they need them and nothing more",
              "All IAM users should have at least the necessary permissions to access the core AWS services",
              "All trusted IAM users should have access to any AWS service in the respective AWS account",
              "IAM users should not be granted any permissions; to keep your account safe",
            ],
          },
          {
            question: "Which of the following does NOT belong to the AWS Cloud Computing models?",
            type:"single",
            options: [
              "Networking as a Service (NaaS)",
              "Software as a Service (SaaS)",
              "Infrastructure as a Service (IaaS)",
              "Platform as a Service (PaaS)",
            ],
          },
          {
            question: "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
            type:"single",
            options: [
              "Amazon S3 Glacier Deep Archive",
              "Amazon EBS",
              "AWS Marketplace",
              "S3 Intelligent-Tiering",
            ],
          },
          {
            question: "Which service provides DNS in the AWS cloud?",
            type:"single",
            options: [
              "Route 53",
              "AWS Config",
              "Amazon CloudFront",
              "Amazon EMR",
            ],
          },
          {
            question: "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)",
            type:"multiple",
            options: [
              "AWS Shield",
              "AWS WAF",
              "AWS Config",
              "Amazon Cognito",
              "AWS KMS",
            ],
          },
          {
            question: "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application's response time is optimal?",
            type:"single",
            options: [
              "Amazon ElastiCache",
              "Amazon EBS volume",
              "AWS Storage Gateway",
              "AWS OpsWorks",
            ],
          },
          {
            question: "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
            type:"single",
            options: [
              "On-demand instances",
              "Dedicated instances",
              "Spot instances",
              "Reserved instances",
            ],
          },
          {
            question: "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
            type:"single",
            options: [
              "Spot Instances",
              "Dedicated Instances",
              "On-demand Instances",
              "Reserved Instances",
            ],
          },
          {
            question: "Which of the following can be described as a global content delivery network (CDN) service?",
            type:"single",
            options: [
              "Amazon CloudFront",
              "AWS Regions",
              "AWS Direct Connect",
              "AWS VPN",
            ],
          },
          {
            question: "Which of the following services allows customers to manage their agreements with AWS?",
            type:"single",
            options: [
              "AWS Artifact",
              "AWS Certificate Manager",
              "AWS Systems Manager",
              "AWS Organizations",
            ],
          },
          {
            question: "Question",
            type:"single",
            options: [
              "option",
              "option",
              "option",
              "option",
            ],
          },
          {
            question: "Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)",
            type:"multiple",
            options: [
              "Amazon DynamoDB",
              "Amazon Elastic MapReduce",
              "Amazon VPC",
              "AWS IAM",
              "Amazon Elastic Compute Cloud",
            ],
          },
          {
            question: "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
            type:"single",
            options: [
              "Amazon DynamoDB",
              "Amazon Aurora",
              "Amazon Elastic Block Store",
              "Amazon Redshift",
            ],
          },
          {
            question: "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
            type:"single",
            options: [
              "Technical Account Manager (TAM)",
              "AWS Consulting Partners",
              "Infrastructure Event Management (IEM) engineer",
              "AWS Identity and Access Management (IAM) user",
            ],
          },
          {
            question: "How can you view the distribution of AWS spending in one of your AWS accounts?",
            type:"single",
            options: [
              "By using AWS Cost Explorer",
              "By using Amazon VPC console",
              "By contacting the AWS Support team",
              "By contacting the AWS Finance team",
            ],
          },
          {
            question: "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?",
            type:"single",
            options: [
              "Access keys",
              "Secret token",
              "UserID",
              "User name and password",
            ],
          },
          {
            question: "You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?",
            type:"single",
            options: [
              "Contact the AWS Abuse team",
              "Contact the AWS Customer Service team",
              "Contact the AWS Concierge team",
              "Contact the AWS Security team",
            ],
          },
          {
            question: "Select TWO examples of the AWS shared controls",
            type:"multiple",
            options: [
              "Patch Management",
              "Configuration Management",
              "Data Center operations",
              "VPC Management",
              "IAM Management",
            ],
          },
          {
            question: "In order to implement best practices when dealing with a “Single Point of Failure,” you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)",
            type:"multiple",
            options: [
              "ELB",
              "Auto Scaling",
              "Amazon Athen",
              "ECR",
              "Amazon EC2",
            ],
          },
          {
            question: "A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?",
            type:"single",
            options: [
              "Amazon CloudFront",
              "AWS CloudFormation",
              "Amazon Kinesis Video Streams",
              "Amazon SNS",
            ],
          },
          {
            question: "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
            type:"single",
            options: [
              "Amazon Aurora",
              "Amazon DynamoDB",
              "Amazon Neptune",
              "A MySQL database installed on an EC2 instance",
            ],
          },
          {
            question: "What is the AWS service that enables AWS architects to manage infrastructure as code?",
            type:"single",
            options: [
              "AWS CloudFormation",
              "AWS Config",
              "Amazon SES",
              "Amazon EMR",
            ],
          },
          {
            question: "Under the shared responsibility model, which of the following is the responsibility of AWS?",
            type:"single",
            options: [
              "Configuring infrastructure devices",
              "Client-side encryption",
              "Server-side encryption",
              "Filtering traffic with Security Groups",
            ],
          },
          {
            question: "What does the AWS Health Dashboard provide? (Choose TWO)",
            type:"multiple",
            options: [
              "Detailed troubleshooting guidance to address AWS events impacting your resources",
              "Personalized view of AWS service health",
              "Health checks for Auto Scaling instances",
              "Recommendations for Cost Optimization",
              "A dashboard detailing vulnerabilities in your applications",
            ],
          },
          {
            question: "You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can’t reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?",
            type:"single",
            options: [
              "Amazon CloudWatch",
              "AWS CloudTrail",
              "AWS Config",
              "AWS Lambda",
            ],
          },
          {
            question: "Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?",
            type:"single",
            options: [
              "AWS Trusted Advisor",
              "AWS Secrets Manager",
              "AWS Management Console",
              "AWS Shield",
            ],
          },
          {
            question: "Which of the following is not a benefit of Amazon S3? (Choose TWO)",
            type:"multiple",
            options: [
              "Amazon S3 can run any type of application or backend system",
              "Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere",
              "Amazon S3 provides 99.999999999% (11 9's) of data durability",
              "Amazon S3 stores any number of objects, but with object size limits",
              "Amazon S3 provides unlimited storage for any type of data",
            ],
          },
          {
            question: "In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)",
            type:"multiple",
            options: [
              "Setting password complexity rules",
              "Configuring network access rules",
              "Patching the Network infrastructure",
              "Controlling physical access to compute resources",
              "Disk disposal",
            ],
          },
          {
            question: "What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?",
            type:"single",
            options: [
              "AWS Quick Start reference deployments",
              "AWS OpsWorks",
              "Amazon CloudWatch",
              "Amazon Aurora",
            ],
          },
          {
            question: "An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?",
            type:"single",
            options: [
              "Convertible RI",
              "Standard RI",
              "Premium RI",
              "Elastic RI",
            ],
          },


/*           {
            question: "Question",
            type:"single",
            options: [
              "option",
              "option",
              "option",
              "option",
            ],
          },
          {
            question: "Question",
            type:"multiple",
            options: [
              "option",
              "option",
              "option",
              "option",
              "option",
            ],
          }, */
      ],
    },
    {
      id: "quiz2",
      title: "Examen de practica 1 🥇",
      questions: [
        {
          question: "AWS permite a los usuarios gestionar sus recursos utilizando una interfaz de usuario basada en la web. ¿Cómo se llama esta interfaz?",
          type: "single",
          options: ["Consola de administración de AWS", "AWS SDK", "AWS API", "AWS CLI"],
        },
        {
          question: "¿Cuál de las siguientes es un ejemplo de escalado horizontal en la Nube de AWS?",
          type: "single",
          options: ["Agregar más instancias EC2 del mismo tamaño para manejar un aumento en el tráfico.", "Agregar más capacidad de RAM a una instancia EC2", "Aumentar la capacidad de cómputo de una sola instancia EC2 para abordar las crecientes demandas de una aplicación.", "Reemplazar una instancia EC2 existente por una más grande y poderosa"],
        },
        {
          question: "Has notado que varias instancias críticas de Amazon EC2 han sido terminadas. ¿Cuál de los siguientes servicios de AWS te ayudaría a determinar quién tomó esta acción?",
          type: "single",
          options: [
            "AWS CloudTrail",
            "Amazon Inspector",
            "AWS Trusted Advisor",
            "Informe de uso de instancias EC2",
          ],
        },
        {
            question: "¿Cuáles de las siguientes opciones están relacionadas con la confiabilidad de AWS? (Elige DOS)",
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
            question: "¿Cuál afirmación es verdadera con respecto al Modelo de Responsabilidad Compartida de AWS?",
            type: "single",
            options: [
              "Las responsabilidades varían dependiendo de los servicios utilizados.",
              "La seguridad de los servicios IaaS es responsabilidad de AWS.",
              "La aplicación de parches al sistema operativo huésped es siempre responsabilidad de AWS.",
              "La seguridad de los servicios gestionados es responsabilidad del cliente.",
            ],
          },
          {
            question: "Has configurado la facturación consolidada para varias cuentas de AWS. Una de las cuentas ha adquirido varias instancias reservadas por 3 años. ¿Cuál de las siguientes es verdadera en relación con este escenario?",
            type: "single",
            options: [
              "Todas las cuentas pueden recibir el beneficio de costo por hora de las instancias reservadas.",
              "Los descuentos de las instancias reservadas solo pueden compartirse con la cuenta principal.",
              "La aplicación de parches al sistema operativo huésped es siempre responsabilidad de AWS.",
              "Las instancias compradas tendrán mejor rendimiento que las instancias bajo demanda",
            ],
          },
          {
            question: "Una empresa ha desarrollado una aplicación web de comercio electrónico en AWS. ¿Qué deberían hacer para garantizar que la aplicación tenga el mayor nivel de disponibilidad?",
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
            question: "Una empresa tiene un plan de Soporte Empresarial de AWS. Quieren orientación rápida y eficiente con sus consultas de facturación y cuenta. ¿Cuál de los siguientes servicios debería utilizar la empresa?",
            type: "single",
            options: [
              "Conserje de Soporte de AWS",
              "Panel de Salud de AWS",
              "Servicio al Cliente de AWS",
              "Soporte de Operaciones de AWS",
            ],
          },
          {
            question: "Una empresa japonesa aloja sus aplicaciones en instancias de Amazon EC2 en la Región de Tokio. La empresa ha abierto nuevas sucursales en Estados Unidos, y los usuarios de EE. UU. se quejan de alta latencia. ¿Qué puede hacer la empresa para reducir la latencia para los usuarios en EE. UU. mientras minimiza los costos?",
            type: "single",
            options: [
              "Desplegar nuevas instancias de Amazon EC2 en una Región ubicada en EE. UU.",
              "Construir un nuevo centro de datos en EE. UU. e implementar un modelo híbrido.",
              "Registrar un nuevo dominio de EE. UU. para servir a los usuarios en EE. UU.",
              "Aplicar la política de enrutamiento basada en latencia de Amazon Connect",
            ],
          },
          {
            question: "Una organización tiene un gran número de empleados técnicos que operan su infraestructura en la Nube de AWS. ¿Qué proporciona AWS para ayudar a organizarlos en equipos y luego asignar los permisos adecuados para cada equipo?",
            type: "single",
            options: [
              "Grupos de usuarios de IAM",
              "Roles de IAM",
              "Usuarios de IAM",
              "AWS Organizations",
            ],
          },
          {
            question: "Una empresa ha decidido migrar su base de datos Oracle a AWS. ¿Qué servicio de AWS puede ayudar a lograr esto sin afectar negativamente la funcionalidad de la base de datos fuente?",
            type: "single",
            options: [
              "Servicio de Migración de Bases de Datos de AWS",
              "AWS OpsWorks",
              "Servicio de Migración de Servidores de AWS",
              "Servicio de Descubrimiento de Aplicaciones de AWS",
            ],
          },
          {
            question: "Ajustar la capacidad de cómputo dinámicamente para reducir costos es una implementación de cuál de las mejores prácticas de la nube de AWS?",
            type: "single",
            options: [
              "Implementar elasticidad",
              "Construir seguridad en cada capa",
              "Paralelizar tareas",
              "Adoptar una arquitectura monolítica",
            ],
          },
          {
            question: "¿Cuáles son los beneficios de tener infraestructura alojada en AWS? (Elige DOS)",
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
            question: "¿Cuál es la ventaja de la práctica recomendada por AWS de 'desacoplar' aplicaciones?",
            type: "single",
            options: [
              "Reduce las interdependencias para que los fallos no afecten a otros componentes de la aplicación",
              "Permite tratar una aplicación como una unidad única y cohesiva",
              "Permite actualizar cualquier aplicación monolítica de forma rápida y sencilla",
              "Permite rastrear cualquier llamada API realizada a cualquier servicio de AWS",
            ],
          },
          {
            question: "¿Cuál de los siguientes ayuda a un cliente a ver la actividad de facturación de Amazon EC2 del mes pasado?",
            type: "single",
            options: [
              "Informes de Costos y Uso de AWS",
              "AWS Systems Manager",
              "Calculadora de Precios de AWS",
              "Presupuestos de AWS",
            ],
          },
          {
            question: "¿Qué se obtiene al configurar la facturación consolidada para cinco cuentas de AWS diferentes bajo otra cuenta maestra?",
            type: "single",
            options: [
              "Cada cuenta de AWS obtiene descuentos por volumen.",
              "Cada cuenta de AWS obtiene cinco veces la capacidad de los servicios del nivel gratuito.",
              "La función de facturación consolidada es solo para fines organizativos.",
              "Los costos de los servicios de AWS se reducirán a la mitad del precio original.",
            ],
          },
          {
            question: "¿Qué deberías hacer para mantener los datos en volúmenes EBS seguros? (Elige DOS)",
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
            question: "Uno de los principios más importantes de las mejores prácticas de AWS a seguir es el principio de elasticidad en la arquitectura en la nube. ¿Cómo mejora este principio el diseño de tu arquitectura?",
            type: "single",
            options: [
              "Provisionando automáticamente los recursos de AWS necesarios en función de los cambios en la demanda",
              "Reduciendo las interdependencias entre los componentes de la aplicación siempre que sea posible",
              "Escalando automáticamente tus recursos de AWS utilizando un Balanceador de Carga Elástico",
              "Escalando automáticamente tus recursos locales en función de los cambios en la demanda",
            ],
          },
          {
            question: "Una empresa emergente opera con fondos limitados y está extremadamente preocupada por los excesos de costos. ¿Cuáles de las siguientes opciones pueden usarse para notificar a la empresa cuando su factura mensual de AWS supere los $2000? (Elige DOS)",
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
            question: "¿Qué utiliza Amazon CloudFront para distribuir contenido a usuarios globales con baja latencia?",
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
            question: "¿Cuál de los siguientes NO pertenece a los modelos de Computación en la Nube de AWS?",
            type: "single",
            options: [
              "Networking as a Service (NaaS)",
              "Software as a Service (SaaS)",
              "Infrastructure as a Service (IaaS)",
              "Platform as a Service (PaaS)",
            ],
          },
          {
            question: "El proceso de identificación de una empresa de servicios financieros en línea requiere que los nuevos usuarios completen una entrevista en línea con su equipo de seguridad. Las entrevistas grabadas solo se requieren en caso de un problema legal o una infracción de cumplimiento normativo. ¿Cuál es el servicio más rentable para almacenar los videos grabados?",
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
            options: [
              "Route 53",
              "AWS Config",
              "Amazon CloudFront",
              "Amazon EMR",
            ],
          },
          {
            question: "Se registran cientos de miles de ataques DDoS cada mes en todo el mundo. ¿Qué servicio proporciona AWS para ayudar a proteger a los clientes de AWS de estos ataques? (Elige DOS)",
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
            question: "Una empresa está implementando una nueva aplicación web de dos niveles en AWS. ¿Dónde se deben almacenar los datos más accedidos para que el tiempo de respuesta de la aplicación sea óptimo?",
            type: "single",
            options: [
              "Amazon ElastiCache",
              "Volumen de Amazon EBS",
              "AWS Storage Gateway",
              "AWS OpsWorks",
            ],
          },
          {
            question: "Quieres ejecutar una aplicación de cuestionario por solo un día (sin interrupciones), ¿qué opción de compra de Amazon EC2 deberías utilizar?",
            type: "single",
            options: [
              "Instancias bajo demanda",
              "Instancias dedicadas",
              "Instancias spot",
              "Instancias reservadas",
            ],
          },
          {
            question: "Estás trabajando en un proyecto que implica crear miniaturas de millones de imágenes. El tiempo de actividad constante no es un problema, y no se requiere procesamiento continuo. ¿Qué opción de compra de EC2 sería la más rentable?",
            type: "single",
            options: [
              "Instancias spot",
              "Instancias dedicadas",
              "Instancias bajo demanda",
              "Instancias reservadas",
            ],
          },
          {
            question: "¿Cuál de los siguientes puede describirse como un servicio de red de entrega de contenido global (CDN)?",
            type: "single",
            options: [
              "Amazon CloudFront",
              "Regiones de AWS",
              "AWS Direct Connect",
              "AWS VPN",
            ],
          },
          {
            question: "¿Cuál de los siguientes servicios permite a los clientes gestionar sus acuerdos con AWS?",
            type: "single",
            options: [
              "AWS Artifact",
              "AWS Certificate Manager",
              "AWS Systems Manager",
              "AWS Organizations",
            ],
          },
          {
            question: "¿Cuál de los siguientes son ejemplos de servicios gestionados por AWS, donde AWS es responsable de las cargas operativas y de mantenimiento del servicio? (Elige DOS)",
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
            question: "Tu empresa tiene una aplicación de almacenamiento de datos que requiere acceso a una base de datos NoSQL. ¿Qué oferta de base de datos de AWS cumpliría con este requisito?",
            type: "single",
            options: [
              "Amazon DynamoDB",
              "Amazon Aurora",
              "Amazon Elastic Block Store",
              "Amazon Redshift",
            ],
          },
          {
            question: "Como parte del plan de soporte Enterprise, ¿quién es el principal punto de contacto para las necesidades de soporte continuas?",
            type: "single",
            options: [
              "Gerente de Cuenta Técnica (TAM)",
              "Socios Consultores de AWS",
              "Ingeniero de Gestión de Eventos de Infraestructura (IEM)",
              "Usuario de AWS Identity and Access Management (IAM)",
            ],
          },
          {
            question: "¿Cómo puedes ver la distribución del gasto en AWS en una de tus cuentas de AWS?",
            type: "single",
            options: [
              "Usando AWS Cost Explorer",
              "Usando la consola de Amazon VPC",
              "Contactando al equipo de Soporte de AWS",
              "Contactando al equipo de Finanzas de AWS",
            ],
          },
          {
            question: "¿Qué debe proporcionar un usuario de IAM para interactuar con los servicios de AWS utilizando la Interfaz de Línea de Comandos de AWS (AWS CLI)?",
            type: "single",
            options: [
              "Claves de acceso",
              "Token secreto",
              "ID de usuario",
              "Nombre de usuario y contraseña",
            ],
          },
          {
            question: "Tienes el soporte básico de AWS, y has descubierto que algunos recursos de AWS están siendo utilizados maliciosamente y esos recursos podrían comprometer tus datos. ¿Qué deberías hacer?",
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
            question: "Para implementar las mejores prácticas al tratar con un “Punto Único de Fallo”, deberías intentar automatizar lo más posible tanto la detección como la reacción ante fallos. ¿Cuál de los siguientes servicios de AWS ayudaría? (Elige DOS)",
            type: "multiple",
            options: [
              "ELB",
              "Auto Scaling",
              "Amazon Athena",
              "ECR",
              "Amazon EC2",
            ],
          },
          {
            question: "Una empresa planea alojar un sitio web educativo en AWS. Sus cursos en video serán transmitidos en todo el mundo. ¿Cuál de los siguientes servicios de AWS ayudará a lograr altas velocidades de transferencia?",
            type: "single",
            options: [
              "Amazon CloudFront",
              "AWS CloudFormation",
              "Amazon Kinesis Video Streams",
              "Amazon SNS",
            ],
          },
          {
            question: "Un desarrollador está planeando construir una aplicación web de dos niveles que tenga una capa de base de datos MySQL. ¿Cuál de los siguientes servicios de base de datos de AWS proporcionaría copias de seguridad automáticas para la aplicación?",
            type: "single",
            options: [
              "Amazon Aurora",
              "Amazon DynamoDB",
              "Amazon Neptune",
              "Una base de datos MySQL instalada en una instancia EC2",
            ],
          },
          {
            question: "¿Cuál es el servicio de AWS que permite a los arquitectos de AWS gestionar la infraestructura como código?",
            type: "single",
            options: [
              "AWS CloudFormation",
              "AWS Config",
              "Amazon SES",
              "Amazon EMR",
            ],
          },
          {
            question: "Bajo el modelo de responsabilidad compartida, ¿cuál de los siguientes es responsabilidad de AWS?",
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
            question: "Has implementado tu aplicación en varias instancias de Amazon EC2. Tus clientes se quejan de que a veces no pueden acceder a tu aplicación. ¿Qué servicio de AWS te permite monitorear el rendimiento de tus instancias EC2 para ayudar a resolver estos problemas?",
            type: "single",
            options: [
              "Amazon CloudWatch",
              "AWS CloudTrail",
              "AWS Config",
              "AWS Lambda",
            ],
          },
          {
            question: "Tu empresa está desarrollando una aplicación web crítica en AWS, y la seguridad de la aplicación es una de las principales prioridades. ¿Cuál de los siguientes servicios de AWS proporcionará recomendaciones de optimización de seguridad de la infraestructura?",
            type: "single",
            options: [
              "AWS Trusted Advisor",
              "AWS Secrets Manager",
              "Consola de gestión de AWS",
              "AWS Shield",
            ],
          },
          {
            question: "¿Cuál de los siguientes NO es un beneficio de Amazon S3? (Elige DOS)",
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
            question: "En el Modelo de Responsabilidad Compartida de AWS, ¿cuál de las siguientes es responsabilidad del cliente? (Elige DOS)",
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
            question: "¿Qué proporciona AWS para implementar tecnologías populares como IBM MQ en AWS con el menor esfuerzo y tiempo posible?",
            type: "single",
            options: [
              "Implementaciones de referencia de AWS Quick Start",
              "AWS OpsWorks",
              "Amazon CloudWatch",
              "Amazon Aurora",
            ],
          },
          {
            question: "Una organización ha decidido comprar una instancia reservada de Amazon EC2 (RI) por tres años para reducir costos. Es posible que las cargas de trabajo de la aplicación cambien durante el período de reserva. ¿Cuál es el tipo de instancia reservada (RI) de EC2 que permitirá a la empresa intercambiar la instancia reservada comprada por otra instancia reservada con mayor potencia de cómputo si es necesario?",
            type: "single",
            options: [
              "RI Convertible",
              "RI Estándar",
              "RI Premium",
              "RI Elástica",
            ],
          },         

      ],
    },
    // Add more questionnaires as needed
  ];
  
  export default questionnaires;
  