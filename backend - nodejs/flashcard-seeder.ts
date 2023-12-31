// flashcard-seeder.ts

const flashcardsForTypeScript = [
    {
        question: 'What is TypeScript?',
        answer: 'TypeScript is a statically typed superset of JavaScript.',
    },
    {
        question: 'What does TypeScript introduce for better code quality?',
        answer: 'TypeScript introduces type annotations and interfaces.',
    },
    {
        question: 'Can TypeScript be used with popular front-end frameworks?',
        answer: 'Yes, TypeScript can be used with frameworks like Angular and React.',
    },
];

const flashcardsForNodeJS = [
    {
        question: 'What is Node.js?',
        answer: 'Node.js is a JavaScript runtime that allows you to run JavaScript on the server side.',
    },
    {
        question: 'What is Node.js known for?',
        answer: 'Node.js is known for its non-blocking, event-driven architecture.',
    },
    {
        question: 'What can you build with Node.js?',
        answer: 'You can build scalable and real-time applications with Node.js.',
    },
];

const flashcardsForHTML = [
    {
        question: 'What does HTML stand for?',
        answer: 'HTML stands for HyperText Markup Language.',
    },
    {
        question: 'How is HTML used?',
        answer: 'HTML is used to structure and create content for web pages.',
    },
    {
        question: 'What does HTML use to define elements?',
        answer: 'HTML uses tags to define elements such as headings, paragraphs, and links.',
    },
];

const flashcardsForAngular = [
    {
        question: 'What is Angular?',
        answer: 'Angular is a popular front-end framework developed by Google.',
    },
    {
        question: 'What does Angular provide for building applications?',
        answer: 'Angular provides a powerful toolset for building dynamic and single-page applications (SPAs).',
    },
    {
        question: 'What are the key components in Angular?',
        answer: 'Angular uses components, services, and modules to organize and manage code.',
    },
];

const seedFlashcards = async () => {
    try {
        // Find the LearningPackages by title
        const typescriptPackage = await LearningPackage.findOne({ where: { title: 'Learn TypeScript' } });
        const nodejsPackage = await LearningPackage.findOne({ where: { title: 'Learn Node.js' } });
        const htmlPackage = await LearningPackage.findOne({ where: { title: 'Learn HTML' } });
        const angularPackage = await LearningPackage.findOne({ where: { title: 'Learn Angular' } });

        // Add flashcards to the respective packages
        await Flashcard.bulkCreate(flashcardsForTypeScript.map(card => ({ ...card, LearningPackageId: typescriptPackage?.id })));
        await Flashcard.bulkCreate(flashcardsForNodeJS.map(card => ({ ...card, LearningPackageId: nodejsPackage?.id })));
        await Flashcard.bulkCreate(flashcardsForHTML.map(card => ({ ...card, LearningPackageId: htmlPackage?.id })));
        await Flashcard.bulkCreate(flashcardsForAngular.map(card => ({ ...card, LearningPackageId: angularPackage?.id })));

        console.log('Flashcards seeded successfully.');
    } catch (error) {
        console.error('Error seeding flashcards:', error);
    }
};

seedFlashcards();
