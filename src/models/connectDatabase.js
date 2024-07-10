import mysql from 'mysql2';

// Tạo kết nối cơ sở dữ liệu
const connection = mysql.createConnection({
   host: 'b3pdf9qz3qcovpgba2vd-mysql.services.clever-cloud.com',
    user: 'udcpwxwjxpapqukp',
    password: 'dykekvQTrK02fApiAohZ', // Mật khẩu mặc định của XAMPP là rỗng
    database: 'b3pdf9qz3qcovpgba2vd',
});

export default connection;
