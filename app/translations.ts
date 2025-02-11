export const translations = {
  en: {
    header: {
      name: "Your Name",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      qrCodeAlt: "Competitive Coding Profile QR Code",
    },
    hero: {
      greeting: "Hi, I'm Jose Muñoz",
      subtitle: "A passionate Junior Software Engineer",
      imageAlt: "Jose Muñoz",
      quote: '"Do not comment bad code, \nRewrite it."',
      currentlyLearning: "Currently Learning",
      learningTopic: "c# and low level concepts",
      currentProject: "Current Project",
      projectDescription: "2D game using Unity and scripting in c++",
      completed: "completed",
      cta: "Get in touch",
      viewCV: "View CV",
    },
    aboutMe: {
      title: "About Me",
      paragraph1:
        "I'm a passionate junior software engineer with a strong foundation in web development and a keen interest in solving complex problems. My journey in tech started with a curiosity about how things work, which led me to pursue a degree in Computer Science.",
      paragraph2:
        "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and local meetups. I believe in continuous learning and am always excited to take on new challenges.",
      paragraph3:
        "I'm currently looking for opportunities to grow as a developer and contribute to meaningful projects. If you think we'd be a good fit, I'd love to hear from you!",
    },
    skills: {
      title: "Skills & Expertise",
      frontend: "Frontend Development",
      backend: "Backend Development",
      database: "Database Management",
      versionControl: "Version Control",
      frontendDesc: "Building responsive and interactive user interfaces",
      backendDesc: "Designing and implementing server-side logic and APIs",
      databaseDesc: "Working with both SQL and NoSQL databases",
      versionControlDesc: "Proficient in Git and collaborative development workflows",
    },
    projects: {
      title: "My Projects",
      viewProject: "View Project",
      previousProject: "Previous project",
      nextProject: "Next project",
      list: [
        {
          title: "Project 1",
          description: "Description of Project 1",
          image: "/project1.jpg",
          link: "https://project1.com",
        },
        {
          title: "Project 2",
          description: "Description of Project 2",
          image: "/project2.jpg",
          link: "https://project2.com",
        },
        {
          title: "Project 3",
          description: "Description of Project 3",
          image: "/project3.jpg",
          link: "https://project3.com",
        },
      ],
    },
    codingChallenge: {
      title: "Coding Challenge",
      correct: "Correct!",
      incorrect: "Incorrect!",
      nextChallenge: "Next Challenge",
      challenges: [
        {
          question: "What is the output of print(type([]))?",
          options: ["<class 'list'>", "<class 'tuple'>", "<class 'set'>", "<class 'dict'>"],
          correctAnswer: "<class 'list'>",
        },
        {
          question: "Which of the following is used to define a function in Python?",
          options: ["function", "def", "define", "func"],
          correctAnswer: "def",
        },
        {
          question: "What does the 'yield' keyword do in Python?",
          options: [
            "Defines a generator function",
            "Raises an exception",
            "Returns multiple values",
            "Terminates a loop",
          ],
          correctAnswer: "Defines a generator function",
        },
        {
          question: "What is the purpose of the 'self' parameter in Python class methods?",
          options: [
            "It's optional and can be omitted",
            "It refers to the current instance of the class",
            "It's a keyword for static methods",
            "It's used to create private variables",
          ],
          correctAnswer: "It refers to the current instance of the class",
        },
        {
          question: "Which of these is not a valid way to copy a list in Python?",
          options: [
            "new_list = old_list.copy()",
            "new_list = list(old_list)",
            "new_list = old_list[:]",
            "new_list = &old_list",
          ],
          correctAnswer: "new_list = &old_list",
        },
        {
          question: "What is the primary purpose of a load balancer in system design?",
          options: [
            "To increase storage capacity",
            "To distribute network traffic across multiple servers",
            "To encrypt data transmissions",
            "To compress data for faster transfer",
          ],
          correctAnswer: "To distribute network traffic across multiple servers",
        },
        {
          question: "Which of these is NOT a common strategy for database scaling?",
          options: ["Sharding", "Replication", "Indexing", "Normalization"],
          correctAnswer: "Normalization",
        },
        {
          question: "What is the CAP theorem in distributed systems?",
          options: [
            "Consistency, Availability, Partition tolerance",
            "Concurrency, Atomicity, Persistence",
            "Caching, Authentication, Performance",
            "Clustering, Allocation, Parallelism",
          ],
          correctAnswer: "Consistency, Availability, Partition tolerance",
        },
        {
          question: "Which architectural style is characterized by loosely coupled, independently deployable services?",
          options: ["Monolithic", "Microservices", "Serverless", "Event-driven"],
          correctAnswer: "Microservices",
        },
        {
          question: "What is the primary benefit of using a Content Delivery Network (CDN)?",
          options: [
            "Improved database performance",
            "Enhanced security",
            "Faster content delivery to geographically distributed users",
            "Increased storage capacity",
          ],
          correctAnswer: "Faster content delivery to geographically distributed users",
        },
        {
          question: "What is the time complexity of binary search?",
          options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
          correctAnswer: "O(log n)",
        },
        {
          question: "Which data structure uses LIFO (Last In, First Out) principle?",
          options: ["Queue", "Stack", "Linked List", "Tree"],
          correctAnswer: "Stack",
        },
        {
          question: "What is the purpose of the 'static' keyword in many programming languages?",
          options: [
            "To make a variable constant",
            "To allocate memory dynamically",
            "To associate a member with a class rather than an instance",
            "To declare a private method",
          ],
          correctAnswer: "To associate a member with a class rather than an instance",
        },
        {
          question: "Which sorting algorithm has the best average-case time complexity?",
          options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"],
          correctAnswer: "Quick Sort",
        },
        {
          question: "What is the primary difference between 'pass by value' and 'pass by reference'?",
          options: [
            "Speed of execution",
            "Memory usage",
            "Whether a copy or the original is manipulated",
            "Number of parameters that can be passed",
          ],
          correctAnswer: "Whether a copy or the original is manipulated",
        },
      ],
    },
    chess: {
      turn: "Turn",
      white: "White",
      black: "Black",
      status: "Status",
      playing: "Playing",
      check: "Check",
      checkmate: "Checkmate",
      stalemate: "Stalemate",
      whiteWins: "White wins!",
      blackWins: "Black wins!",
      resetGame: "Reset Game",
    },
    contact: {
      title: "Contact Me",
      name: "Name",
      email: "Email",
      message: "Message",
      sendMessage: "Send Message",
      sending: "Sending...",
      successMessage: "Message sent successfully!",
      errorMessage: "There was an error sending your message. Please try again.",
    },
    footer: {
      name: "Your Name",
      allRightsReserved: "All rights reserved.",
    },
    toolbox: {
      title: "My Toolbox",
      level: "Level",
      description: "Description",
      levels: {
        basics: "Basics",
        familiar: "Familiar",
        capable: "Capable",
        proficient: "Proficient",
      },
    },
    techStack: {
      title: "Tech Stack",
    },
    githubActivity: {
      title: "Recent GitHub Activity",
    },
    blogPosts: {
      title: "Latest Blog Posts",
    },
  },
  es: {
    header: {
      name: "Tu Nombre",
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      qrCodeAlt: "Código QR del Perfil de Codificación Competitiva",
    },
    hero: {
      greeting: "Hola, soy Jose Muñoz",
      subtitle: "Un apasionado Ingeniero de Software Junior",
      imageAlt: "Jose Muñoz",
      quote: '"No comentes el código malo, \nReescríbelo."',
      currentlyLearning: "Aprendiendo actualmente",
      learningTopic: "c# y conceptos de bajo nivel",
      currentProject: "Proyecto actual",
      projectDescription: "Juego 2D usando Unity y programando en c++",
      completed: "completado",
      cta: "Contáctame",
      viewCV: "Ver CV",
    },
    aboutMe: {
      title: "Sobre Mí",
      paragraph1:
        "Soy un ingeniero de software junior apasionado con una sólida base en desarrollo web y un gran interés en resolver problemas complejos. Mi viaje en la tecnología comenzó con la curiosidad sobre cómo funcionan las cosas, lo que me llevó a obtener un título en Ciencias de la Computación.",
      paragraph2:
        "Cuando no estoy programando, puedes encontrarme explorando nuevas tecnologías, contribuyendo a proyectos de código abierto o compartiendo mis conocimientos a través de publicaciones en blogs y reuniones locales. Creo en el aprendizaje continuo y siempre estoy emocionado por asumir nuevos desafíos.",
      paragraph3:
        "Actualmente estoy buscando oportunidades para crecer como desarrollador y contribuir a proyectos significativos. Si crees que podríamos ser una buena combinación, ¡me encantaría saber de ti!",
    },
    skills: {
      title: "Habilidades y Experiencia",
      frontend: "Desarrollo Frontend",
      backend: "Desarrollo Backend",
      database: "Gestión de Bases de Datos",
      versionControl: "Control de Versiones",
      frontendDesc: "Construcción de interfaces de usuario responsivas e interactivas",
      backendDesc: "Diseño e implementación de lógica del lado del servidor y APIs",
      databaseDesc: "Trabajo con bases de datos SQL y NoSQL",
      versionControlDesc: "Competente en Git y flujos de trabajo de desarrollo colaborativo",
    },
    projects: {
      title: "Mis Proyectos",
      viewProject: "Ver Proyecto",
      previousProject: "Proyecto anterior",
      nextProject: "Proyecto siguiente",
      list: [
        {
          title: "Proyecto 1",
          description: "Descripción del Proyecto 1",
          image: "/project1.jpg",
          link: "https://project1.com",
        },
        {
          title: "Proyecto 2",
          description: "Descripción del Proyecto 2",
          image: "/project2.jpg",
          link: "https://project2.com",
        },
        {
          title: "Proyecto 3",
          description: "Descripción del Proyecto 3",
          image: "/project3.jpg",
          link: "https://project3.com",
        },
      ],
    },
    codingChallenge: {
      title: "Desafío de Codificación",
      correct: "¡Correcto!",
      incorrect: "¡Incorrecto!",
      nextChallenge: "Siguiente Desafío",
      challenges: [
        {
          question: "¿Cuál es la salida de print(type([]))?",
          options: ["<class 'list'>", "<class 'tuple'>", "<class 'set'>", "<class 'dict'>"],
          correctAnswer: "<class 'list'>",
        },
        {
          question: "¿Cuál de los siguientes se usa para definir una función en Python?",
          options: ["function", "def", "define", "func"],
          correctAnswer: "def",
        },
        {
          question: "¿Qué hace la palabra clave 'yield' en Python?",
          options: [
            "Define una función generadora",
            "Lanza una excepción",
            "Devuelve múltiples valores",
            "Termina un bucle",
          ],
          correctAnswer: "Define una función generadora",
        },
        {
          question: "¿Cuál es el propósito del parámetro 'self' en los métodos de clase de Python?",
          options: [
            "Es opcional y se puede omitir",
            "Se refiere a la instancia actual de la clase",
            "Es una palabra clave para métodos estáticos",
            "Se usa para crear variables privadas",
          ],
          correctAnswer: "Se refiere a la instancia actual de la clase",
        },
        {
          question: "¿Cuál de estas no es una forma válida de copiar una lista en Python?",
          options: [
            "new_list = old_list.copy()",
            "new_list = list(old_list)",
            "new_list = old_list[:]",
            "new_list = &old_list",
          ],
          correctAnswer: "new_list = &old_list",
        },
        {
          question: "¿Cuál es el propósito principal de un balanceador de carga en el diseño de sistemas?",
          options: [
            "Aumentar la capacidad de almacenamiento",
            "Distribuir el tráfico de red entre múltiples servidores",
            "Encriptar las transmisiones de datos",
            "Comprimir datos para una transferencia más rápida",
          ],
          correctAnswer: "Distribuir el tráfico de red entre múltiples servidores",
        },
        {
          question: "¿Cuál de estas NO es una estrategia común para escalar bases de datos?",
          options: ["Sharding", "Replicación", "Indexación", "Normalización"],
          correctAnswer: "Normalización",
        },
        {
          question: "¿Qué es el teorema CAP en sistemas distribuidos?",
          options: [
            "Consistencia, Disponibilidad, Tolerancia a particiones",
            "Concurrencia, Atomicidad, Persistencia",
            "Caché, Autenticación, Rendimiento",
            "Clustering, Asignación, Paralelismo",
          ],
          correctAnswer: "Consistencia, Disponibilidad, Tolerancia a particiones",
        },
        {
          question:
            "¿Qué estilo arquitectónico se caracteriza por servicios débilmente acoplados e independientemente desplegables?",
          options: ["Monolítico", "Microservicios", "Serverless", "Dirigido por eventos"],
          correctAnswer: "Microservicios",
        },
        {
          question: "¿Cuál es el principal beneficio de usar una Red de Distribución de Contenido (CDN)?",
          options: [
            "Mejora del rendimiento de la base de datos",
            "Seguridad mejorada",
            "Entrega de contenido más rápida a usuarios geográficamente distribuidos",
            "Mayor capacidad de almacenamiento",
          ],
          correctAnswer: "Entrega de contenido más rápida a usuarios geográficamente distribuidos",
        },
        {
          question: "¿Cuál es la complejidad temporal de la búsqueda binaria?",
          options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
          correctAnswer: "O(log n)",
        },
        {
          question: "¿Qué estructura de datos utiliza el principio LIFO (Last In, First Out)?",
          options: ["Cola", "Pila", "Lista enlazada", "Árbol"],
          correctAnswer: "Pila",
        },
        {
          question: "¿Cuál es el propósito de la palabra clave 'static' en muchos lenguajes de programación?",
          options: [
            "Hacer que una variable sea constante",
            "Asignar memoria dinámicamente",
            "Asociar un miembro con una clase en lugar de una instancia",
            "Declarar un método privado",
          ],
          correctAnswer: "Asociar un miembro con una clase en lugar de una instancia",
        },
        {
          question: "¿Qué algoritmo de ordenación tiene la mejor complejidad temporal promedio?",
          options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"],
          correctAnswer: "Quick Sort",
        },
        {
          question: "¿Cuál es la principal diferencia entre 'paso por valor' y 'paso por referencia'?",
          options: [
            "Velocidad de ejecución",
            "Uso de memoria",
            "Si se manipula una copia o el original",
            "Número de parámetros que se pueden pasar",
          ],
          correctAnswer: "Si se manipula una copia o el original",
        },
      ],
    },
    chess: {
      turn: "Turno",
      white: "Blancas",
      black: "Negras",
      status: "Estado",
      playing: "Jugando",
      check: "Jaque",
      checkmate: "Jaque mate",
      stalemate: "Tablas",
      whiteWins: "¡Ganan las blancas!",
      blackWins: "¡Ganan las negras!",
      resetGame: "Reiniciar juego",
    },
    contact: {
      title: "Contáctame",
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      sendMessage: "Enviar Mensaje",
      sending: "Enviando...",
      successMessage: "¡Mensaje enviado con éxito!",
      errorMessage: "Hubo un error al enviar su mensaje. Por favor, inténtelo de nuevo.",
    },
    footer: {
      name: "Tu Nombre",
      allRightsReserved: "Todos los derechos reservados.",
    },
    toolbox: {
      title: "Mi Caja de Herramientas",
      level: "Nivel",
      description: "Descripción",
      levels: {
        basics: "Básico",
        familiar: "Familiarizado",
        capable: "Capaz",
        proficient: "Competente",
      },
    },
    techStack: {
      title: "Stack Tecnológico",
    },
    githubActivity: {
      title: "Actividad Reciente en GitHub",
    },
    blogPosts: {
      title: "Últimas Publicaciones del Blog",
    },
  },
}

