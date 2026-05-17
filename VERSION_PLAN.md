# Phiên bản v1.1

## Mục tiêu

- Hoàn thiện giao diện và trải nghiệm người dùng.
- Cải thiện quy trình quản lý admin và yêu cầu `xin admin`.
- Kiểm tra, rà soát kỹ thuật toàn bộ tính năng hiện tại.
- Đẩy code lên remote để bảo toàn phiên bản.

## Công việc chính

1. Rà soát toàn bộ tính năng
   - Kiểm tra search/filter trên trang Thị trường.
   - Đảm bảo cột `Vị trí` và bộ lọc hoạt động đúng.
   - Kiểm tra chế độ `Admin` và `Super Admin`.
   - Kiểm tra `Đổi mật khẩu` và xác thực.

2. Cải thiện admin workflow
   - Cho phép duyệt/từ chối yêu cầu `xin admin`.
   - Hiển thị rõ trạng thái `Xin Admin` trong danh sách thành viên.
   - Đảm bảo quyền admin chỉ dành cho người được duyệt.

3. Cập nhật tài liệu
   - Ghi lại tính năng mới trong `README.md`.
   - Tạo phiên bản phát hành mới.

4. Đóng gói và đẩy code
   - Tạo branch `release/v1.1`.
   - Tag `v1.1.0` cho bản phát hành.
   - Push branch và tag lên remote `origin`.

## Kiểm tra

- [ ] Login/Registration hoạt động.
- [ ] Search và bộ lọc hoạt động chính xác.
- [ ] Modal đổi mật khẩu hoạt động với xác thực hiện tại.
- [ ] Yêu cầu admin được quản lý đúng.
- [ ] Phiên bản được ghi lại bằng tag.
