"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import required modules
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
// Initialize Express app
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
// Enable CORS
app.use((0, cors_1.default)());
// Define the API route
app.get('/', function (req, res) {
    res.json({
        email: process.env.HNG_EMAIL || 'mulweyemorgan12@gmail.com',
        current_datetime: new Date().toISOString(),
        github_url: 'https://github.com/Morg3an/hng12-backend-api'
    });
});
// Start the server
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
