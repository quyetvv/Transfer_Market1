# Transfer Market — Kế hoạch phát triển

## Phiên bản hiện tại: v1.3

---

## Lịch sử phiên bản

| Tag | Mô tả | Commit |
|-----|-------|--------|
| v1.0 | Demo ban đầu: login, danh sách cầu thủ, thưởng, admin cơ bản | `4c0f2de` |
| v1.1 | UI hoàn thiện, duyệt admin, dark mode, CI | `2277967` |
| v1.2 | Chủ tịch CLB, giải đấu, quỹ CLB, mua/bán cơ bản | `5593d4b` |
| v1.3 | OSM features: Transfer Window, rao bán → đề nghị → duyệt, cho mượn; sửa lỗi appCont/statsRow | `HEAD` |

---

## v1.3 — Tính năng OSM (hiện tại)

### Cơ chế chuyển nhượng (giống OSM)
1. **Mở/đóng cửa sổ chuyển nhượng** — Super Admin toggle. Khi đóng: mọi giao dịch bị khóa.
2. **Rao bán cầu thủ** — Chủ tịch CLB vào Thị trường → nút "Rao bán" → nhập giá sàn + thời hạn.
3. **Đề nghị mua** — Chủ tịch CLB khác vào Chuyển nhượng → thấy danh sách rao bán → nhập giá → "Đề nghị mua".
4. **Duyệt giao dịch** — Admin duyệt/từ chối từ trang Admin hoặc inline trên trang Chuyển nhượng.
5. **Quỹ tự động** — Khi duyệt: trừ quỹ CLB mua, cộng quỹ CLB bán, cầu thủ chuyển đội.
6. **Cho mượn** — Chủ tịch gửi yêu cầu mượn → Admin duyệt → cầu thủ tạm về CLB mượn.

### Roles
| Role | Quyền |
|------|-------|
| guest | Xem, gửi đề xuất thêm cầu thủ/thưởng |
| president | Rao bán cầu thủ CLB mình, đề nghị mua/mượn cầu thủ CLB khác |
| admin | Duyệt tất cả, thêm/xóa cầu thủ, quản lý người dùng |
| superadmin | Tất cả quyền admin + phong Chủ tịch, mở/đóng cửa sổ chuyển nhượng, điều chỉnh quỹ |

### Tài khoản mặc định
- **Super Admin**: username `vquyetthang`, password `hanhnguyen110312`
- Các tài khoản khác: đăng ký → xin lên Admin → Admin duyệt → phong Chủ tịch CLB

---

## v1.4 — Kế hoạch tiếp theo

- [ ] Thông báo real-time khi có đề nghị mua mới (Firebase listener)
- [ ] Lịch sử chuyển nhượng (log đầy đủ mua/bán/mượn)
- [ ] Giải đấu: bảng xếp hạng live, tự động tính điểm
- [ ] Responsive mobile tốt hơn
- [ ] Export PDF báo cáo mùa giải

---

## Cách rollback về phiên bản cũ

```powershell
# Xem danh sách tags
git tag

# Rollback local về tag bất kỳ
git checkout v1.2

# Hoặc tạo branch từ tag cũ để test
git checkout -b hotfix/v1.2-fix v1.2
```

---

## Cấu trúc dự án

```
transfer_market/
├── index.html          # Toàn bộ UI (các page: Market, Transfer, Tournament, Bonus, Admin)
├── assets/
│   ├── app.js          # Logic chính (~1900 dòng): data, render, auth, Firebase sync
│   ├── firebase.js     # Firebase config + API wrapper
│   └── styles.css      # CSS toàn bộ giao diện
├── PLAN.md             # File này — kế hoạch và lịch sử phiên bản
└── README.md           # Hướng dẫn cài đặt và chạy
```

## Ghi chú kỹ thuật

- Dữ liệu lưu `localStorage` + sync Firebase Realtime Database
- VER key = `"v9"` (tăng khi cần xóa cache dữ liệu cũ)
- `appCont` wrapper ẩn/hiện toàn bộ nội dung app khi đăng nhập/đăng xuất
- `SUGG` array: tất cả đề xuất chờ duyệt (type: player, bonus, purchase, loan)
- `CLUB_FUNDS` object: quỹ mỗi CLB (key = tên CLB)
- `LOANS` array: hợp đồng mượn đang hiệu lực
- `TRANSFER_WINDOW` object: `{ open: bool }`
