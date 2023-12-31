"use strict";
//import express from 'express';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var cors = require('cors');
var sequelize_1 = require("sequelize");
var sequelize_2 = require("./sequelize");
var app = express();
var port = 3000;
// Middleware to parse JSON request bodies
app.use(cors());
// Define the route for GET "/api/liveness"
app.get('/api/liveness', function (req, res) {
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
sequelize_2.default.sync();
var LearningPackage = sequelize_2.default.define('LearningPackage', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    targetAudience: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    difficultyLevel: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
});
LearningPackage.sync();
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var learningPackage, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, LearningPackage.create({
                        id: 1,
                        title: "Learn TypeScript",
                        description: "A course on TypeScript",
                        category: "Programming",
                        targetAudience: "Developers",
                        difficultyLevel: 2,
                    })];
            case 1:
                learningPackage = _a.sent();
                return [4 /*yield*/, LearningPackage.create({
                        id: 2,
                        title: "Learn Node.js",
                        description: "A course on Node.js",
                        category: "Programming",
                        targetAudience: "Developers",
                        difficultyLevel: 3,
                    })];
            case 2:
                _a.sent();
                return [4 /*yield*/, LearningPackage.create({
                        id: 3,
                        title: "Learn HTML",
                        description: "A course on HTML",
                        category: "Web Development",
                        targetAudience: "Beginners",
                        difficultyLevel: 1,
                    })];
            case 3:
                _a.sent();
                return [4 /*yield*/, LearningPackage.create({
                        id: 4,
                        title: "Learn Angular",
                        description: "A course on Angular",
                        category: "Web Development",
                        targetAudience: "Developers",
                        difficultyLevel: 4,
                    })];
            case 4:
                _a.sent();
                console.log('LearningPackage created:', learningPackage.toJSON());
                return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                console.error('Error creating LearningPackage:', error_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); })();
