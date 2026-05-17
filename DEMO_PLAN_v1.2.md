# Demo Plan v1.2

## Mục tiêu
- Triển khai hệ thống Chủ tịch CLB (president) với quyền mua/bán cầu thủ.
- Hoàn thiện phần hiển thị và quản lý giải đấu.
- Bổ sung hệ thống quỹ CLB và tiền thưởng giải.
- Thực hiện giao dịch mua/bán theo luồng đề xuất và phê duyệt.

## Tính năng chính

### 1. Chủ tịch CLB
- Super Admin có thể phong người dùng `Guest` thành `President`.
- Khi lên Chủ tịch, cần chọn một CLB cụ thể (`FC Mobile`, `FC Bựa Dâm`, `FC Sĩ Gái`).
- Thông tin CLB của Chủ tịch hiển thị trong bảng quản lý tài khoản.

### 2. Giao dịch mua/bán cầu thủ
- Chủ tịch CLB có thể:
  - Đăng rao bán cầu thủ thuộc CLB mình.
  - Gửi yêu cầu mua cầu thủ từ CLB khác.
- Yêu cầu mua/bán được lưu vào hệ thống và chờ duyệt.
- Admin/Superadmin có thể duyệt hoặc từ chối yêu cầu mua/bán.
- Khi duyệt mua bán, quỹ CLB mua bị trừ, quỹ CLB bán được cộng.

### 3. Hiển thị và chi tiết giải đấu
- Trang `Giải đấu` có:
  - Chọn giải hiện tại.
  - Lịch thi đấu.
  - Bảng xếp hạng tự động tính điểm.
  - Quỹ CLB hiện tại.
- Tạo giải mới có thêm trường `Giá tiền giải`.
- Khi kết thúc giải, đội vô địch tự động được cộng tiền thưởng vào quỹ.

### 4. Quỹ CLB và tiền thưởng
- Hệ thống `CLUB_FUNDS` lưu quỹ mỗi CLB.
- Quỹ CLB được cập nhật khi:
  - Duyệt chuyển nhượng cầu thủ.
  - Kết thúc giải thưởng.
  - Bán cầu thủ trực tiếp khi Admin/Superadmin sử dụng tính năng bán.

## Demo flow
1. Đăng nhập bằng `Super Admin`.
2. Chuyển sang trang `Admin` và phong một `Guest` thành `President`.
3. Tạo giải mới và thêm lịch thi đấu.
4. Chuyển sang trang `Giải đấu`, xem chi tiết giải, lịch, bảng xếp hạng, quỹ CLB.
5. Chuyển sang trang `Thị trường`:
   - Chủ tịch CLB đăng bán cầu thủ của CLb mình.
   - Một Chủ tịch khác gửi yêu cầu mua.
6. Duyệt yêu cầu mua/bán trên trang `Admin`.
7. Xem quỹ CLB thay đổi sau khi duyệt.

## Ghi chú
- Các đề xuất mua/bán vẫn nằm ở trạng thái `pending` cho đến khi Admin duyệt.
- Nếu CLB mua không đủ quỹ, yêu cầu không thể duyệt.
