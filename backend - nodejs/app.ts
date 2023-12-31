//import express from 'express';

const express = require('express');
const cors = require('cors');

import {DataTypes} from "sequelize";

import { Request, Response } from 'express';
import LearningPackages from "./content";
import sequelize from './sequelize';
import LearningPackage1 from "./interface";

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(cors());

// Define the route for GET "/api/liveness"
app.get('/api/liveness', (req: Request, res: Response) => {
    // Send a JSON response with the "OK" message and a status code of 200
    res.status(200).json({ message: 'OK' });
});

/*

// Define a route to get all LearningPackages
app.get('/api/package', (req: Request, res: Response) => {
    // Send the array of LearningPackage objects as a JSON response
    res.json(LearningPackages);
});

// Define a route to get a LearningPackage by id
app.get('/api/package/:id', (req: Request, res: Response) => {
    const packageId = parseInt(req.params.id); // Get the id from the request parameters

    // Find the LearningPackage with the provided id
    const foundPackage = LearningPackages.find((pkg) => pkg.id === packageId);

    if (foundPackage) {
        // If a package is found, respond with status code 200 and the package object
        res.status(200).json(foundPackage);
    } else {
        // If no package is found, respond with status code 404 and an error message
        res.status(404).json({ error: `Entity not found for id: ${packageId}` });
    }
});

// Define a route to create a new LearningPackage
app.post('/api/package', (req: Request, res: Response) => {
    // Extract the package data from the request body
    const newPackage: LearningPackage1 = req.body;

    // Validate the required fields (e.g., title, description, category, etc.)
    if (!newPackage.title || !newPackage.description || !newPackage.category || !newPackage.targetAudience || !newPackage.difficultyLevel) {
        res.status(400).json({ error: "Mandatory fields are missing in the request body." });
    } else {
        // Assign a new id to the package (for simplicity, you can use a sequential id)
        const newId = LearningPackages.length + 1;
        newPackage.id = newId;

        // Add the new package to the list of all packages
        LearningPackages.push(newPackage);

        // Respond with status code 200 and the created package (including its new id)
        res.status(200).json(newPackage);
    }
});

// Define a route to update an existing LearningPackage by id
app.put('/api/package/:id', (req: Request, res: Response) => {
    const packageId = parseInt(req.params.id); // Get the id from the request parameters
    const updatedPackage: LearningPackage1 = req.body; // Extract the updated package data from the request body

    // Find the index of the package with the provided id
    const packageIndex = LearningPackages.findIndex((pkg) => pkg.id === packageId);

    if (packageIndex !== -1) {
        // If the package with the provided id exists, update it
        LearningPackages[packageIndex] = { ...LearningPackages[packageIndex], ...updatedPackage };

        // Respond with status code 200 and the modified package
        res.status(200).json(LearningPackages[packageIndex]);
    } else {
        // If no package with the provided id is found, respond with a status code of 404
        res.status(404).json({ error: `Entity not found for id: ${packageId}` });
    }
});

// Define a route to get summarized information about LearningPackages
app.get('/api/package-summaries', (req: Request, res: Response) => {
    // Map the array of LearningPackages to include only the "id" and "title" fields
    const packageSummaries = LearningPackages.map((pkg) => ({ id: pkg.id, title: pkg.title }));

    // Send the array of summarized packages as a JSON response
    res.json(packageSummaries);
});

*/

sequelize.sync();

const LearningPackage = sequelize.define('LearningPackage', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    targetAudience: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    difficultyLevel: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
});

LearningPackage.sync();

