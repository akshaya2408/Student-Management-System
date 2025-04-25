const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load .env
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses JSON in request bodies

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB error:", err));

// Routes
const studentRouter = require('./Routes/StudentRoutes');
app.use('/api/student', studentRouter); // All routes start with /api/student

// Default route
app.get('/', (req, res) => {
  res.send("Student Management System Backend Running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