var LearningFact = sequelize_2.default.define('LearningFact', {
    text: sequelize_1.DataTypes.TEXT,
    LearningPackageId: sequelize_1.DataTypes.INTEGER,
});
// Define the relationship between LearningPackage and LearningFact
LearningPackage.hasMany(LearningFact, { as: 'facts', foreignKey: 'LearningPackageId' });
LearningFact.belongsTo(LearningPackage, { foreignKey: 'LearningPackageId' });
// @ts-ignore
var addLearningFactsToPackage = function (packageId, facts) { return __awaiter(void 0, void 0, void 0, function () {
    var learningPackage, createdFacts, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, LearningPackage.findByPk(packageId)];
            case 1:
                learningPackage = _a.sent();
                if (!learningPackage) {
                    console.error("LearningPackage not found for ID: ".concat(packageId));
                    return [2 /*return*/];
                }
                return [4 /*yield*/, LearningFact.bulkCreate(facts, {
                        updateOnDuplicate: ['text'], // Update text if a duplicate id is found
                    })];
            case 2:
                createdFacts = _a.sent();
                // Associate the created facts with the package
                return [2 /*return*/, createdFacts];
            case 3:
                error_2 = _a.sent();
                console.error('Error adding LearningFacts:', error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var learningFactsForTypeScript = [
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
var learningFactsForNodeJS = [
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
var learningFactsForHTML = [
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
var learningFactsForAngular = [
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
app.get('/api/package', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var learningPackages, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, LearningPackage.findAll()];
            case 1:
                learningPackages = _a.sent();
                res.status(200).json(learningPackages);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(500).json({ error: "error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get('/api/package/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var packageId, learningPackage, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                packageId = parseInt(req.params.id);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, LearningPackage.findByPk(packageId)];
            case 2:
                learningPackage = _a.sent();
                if (learningPackage) {
                    res.status(200).json(learningPackage);
                }
                else {
                    res.status(404).json({ error: "Entity not found for id: ".concat(packageId) });
                }
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                res.status(500).json({ error: "error" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post('/api/package', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newPackage, createdPackage, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newPackage = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, LearningPackage.create(newPackage)];
            case 2:
                createdPackage = _a.sent();
                res.status(201).json(createdPackage);
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                res.status(400).json({ error: "error" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.put('/api/package/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var packageId, updatedPackage, updatedRowsCount, updatedLearningPackage, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                packageId = parseInt(req.params.id);
                updatedPackage = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, LearningPackage.update(updatedPackage, {
                        where: { id: packageId }
                    })];
            case 2:
                updatedRowsCount = (_a.sent())[0];
                if (!(updatedRowsCount === 0)) return [3 /*break*/, 3];
                res.status(404).json({ error: "Entity not found for id: ".concat(packageId) });
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, LearningPackage.findByPk(packageId)];
            case 4:
                updatedLearningPackage = _a.sent();
                res.status(200).json(updatedLearningPackage);
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                err_4 = _a.sent();
                res.status(500).json({ error: "error" });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
app.get('/api/package-summaries', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var packageSummaries, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, LearningPackage.findAll({
                        attributes: ['id', 'title'] // Select only the "id" and "title" fields
                    })];
            case 1:
                packageSummaries = _a.sent();
                res.status(200).json(packageSummaries);
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                res.status(500).json({ error: "error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get('/api/package/:packageId/fact/:factId', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var packageId, factId, learningPackage, learningFacts, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                packageId = req.params.packageId;
                factId = req.params.factId;
                console.log('Requested packageId:', packageId);
                console.log('Requested factId:', factId);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, LearningPackage.findByPk(packageId, {
                        include: [{ model: LearningFact, as: 'facts' }],
                    })];
            case 2:
                learningPackage = _a.sent();
                if (!learningPackage) {
                    return [2 /*return*/, res.status(404).json({ error: 'LearningPackage not found' })];
                }
                return [4 /*yield*/, LearningFact.findByPk(factId)];
            case 3:
                learningFacts = _a.sent();
                if (!learningFacts) {
                    return [2 /*return*/, res.status(404).json({ error: 'LearningFact not found' })];
                }
                return [2 /*return*/, res.status(200).json(learningFacts)];
            case 4:
                error_3 = _a.sent();
                console.error('Error retrieving LearningFact:', error_3);
                return [2 /*return*/, res.status(500).json({ error: 'Internal server error' })];
            case 5: return [2 /*return*/];
        }
    });
}); });
app.post('/api/package/:packageId/fact', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var packageId, text, learningPackage, newFact, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                packageId = req.params.packageId;
                text = req.body.text;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, LearningPackage.findByPk(packageId)];
            case 2:
                learningPackage = _a.sent();
                if (!learningPackage) {
                    return [2 /*return*/, res.status(404).json({ error: 'LearningPackage not found' })];
                }
                return [4 /*yield*/, LearningFact.create({ text: text, LearningPackageId: packageId })];
            case 3:
                newFact = _a.sent();
                return [2 /*return*/, res.status(201).json(newFact)];
            case 4:
                error_4 = _a.sent();
                console.error('Error creating LearningFact:', error_4);
                return [2 /*return*/, res.status(500).json({ error: 'Internal server error' })];
            case 5: return [2 /*return*/];
        }
    });
}); });
// PUT /api/package/:packageId/fact/:factId - Update an existing Fact of a given package
app.put('/api/package/:packageId/fact/:factId', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var packageId, factId, text, learningPackage, existingFact, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                packageId = req.params.packageId;
                factId = req.params.factId;
                text = req.body.text;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, LearningPackage.findByPk(packageId)];
            case 2:
                learningPackage = _a.sent();
                if (!learningPackage) {
                    return [2 /*return*/, res.status(404).json({ error: 'LearningPackage not found' })];
                }
                return [4 /*yield*/, LearningFact.findOne({
                        where: { id: factId, LearningPackageId: packageId },
                    })];
            case 3:
                existingFact = _a.sent();
                if (!existingFact) {
                    return [2 /*return*/, res.status(404).json({ error: 'LearningFact not found' })];
                }
                // Update the text of the existing fact
                // @ts-ignore
                existingFact.text = text;
                return [4 /*yield*/, existingFact.save()];
            case 4:
                _a.sent();
                return [2 /*return*/, res.status(200).json(existingFact)];
            case 5:
                error_5 = _a.sent();
                console.error('Error updating LearningFact:', error_5);
                return [2 /*return*/, res.status(500).json({ error: 'Internal server error' })];
            case 6: return [2 /*return*/];
        }
    });
}); });
app.delete('/api/package/:packageId/fact/:factId', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var packageId, factId, learningPackage, existingFact, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                packageId = req.params.packageId;
                factId = req.params.factId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, LearningPackage.findByPk(packageId)];
            case 2:
                learningPackage = _a.sent();
                if (!learningPackage) {
                    return [2 /*return*/, res.status(404).json({ error: 'LearningPackage not found' })];
                }
                return [4 /*yield*/, LearningFact.findOne({
                        where: { id: factId, LearningPackageId: packageId },
                    })];
            case 3:
                existingFact = _a.sent();
                if (!existingFact) {
                    return [2 /*return*/, res.status(404).json({ error: 'LearningFact not found' })];
                }
                // Delete the existing fact
                return [4 /*yield*/, existingFact.destroy()];
            case 4:
                // Delete the existing fact
                _a.sent();
                return [2 /*return*/, res.status(204).send()]; // Respond with a success status code
            case 5:
                error_6 = _a.sent();
                console.error('Error deleting LearningFact:', error_6);
                return [2 /*return*/, res.status(500).json({ error: 'Internal server error' })];
            case 6: return [2 /*return*/];
        }
    });
}); });
app.get('/api/package/:id/learning-facts', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var packageId, learningPackage, learningFacts, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                packageId = parseInt(req.params.id);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, LearningPackage.findByPk(packageId)];
            case 2:
                learningPackage = _a.sent();
                if (!learningPackage) {
                    return [2 /*return*/, res.status(404).json({ error: 'LearningPackage not found' })];
                }
                return [4 /*yield*/, LearningFact.findAll({
                        where: { LearningPackageId: packageId },
                    })];
            case 3:
                learningFacts = _a.sent();
                return [2 /*return*/, res.status(200).json(learningFacts)];
            case 4:
                error_7 = _a.sent();
                console.error('Error fetching learning facts:', error_7);
                return [2 /*return*/, res.status(500).json({ error: 'Internal server error' })];
            case 5: return [2 /*return*/];
        }
    });
}); });
app.get('/api/package/:id/flashcards', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var packageId, learningFacts, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                packageId = parseInt(req.params.id);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, LearningFact.findAll({
                        where: { LearningPackageId: packageId },
                    })];
            case 2:
                learningFacts = _a.sent();
                res.status(200).json(learningFacts);
                return [3 /*break*/, 4];
            case 3:
                error_8 = _a.sent();
                res.status(500).json({ error: "Error fetching flashcards" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post('/api/package/:id/flashcards', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var packageId, text, learningPackage, newFact, error_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                packageId = parseInt(req.params.id);
                text = req.body.text;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, LearningPackage.findByPk(packageId)];
            case 2:
                learningPackage = _a.sent();
                if (!learningPackage) {
                    return [2 /*return*/, res.status(404).json({ error: 'LearningPackage not found' })];
                }
                return [4 /*yield*/, LearningFact.create({ text: text, LearningPackageId: packageId })];
            case 3:
                newFact = _a.sent();
                return [2 /*return*/, res.status(201).json(newFact)];
            case 4:
                error_9 = _a.sent();
                console.error('Error creating LearningFact:', error_9);
                return [2 /*return*/, res.status(500).json({ error: 'Internal server error' })];
            case 5: return [2 /*return*/];
        }
    });
}); });
// Start the Express server
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
