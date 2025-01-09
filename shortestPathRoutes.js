const express = require('express');
const router = express.Router();
const shortestPathController = require('../controller/shortestPathController'); // Ensure correct path (singular 'controller')

// Define a POST route for finding the shortest path
router.post('/shortest-path', shortestPathController.findShortestPath);

module.exports = router;
