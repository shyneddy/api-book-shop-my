import mysql from 'mysql2';

// Tạo kết nối cơ sở dữ liệu
const connection = mysql.createConnection({
   host: 'sql12.freesqldatabase.com',
    user: 'sql12662376',
    password: 'nUSBhhAF4K', // Mật khẩu mặc định của XAMPP là rỗng
    database: 'sql12662376',
});

export default connection;
