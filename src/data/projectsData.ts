export interface ProjectData {
    id: number;
    name: string;
    description: string;
    techStack: string[];
    link: string;
    image: string;
  }
  
  export const projects: ProjectData[] = [
    {
      id: 1,
      name: "NC News Back-End",
      description: "Allows for API requests to view and update articles, comments, users and topics.",
      techStack: ["SQL", "TDD", "JavaScript"],
      link: "https://nc-news-k0xf.onrender.com/api/",
      image: "ncimg",
    },
    {
      id: 2,
      name: "NC News Front-End",
      description: "A news article website allowing users to read and post articles, read and post comments on articles, add new topic categories and vote on article and comments.",
      techStack: ["React", "MUI", "JavaScript"],
      link: "https://valkarncnews.netlify.app/",
      image: "ncimg",
    },
    {id: 3,
    name: "Gym Bro Hero",
    description: "A workout tracker app with game elements to encourage tracking. Allows the user to create and track workouts, see stats, gain xp and level up. The user can then use their levels to add pets to the home view.",
    techStack: ["React Native", "Expo", "JavaScript", "SQL"],
    link: "https://github.com/ValkarVarg/gymbrohero-be",
    image: "gymbro",
  },
  {id: 4,
    name: "Goals Tracker",
    description: "A simple goal tracking app to keep track of activities and targets",
    techStack: ["React Native", "Expo", "TypeScript", "Javascript"],
    link: "https://github.com/ValkarVarg/goal-tracker",
    image:"goal",
  },
  {id: 5,
    name: "Snake Game",
    description: "The classic Snake game, with local high score tracking",
    techStack: ["Python", "TKinter"],
    link: "https://github.com/ValkarVarg/SnakeGame",
    image:"snake",
  },
  {id: 6,
    name: "Flash Cards",
    description: "Flash card learning app, built with the top 100 most used french words to help learn",
    techStack: ["Python", "TKinter"],
    link: "https://github.com/ValkarVarg/Flash-card-app",
    image: "flashCard"
  },
  {id: 7,
    name: "Guess the Number Game",
    description: "A react native app where the app tries to guess the number you have chosen. Utilises reactive rendering and device specific styling to better suit android/ios and differing device sizes",
    techStack: ["React Native", "TypeScript", "JavaScript", "Expo"],
    link: "https://github.com/ValkarVarg/guess-the-number",
    image: "dice"
  },
  {id: 8,
    name: "Quizzler App",
    description: "A python based quiz app that uses an online API to generate 10 question quizzes, uses a GUI to present and give feedback",
    techStack: ["Python", "TKinter"],
    link: "https://github.com/ValkarVarg/quizzler-app",
    image: "quiz"
  },
  {id: 9,
    name: "Shopping Cart",
    description: "A recreation of a shopping app, allowing for products to be added and removed from a users cart, the quantity can be changed and the user can checkout.",
    techStack: ["React Native", "TypeScript", "Expo", "PSQL"],
    link: "https://github.com/AlexStraton/shopping_cart_app",
    image: "shopping"
  }
  ];