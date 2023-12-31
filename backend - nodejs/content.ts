import LearningPackage from './interface';

// Define an array of LearningPackage objects
const learningPackages: LearningPackage[] = [
    {
        id: 1,
        title: "Learn TypeScript",
        description: "A course on TypeScript",
        category: "Programming",
        targetAudience: "Developers",
        difficultyLevel: 2,
    },
    {
        id: 2,
        title: "Learn Node.js",
        description: "A course on Node.js",
        category: "Programming",
        targetAudience: "Developers",
        difficultyLevel: 3,
    },
    {
        id: 3,
        title: "Learn HTML",
        description: "A course on HTML",
        category: "Web Development",
        targetAudience: "Beginners",
        difficultyLevel: 1,
    },
    {
        id: 4,
        title: "Learn Angular",
        description: "A course on Angular",
        category: "Web Development",
        targetAudience: "Developers",
        difficultyLevel: 4,
    },
];

export default learningPackages;
