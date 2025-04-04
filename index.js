const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth.routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/auth', authRoutes);

// Connect DB and start server
connectDB()
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  
});