(async () => {
    try {
        const learningPackage = await LearningPackage.create({
            id: 1,
            title: "Learn TypeScript",
            description: "A course on TypeScript",
            category: "Programming",
            targetAudience: "Developers",
            difficultyLevel: 2,
        });
        await LearningPackage.create({
            id: 2,
            title: "Learn Node.js",
            description: "A course on Node.js",
            category: "Programming",
            targetAudience: "Developers",
            difficultyLevel: 3,
        });
        await LearningPackage.create({
            id: 3,
            title: "Learn HTML",
            description: "A course on HTML",
            category: "Web Development",
            targetAudience: "Beginners",
            difficultyLevel: 1,
        });
        await LearningPackage.create({
            id: 4,
            title: "Learn Angular",
            description: "A course on Angular",
            category: "Web Development",
            targetAudience: "Developers",
            difficultyLevel: 4,
        });

        console.log('LearningPackage created:', learningPackage.toJSON());
    } catch (error) {
        console.error('Error creating LearningPackage:', error);
    }
})();

const LearningFact = sequelize.define('LearningFact', {
    text: DataTypes.TEXT,
    LearningPackageId: DataTypes.INTEGER,
});

// Define the relationship between LearningPackage and LearningFact
LearningPackage.hasMany(LearningFact, { as: 'facts', foreignKey: 'LearningPackageId' });
LearningFact.belongsTo(LearningPackage, { foreignKey: 'LearningPackageId' });

// @ts-ignore
const addLearningFactsToPackage = async (packageId, facts) => {
    try {
        // Find the LearningPackage by ID
        const learningPackage = await LearningPackage.findByPk(packageId);

        if (!learningPackage) {
            console.error(`LearningPackage not found for ID: ${packageId}`);
            return;
        }

        // Create LearningFacts and associate them with the LearningPackage
        // @ts-ignore
        const createdFacts = await LearningFact.bulkCreate(facts, {
            updateOnDuplicate: ['text'], // Update text if a duplicate id is found
        });

        // Associate the created facts with the package
        return createdFacts;

    } catch (error) {
        console.error('Error adding LearningFacts:', error);
    }
};

const learningFactsForTypeScript = [
    {
        id: 1,
        text: 'TypeScript is a statically typed superset of JavaScript.',
        LearningPackageId: 1,
    },
    {
        id: 2,
        text: 'TypeScript introduces type annotations and interfaces for better code quality.',
        LearningPackageId: 1,
    },
    {
        id: 3,
        text: 'You can use TypeScript with popular front-end frameworks like Angular and React.',
        LearningPackageId: 1,
    },
    {
        id: 4,
        text: 'TypeScript supports optional static typing, allowing you to gradually adopt it in existing projects.',
        LearningPackageId: 1,
    },
    {
        id: 5,
        text: 'TypeScript is open-source and developed by Microsoft.',
        LearningPackageId: 1,
    },
    {
        id: 6,
        text: 'Decorators in TypeScript provide a way to add annotations and metadata to classes.',
        LearningPackageId: 1,
    },
];
const learningFactsForNodeJS = [
    {
        id: 1,
        text: 'Node.js is a JavaScript runtime that allows you to run JavaScript on the server side.',
        LearningPackageId: 2,
    },
    {
        id: 2,
        text: 'Node.js is known for its non-blocking, event-driven architecture.',
        LearningPackageId: 2,
    },
    {
        id: 3,
        text: 'You can build scalable and real-time applications with Node.js.',
        LearningPackageId: 2,
    },
    {
        id: 4,
        text: 'Node.js has a large ecosystem of packages and modules available through npm.',
        LearningPackageId: 2,
    },
    {
        id: 5,
        text: 'Event-driven programming in Node.js is based on the Observer pattern.',
        LearningPackageId: 2,
    },
    {
        id: 6,
        text: 'Express.js is a popular web application framework for Node.js.',
        LearningPackageId: 2,
    },
];
const learningFactsForHTML = [
    {
        id: 1,
        text: 'HTML stands for HyperText Markup Language.',
        LearningPackageId: 3,
    },
    {
        id: 2,
        text: 'HTML is used to structure and create content for web pages.',
        LearningPackageId: 3,
    },
    {
        id: 3,
        text: 'HTML uses tags to define elements such as headings, paragraphs, and links.',
        LearningPackageId: 3,
    },
    {
        id: 4,
        text: 'HTML5 introduced new semantic elements like <nav>, <article>, <section>, and more.',
        LearningPackageId: 3,
    },
    {
        id: 5,
        text: 'Canvas and SVG are powerful features in HTML5 for graphics and animations.',
        LearningPackageId: 3,
    },
    {
        id: 6,
        text: 'WebSockets enable real-time communication between clients and servers in HTML5.',
        LearningPackageId: 3,
    },
];
const learningFactsForAngular = [
    {
        id: 1,
        text: 'Angular is a popular front-end framework developed by Google.',
        LearningPackageId: 4,
    },
    {
        id: 2,
        text: 'Angular provides a powerful toolset for building dynamic and single-page applications (SPAs).',
        LearningPackageId: 4,
    },
    {
        id: 3,
        text: 'Angular uses components, services, and modules to organize and manage code.',
        LearningPackageId: 4,
    },
    {
        id: 4,
        text: 'Angular CLI provides powerful command-line tools for Angular development.',
        LearningPackageId: 4,
    },
    {
        id: 5,
        text: 'RxJS is a key part of Angular, providing reactive programming support.',
        LearningPackageId: 4,
    },
    {
        id: 6,
        text: 'Angular Material is a UI component library for Angular applications.',
        LearningPackageId: 4,
    },
];
addLearningFactsToPackage(1, learningFactsForTypeScript);
addLearningFactsToPackage(2, learningFactsForNodeJS);
addLearningFactsToPackage(3, learningFactsForHTML);
addLearningFactsToPackage(4, learningFactsForAngular);

