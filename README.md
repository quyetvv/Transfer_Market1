# Transfer Market

Ứng dụng web tĩnh để quản lý thị trường chuyển nhượng nội bộ cho `FC 8A1`. Dự án hỗ trợ quản lý cầu thủ, phân quyền người dùng, xử lý phần thưởng và đồng bộ hoá dữ liệu với Firebase.

## Gợi ý tính năng

- Lọc và tìm kiếm cầu thủ theo đội, vị trí và giá trị.
- Sắp xếp cầu thủ theo vị trí, giá trị, đánh giá hoặc chỉ số.
- Quản lý đề xuất thêm cầu thủ và thưởng sau trận.
- Thêm chức năng so sánh đội hình, đề xuất chuyển nhượng và báo cáo hiệu suất.
- Hỗ trợ xuất dữ liệu CSV và đồng bộ Firebase.

## Tính năng chính

- Đăng nhập/đăng ký tài khoản.
- Phân quyền người dùng: `guest`, `admin`, `superadmin`.
- Xem danh sách cầu thủ, lọc, sắp xếp và tìm kiếm.
- Cập nhật giá trị chuyển nhượng, vị trí, đánh giá và chỉ số phát triển.
- Quản lý phần thưởng sau trận, thêm thưởng tùy chỉnh và xem lịch sử.
- Guest gửi đề xuất thêm cầu thủ hoặc đề xuất thưởng.
- Admin duyệt đề xuất, quản lý cầu thủ và người dùng.
- Xuất dữ liệu cầu thủ ra CSV.
- Đồng bộ dữ liệu với Firebase Realtime Database.

## Cấu trúc dự án

- `index.html` - giao diện chính và điểm vào của ứng dụng.
- `assets/styles.css` - định nghĩa giao diện và bố cục.
- `assets/firebase.js` - cấu hình Firebase, khởi tạo và expose API.
- `assets/app.js` - logic ứng dụng, quản lý dữ liệu, render UI, xác thực, export CSV.

## Cách chạy

1. Mở `index.html` trực tiếp trong trình duyệt.
2. Nếu muốn chạy bằng local server, dùng lệnh:

```powershell
python -m http.server 8000
```

3. Truy cập `http://localhost:8000`.

> Lưu ý: dự án dùng CDN cho Firebase và có thể cần kết nối Internet để hoạt động đầy đủ.

## Hướng phát triển tiếp

- Tách phần xác thực và phân quyền ra backend an toàn hơn.
- Chuyển cấu hình Firebase sang biến môi trường hoặc backend.
- Thêm kiểm thử tự động cho logic JavaScript.
- Xây dựng hệ thống API/Firestore đầy đủ thay vì chỉ dùng localStorage.
- Cải thiện responsive và giao diện mobile.

## Ghi chú kỹ thuật

- Hiện tại phân quyền và auth được xử lý ở client.
- Dữ liệu chính được lưu tạm vào `localStorage` và đồng bộ mềm sang Firebase.
- Không có test tự động trong repo hiện tại.
