export interface ProjectData {
    id: number;
    name: string;
    description: string;
    techStack: string[];
    link: string;
  }
  
  export const projects: ProjectData[] = [
    {
      id: 1,
      name: "NC News Back-End",
      description: "Allows for API requests to view and update articles, comments, users and topics.",
      techStack: ["SQL", "TDD", "JavaScript"],
      link: "https://nc-news-k0xf.onrender.com/api/",
    },
    {
      id: 2,
      name: "NC News Front-End",
      description: "A news article website allowing users to read and post articles, read and post comments on articles, add new topic categories and vote on article and comments.",
      techStack: ["React", "MUI", "JavaScript"],
      link: "https://valkarncnews.netlify.app/",
    },
    {id: 3,
    name: "Gym Bro Hero",
    description: "A workout tracker app with game elements to encourage tracking. Allows the user to create and track workouts, see stats, gain xp and level up. The user can then use their levels to add pets to the home view.",
    techStack: ["React Native", "Expo", "JavaScript", "SQL"],
    link: "https://github.com/ValkarVarg/gymbrohero-be",
  },
  ];