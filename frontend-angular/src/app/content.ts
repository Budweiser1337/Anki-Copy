// Assuming you have a list of courses
const courses = [
  { id: 1, title: 'Learn TypeScript' },
  { id: 2, title: 'Learn Node.js' },
  { id: 3, title: 'Learn HTML' },
  { id: 4, title: 'Learn Angular' },
];

// Flashcards for Learn TypeScript
const flashcardsForTypeScript = [
  { question: 'What is TypeScript?', answer: 'TypeScript is a statically typed superset of JavaScript.' },
  { question: 'What does TypeScript introduce for better code quality?', answer: 'TypeScript introduces type annotations and interfaces.' },
  { question: 'Can you use TypeScript with Angular and React?', answer: 'Yes, you can use TypeScript with popular front-end frameworks.' },
];

// Flashcards for Learn Node.js
const flashcardsForNodeJS = [
  { question: 'What is Node.js?', answer: 'Node.js is a JavaScript runtime that allows you to run JavaScript on the server side.' },
  { question: 'What is Node.js known for?', answer: 'Node.js is known for its non-blocking, event-driven architecture.' },
  { question: 'What can you build with Node.js?', answer: 'You can build scalable and real-time applications with Node.js.' },
];

// Flashcards for Learn HTML
const flashcardsForHTML = [
  { question: 'What does HTML stand for?', answer: 'HTML stands for HyperText Markup Language.' },
  { question: 'How is HTML used?', answer: 'HTML is used to structure and create content for web pages.' },
  { question: 'What does HTML use to define elements?', answer: 'HTML uses tags to define elements such as headings, paragraphs, and links.' },
];

// Flashcards for Learn Angular
const flashcardsForAngular = [
  { question: 'What is Angular?', answer: 'Angular is a popular front-end framework developed by Google.' },
  { question: 'What does Angular provide for building applications?', answer: 'Angular provides a powerful toolset for building dynamic and single-page applications (SPAs).' },
  { question: 'What does Angular use to organize and manage code?', answer: 'Angular uses components, services, and modules to organize and manage code.' },
];

// Create a map to associate courses with their flashcards
const flashcardsMap = new Map<number, any[]>();
flashcardsMap.set(1, flashcardsForTypeScript);
flashcardsMap.set(2, flashcardsForNodeJS);
flashcardsMap.set(3, flashcardsForHTML);
flashcardsMap.set(4, flashcardsForAngular);
// Add more entries for other courses if needed

export { courses, flashcardsMap };
