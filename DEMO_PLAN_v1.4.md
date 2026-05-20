# Demo Plan v1.4

## Tổng quan
Phiên bản 1.4 bổ sung đầy đủ hệ thống game OSM-style: đấu giá, hợp đồng, dashboard Chủ tịch, cúp loại trực tiếp, thành tựu và Hall of Fame.

---

## Tính năng mới trong v1.4

### 1. Đấu giá cầu thủ (Auction)
- Chủ tịch / Admin chọn **Đấu giá** khi rao bán cầu thủ từ trang Thị trường.
- Đặt giá khởi điểm và thời hạn (số ngày).
- Các Chủ tịch CLB khác đặt giá thầu trong trang Chuyển nhượng (tối thiểu = cao nhất + 25▪).
- Bảng giá thầu hiển thị realtime, 🥇 đánh dấu người dẫn đầu.
- Admin bấm **🏆 Kết thúc đấu giá** → cầu thủ chuyển về CLB thắng, quỹ cập nhật.

### 2. Hệ thống hợp đồng
- Mỗi cầu thủ có `HĐ: XS` (X = số mùa còn lại, mặc định 3).
- Badge hiển thị ngay tên cầu thủ: `HĐ3S`, `⚠️1S`, `Tự do`.
- Admin chỉnh qua modal **Sửa** → trường "Hợp đồng (mùa)".
- Chủ tịch / Admin có thể **Gia hạn hợp đồng** (qua hàm `renewContract()`).
- Admin bấm **⏳ Kết thúc mùa giải** (trang Admin) → tất cả hợp đồng -1 mùa.

### 3. Dashboard Chủ tịch CLB
- Hiển thị tự động khi Chủ tịch vào trang Thị trường.
- Widget gồm: Quỹ CLB, Vị trí BXH, Số cầu thủ, Cầu thủ sắp hết HĐ, Trận tiếp theo, Số phiên đấu giá đang dự.

### 4. Cúp loại trực tiếp
- Khi tạo giải, chọn **Loại giải**: `League` (vô địch) hoặc `Cúp` (loại trực tiếp).
- Giải Cúp: các trận được label "Bán kết", "Chung kết" theo thứ tự thời gian.
- Trang Giải đấu hiển thị **nhánh đấu** riêng khi đang ở Cúp.
- Vô địch Cúp nhận thưởng và ghi vào Hall of Fame.

### 5. Hall of Fame
- Ghi lại kết quả khi kết thúc bất kỳ giải nào (League hoặc Cúp).
- Hiển thị ở cuối trang Giải đấu với huy chương 🥇🥈🥉.
- Lưu tên giải, mùa, CLB thắng, giải thưởng, ngày.

### 6. Thành tựu (Achievements)
| Icon | Tên | Điều kiện |
|------|-----|-----------|
| 🤝 | Thương vụ đầu tiên | Mua thành công 1 cầu thủ |
| 🔨 | Đấu giá thắng lợi | Thắng 1 phiên đấu giá |
| 🏆 | Nhà vô địch | Vô địch giải League |
| 🥇 | Nhà vô địch Cúp | Vô địch giải Cúp |
| 💰 | Câu lạc bộ giàu | Quỹ CLB ≥ 2000▪ |
| ⚽ | Đội hình đầy đủ | Có 11+ cầu thủ |
| 🔄 | Ông trùm mượn mướn | Liên quan đến giao dịch mượn |
| 📋 | Quản lý hợp đồng | Gia hạn hợp đồng 1 cầu thủ |

- Nút **🏅** trên header mở popup xem tất cả thành tựu.
- Toast thông báo ngay khi đạt thành tựu mới.

---

## Demo flow v1.4

1. Đăng nhập **Super Admin** → tạo giải **Cúp** với loại trực tiếp.
2. Phong 3 Guest thành Chủ tịch (mỗi CLB 1 người).
3. **Kết thúc mùa giải** trong Admin → kiểm tra HĐ badge trên bảng.
4. Một Chủ tịch vào Thị trường → **Rao bán → chọn Đấu giá** cho 1 cầu thủ.
5. Chủ tịch khác vào Chuyển nhượng → thấy phiên đấu giá → **Đặt giá**.
6. Admin **Kết thúc đấu giá** → kiểm tra quỹ + toast thành tựu.
7. Vào Giải đấu → chọn giải Cúp → thêm trận Bán kết + Chung kết → nhập kết quả.
8. **Trao cup** → kiểm tra Hall of Fame.
9. Dashboard Chủ tịch: kiểm tra widget hiển thị đúng quỹ, BXH, cầu thủ.

---

## Thay đổi kỹ thuật
- Thêm state: `AUCTIONS`, `HALL_OF_FAME` (localStorage + Firebase).
- Thêm field player: `contractSeasons` (default 3).
- Thêm field tournament: `type` (`league` | `cup`).
- Thêm field user: `achievements` (array of achievement IDs).
- Cache-bust: `?v=14` cho JS/CSS.
