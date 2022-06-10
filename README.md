# BuildingJobWebsite
Đây là source code trang website đăng tuyển và tìm kiếm việc làm. Để cho trang web có thể chạy được trên máy tính cá nhân cần làm các bước sau đây:

## Cài đặt MySQL (nếu chưa có)

Do cơ sở dữ liệu dùng trong trang web là MySQL nên cần cài đặt MySQL

Vào trang này để cài đặt https://dev.mysql.com/downloads/mysql/ và đây là trang hướng dẫn cài đặt chi tiết https://www.thegioididong.com/game-app/huong-dan-cach-tai-cai-dat-mysql-ban-moi-nhat-chi-tiet-tung-1299084 

## Tải cơ sở dữ liệu lên

Chọn vào file có đuôi .sql có sẵn trong file khi tải code về import vào MySQL

## Cài đặt NodeJS (nếu chưa có)

Vào trang sau để tải NodeJS: https://nodejs.org/en/download/ chọn Windows, macOS hoặc Linux

Sau khi tải và cài đặt xong mở Terminal để khi tra chạy các lệnh như sau

```
node -v
```
```
npm -v
```

Nếu chạy được sẽ trả về phiên bản đã cài đặt

## Cài đặt dự án

Sau khi tải dự án từ Github: https://github.com/truongminhtam/BuildingJobWebsite.git về giải nén

Đi đến thư mục dự án được giải nén mở cmd lên do có 2 thư mục **job-be** và **job-fe** nên mở cả hai Terminal cho tiện, trên cả hai Terminal chạy lệnh

```
npm i
```

or

```
npm install
```

Để cập nhật file **node_module**

Bên phía **job-be** mở file **config.json** trên mục config để cài đặt lại password và tài khoản root của MySQL

## Chạy dự án lên

Sau đó dùng lệnh sau trên Terminal của cả hai thư mục **job-be** và **job-fe**

```
npm start
```

Mở trang trình duyệt gõ và địa chỉ sau http://localhost:3000/

Đăng nhập vào tài khoản có trong database (admin: tam1475369@gmail.com password: 0123456789)




