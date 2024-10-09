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
              "Desplegar la aplicación en múltiples Zonas de Disponibilidad y ubicaciones Edge.",
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

      ],
    },
    // Add more questionnaires as needed
  ];
  
  export default questionnaires;
  