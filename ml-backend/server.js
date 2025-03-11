// import express from 'express';
// import dotenv from 'dotenv';
// import colors from 'colors';
// import cors from 'cors';
// import connectDB from './config/db.js';
// import detectionRoutes from './routes/detection.js';

// // Load env vars
// dotenv.config();

// // Connect to database
// connectDB();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Routes
// app.get('/', (req, res) => {
//     res.send('API is running...');
// });

// app.use('/api/detections', detectionRoutes);
// app.use('/uploads', express.static('uploads'));

// // Error handler middleware
// app.use((err, req, res, next) => {
//     const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//     res.status(statusCode);
//     res.json({
//         message: err.message,
//         stack: process.env.NODE_ENV === 'production' ? null : err.stack,
//     });
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
// });

import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import connectDB from './config/db.js';
import detectionRoutes from './routes/detection.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors(
    {
        origin: 'http://localhost:5174',
        methods: 'GET,POST,DELETE',
        credentials: true
    }
));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static file serving (uploads folder)
app.use('/uploads', express.static('uploads'));

// API Routes
app.get('/', (req, res) => {
    res.send('🚀 API is running...');
});
app.use('/api/detections', detectionRoutes);

// Error Handler Middleware (placed after routes)
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : null,
    });
});

// Set PORT with fallback
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running in ${NODE_ENV} mode on port ${PORT}`.yellow.bold);
});