app.get('/api/package', async (req: Request, res: Response) => {
    try {
        const learningPackages = await LearningPackage.findAll();
        res.status(200).json(learningPackages);
    } catch (err) {
        res.status(500).json({ error: "error" });
    }
});

app.get('/api/package/:id', async (req:Request, res:Response) => {
    const packageId = parseInt(req.params.id);

    try {
        const learningPackage = await LearningPackage.findByPk(packageId);

        if (learningPackage) {
            res.status(200).json(learningPackage);
        } else {
            res.status(404).json({ error: `Entity not found for id: ${packageId}` });
        }
    } catch (err) {
        res.status(500).json({ error: "error" });
    }
});

app.post('/api/package', async (req:Request, res:Response) => {
    const newPackage = req.body;

    try {
        const createdPackage = await LearningPackage.create(newPackage);
        res.status(201).json(createdPackage);
    } catch (err) {
        res.status(400).json({ error: "error" });
    }
});

app.put('/api/package/:id', async (req:Request, res:Response) => {
    const packageId = parseInt(req.params.id);
    const updatedPackage = req.body;

    try {
        const [updatedRowsCount] = await LearningPackage.update(updatedPackage, {
            where: { id: packageId }
        });

        if (updatedRowsCount === 0) {
            res.status(404).json({ error: `Entity not found for id: ${packageId}` });
        } else {
            const updatedLearningPackage = await LearningPackage.findByPk(packageId);
            res.status(200).json(updatedLearningPackage);
        }
    } catch (err) {
        res.status(500).json({ error: "error"});
    }
});

app.get('/api/package-summaries', async (req:Request, res:Response) => {
    try {
        const packageSummaries = await LearningPackage.findAll({
            attributes: ['id', 'title'] // Select only the "id" and "title" fields
        });

        res.status(200).json(packageSummaries);
    } catch (err) {
        res.status(500).json({ error: "error" });
    }
});


