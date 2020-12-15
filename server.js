const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({extended: false}));

app.get('/', (req,res) => 
res.json({msg: 'Welcome to the TaskManager API'})
)


app.use('/categories', require('./routes/categories'));
app.use('/categories', require('./routes/tasks'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));