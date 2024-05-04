// models/User.js
const mysql = require('mysql');

const userSchema = new mysql.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mysql.model('User', userSchema);

module.exports = User;