app.get('/api/package/:packageId/fact/:factId', async (req: Request, res: Response) => {
    const packageId = req.params.packageId;
    const factId = req.params.factId;

    console.log('Requested packageId:', packageId);
    console.log('Requested factId:', factId);

    try {
        const learningPackage = await LearningPackage.findByPk(packageId, {
            include: [{ model: LearningFact, as: 'facts' }],
        });

        if (!learningPackage) {
            return res.status(404).json({ error: 'LearningPackage not found' });
        }

        const learningFacts = await LearningFact.findByPk(factId)

        if (!learningFacts) {
            return res.status(404).json({ error: 'LearningFact not found' });
        }

        return res.status(200).json(learningFacts);
    } catch (error) {
        console.error('Error retrieving LearningFact:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/package/:packageId/fact', async (req: Request, res: Response) => {
    const packageId = req.params.packageId;
    const { text } = req.body; // Assuming the request body contains the text for the new fact

    try {
        // Find the LearningPackage by ID
        const learningPackage = await LearningPackage.findByPk(packageId);

        if (!learningPackage) {
            return res.status(404).json({ error: 'LearningPackage not found' });
        }

        // Create a new LearningFact and associate it with the LearningPackage
        const newFact = await LearningFact.create({ text, LearningPackageId: packageId });

        return res.status(201).json(newFact);
    } catch (error) {
        console.error('Error creating LearningFact:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// PUT /api/package/:packageId/fact/:factId - Update an existing Fact of a given package
app.put('/api/package/:packageId/fact/:factId', async (req: Request, res: Response) => {
    const packageId = req.params.packageId;
    const factId = req.params.factId;
    const { text } = req.body; // Assuming the request body contains the updated text

    try {
        // Find the LearningPackage by ID
        const learningPackage = await LearningPackage.findByPk(packageId);

        if (!learningPackage) {
            return res.status(404).json({ error: 'LearningPackage not found' });
        }

        // Find the LearningFact by ID and package association
        const existingFact = await LearningFact.findOne({
            where: { id: factId, LearningPackageId: packageId },
        });

        if (!existingFact) {
            return res.status(404).json({ error: 'LearningFact not found' });
        }

        // Update the text of the existing fact
        // @ts-ignore
        existingFact.text = text;
        await existingFact.save();

        return res.status(200).json(existingFact);
    } catch (error) {
        console.error('Error updating LearningFact:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.delete('/api/package/:packageId/fact/:factId', async (req: Request, res: Response) => {
    const packageId = req.params.packageId;
    const factId = req.params.factId;

    try {
        // Find the LearningPackage by ID
        const learningPackage = await LearningPackage.findByPk(packageId);

        if (!learningPackage) {
            return res.status(404).json({ error: 'LearningPackage not found' });
        }

        // Find the LearningFact by ID and package association
        const existingFact = await LearningFact.findOne({
            where: { id: factId, LearningPackageId: packageId },
        });

        if (!existingFact) {
            return res.status(404).json({ error: 'LearningFact not found' });
        }

        // Delete the existing fact
        await existingFact.destroy();

        return res.status(204).send(); // Respond with a success status code
    } catch (error) {
        console.error('Error deleting LearningFact:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/package/:id/learning-facts', async (req: Request, res: Response) => {
    const packageId = parseInt(req.params.id);

    try {
        // Find the LearningPackage by ID
        const learningPackage = await LearningPackage.findByPk(packageId);

        if (!learningPackage) {
            return res.status(404).json({ error: 'LearningPackage not found' });
        }

        // Retrieve the associated learning facts
        const learningFacts = await LearningFact.findAll({
            where: { LearningPackageId: packageId },
        });

        return res.status(200).json(learningFacts);
    } catch (error) {
        console.error('Error fetching learning facts:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/package/:id/flashcards', async (req: Request, res: Response) => {
    const packageId = parseInt(req.params.id);

    try {
        const learningFacts = await LearningFact.findAll({
            where: { LearningPackageId: packageId },
        });

        res.status(200).json(learningFacts);
    } catch (error) {
        res.status(500).json({ error: "Error fetching flashcards" });
    }
});

app.post('/api/package/:id/flashcards', async (req: Request, res: Response) => {
    const packageId = parseInt(req.params.id);
    const { text } = req.body;

    try {
        const learningPackage = await LearningPackage.findByPk(packageId);

        if (!learningPackage) {
            return res.status(404).json({ error: 'LearningPackage not found' });
        }

        const newFact = await LearningFact.create({ text, LearningPackageId: packageId });

        return res.status(201).json(newFact);
    } catch (error) {
        console.error('Error creating LearningFact:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
