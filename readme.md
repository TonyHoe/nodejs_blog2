# request / response
- request: chứa thông tin ứng dụng phía client YÊU CẦU lên server (tt yêu cầu gửi lên)
- response: tùy chỉnh, cấu hình việc PHẢN HỒI lại cái gì cho client (tùy chỉnh kết quả trả về)

// Cài nodemon lên dự án (debug & tự load lại server)
npm i nodemon --save-dev
npm install -g nodemon // cài lên máy

// Cài morgan lên dự án (phần mềm trung gian để log các http request ra, request gửi lên NODE server)
npm i morgan --save-dev
npm install -g morgan // cài lên máy

//cài scss
node-sass --save-dev
B1: thêm script "watch": "node-sass src/resources/scss/app.scss src/public/css/app.css" (chuyển file scss sang css)
B2: thêm option --watch vào sau node-sass


# GET & POST
- GET và POST là hai phương thức của giao thức HTTP, đều là gửi dữ liệu về server xử lí sau khi người dùng nhập thông tin vào form và thực hiện submit.
- GET: để server lấy dữ liệu từ client, POST: để client gửi dl lên server.

- Phương thức GET:
+ Gửi thông tin người dùng và đính lên đường dẫn URL.
+ Băng thông của nó chỉ khoảng 1024 kí tự vì vây GET hạn chế về số kí tự được gửi đi.
+ GET không thể gửi dữ liệu nhị phân , hình ảnh ...
+ Có thể cached và được bookmark (đánh dấu trên trình duyệt), lưu trong browser history.
- Phương thức POST:
+ Truyền thông tin thông qua HTTP header.
+ Dữ liệu rất bảo mật vì dữ liệu được gửi ngầm, không đưa lên URL, bằng việc sử dụng Secure HTTP.
+ Parameters được truyền trong request body
+ Có thể truyền dữ liệu lớn, hạn chế tùy thuộc vào cấu hình của Server.
+ Không cache và bookmark được cũng như không được lưu lại trong browser history. + + Không hạn chế về kích thước dữ liệu khi gửi, có thể gửi dữ liệu nhị phân, hình ảnh.
