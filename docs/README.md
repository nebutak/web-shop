# YOUniverse / UNIverse — Bộ tài liệu phục vụ AI code

Ngày tạo: 2026-06-05

Bộ tài liệu này dùng để đưa cho AI code hoặc team dev triển khai website bán hàng theo mô tả của khách hàng trong file `WEBSITE(1).pdf`.

## Công nghệ bắt buộc

- Backend: Node.js, PostgreSQL, Prisma ORM
- Frontend: Next.js, React, TypeScript, Tailwind CSS, Framer Motion
- Kiến trúc thư mục dự án tách riêng:
  - `backend/`
  - `frontend/`

## Phạm vi chức năng đầy đủ

Website không chỉ là landing page. Tài liệu này đã mở rộng đầy đủ thành hệ thống bán hàng gồm:

- Đăng nhập / đăng ký
- Giỏ hàng
- Checkout
- Thanh toán online
- Quản lý đơn hàng
- Trang chi tiết sản phẩm đầy đủ
- Admin dashboard
- Quản lý tồn kho
- Mã giảm giá
- Email xác nhận đơn hàng

## Cách dùng bộ tài liệu với AI code

1. Đưa toàn bộ thư mục tài liệu này cho AI.
2. Bắt đầu bằng file:
   - `00_PROJECT_BRIEF.md`
   - `01_REQUIREMENTS_FULL.md`
   - `02_ARCHITECTURE.md`
3. Sau đó yêu cầu AI tạo project theo:
   - `frontend/01_FRONTEND_STRUCTURE.md`
   - `backend/01_BACKEND_STRUCTURE.md`
4. Khi tạo database, dùng:
   - `backend/02_PRISMA_SCHEMA.prisma`
   - `backend/03_DATABASE_RULES.md`
5. Khi tạo API, dùng:
   - `backend/04_API_SPEC.md`
6. Khi tạo UI, dùng:
   - `frontend/02_UI_STYLE_GUIDE.md`
   - `frontend/03_ROUTES_AND_SCREENS.md`
7. Khi test, dùng:
   - `08_TEST_CASES.md`
   - `09_ACCEPTANCE_CRITERIA.md`

## Lưu ý quan trọng

- File PDF gốc dùng cả tên `UNIverse` và `YOUniverse`. Trong quá trình code nên thống nhất brand hiển thị là `YOUniverse`, còn route/path/code có thể dùng `youniverse`.
- Logo, banner, ảnh sản phẩm khách hàng sẽ gửi sau. Khi chưa có ảnh thật, dùng placeholder nội bộ trong `frontend/public/images/placeholders/`.
- Không đưa font file vào repository nếu chưa có quyền sử dụng. Chỉ cấu hình sẵn vị trí chờ font.
