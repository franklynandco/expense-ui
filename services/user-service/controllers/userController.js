// controllers/userController.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_database_name'
});

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const user = { username, email, password };
  
  connection.query('INSERT INTO users SET ?', user, (error, results) => {
    if (error) {
      console.error('Error registering user:', error);
      res.status(400).json({ error: 'Error registering user' });
      return;
    }
    console.log('User registered successfully');
    res.status(201).json({ message: 'User registered successfully' });
  });
};

