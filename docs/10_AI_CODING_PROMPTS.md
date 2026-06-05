# 10. AI Coding Prompts

Dùng các prompt này để yêu cầu AI code theo từng giai đoạn. Không nên yêu cầu AI code toàn bộ một lần nếu project lớn.

## Prompt 1 — Khởi tạo project

```txt
Bạn là senior full-stack developer. Hãy tạo project YOUniverse theo tài liệu đã cung cấp.

Yêu cầu:
- Root có 2 thư mục backend và frontend.
- Backend dùng Node.js + Express + TypeScript + PostgreSQL + Prisma.
- Frontend dùng Next.js App Router + React + TypeScript + Tailwind CSS + Framer Motion.
- Tạo cấu trúc thư mục đúng theo 03_FOLDER_STRUCTURE.md.
- Tạo file .env.example cho backend và frontend.
- Chưa cần code toàn bộ chức năng, chỉ setup project chạy được.
- Không bỏ qua TypeScript config.
```

## Prompt 2 — Database và Prisma

```txt
Dựa vào backend/02_PRISMA_SCHEMA.prisma và backend/03_DATABASE_RULES.md, hãy tạo Prisma schema cho backend.

Yêu cầu:
- Schema migrate được với PostgreSQL.
- Có enum đúng cú pháp Prisma.
- Có seed data theo backend/08_SEED_DATA.md.
- Tạo Prisma client singleton.
- Tạo script npm cho migrate, generate, seed.
```

## Prompt 3 — Auth backend

```txt
Hãy code module Auth cho backend.

Yêu cầu:
- Register
- Login
- Me
- JWT
- bcrypt hash password
- validate bằng Zod
- middleware auth
- middleware role
- response chuẩn theo backend/04_API_SPEC.md
- không trả passwordHash
```

## Prompt 4 — Product backend

```txt
Hãy code module Products và Categories.

Yêu cầu:
- Public API: list products, product detail by slug, featured products, categories.
- Admin API: CRUD product, archive product, update images basic.
- Khi tạo product phải tạo inventory.
- Public chỉ thấy ACTIVE product.
```

## Prompt 5 — Frontend layout và landing pages

```txt
Hãy code frontend layout và 3 landing page theo tài liệu.

Yêu cầu:
- Header logo ở giữa, menu bên trái, cart/account bên phải.
- Footer theo 04_CONTENT_COPY.md.
- Home có hero, slogan marquee, product line carousel, How to Build section.
- Products page có OUR PRODUCTS, 3 charm cards, product grid.
- About page có story, mission, vision, values, CTA.
- Dùng Tailwind CSS và Framer Motion.
- Responsive mobile-first.
```

## Prompt 6 — Cart

```txt
Hãy code cart frontend và backend.

Yêu cầu:
- Guest cart localStorage.
- User cart database.
- Add/update/remove item.
- Apply coupon.
- Validate stock.
- Cart page hiển thị subtotal, discount, total.
- Merge cart sau login.
```

## Prompt 7 — Checkout và Order

```txt
Hãy code checkout và order.

Yêu cầu:
- Checkout form customer/shipping/payment/review.
- Backend create order từ cart.
- Validate stock/coupon.
- Tạo order, order items, payment transaction trong transaction.
- COD chạy hoàn chỉnh.
- Customer xem lịch sử đơn hàng.
```

## Prompt 8 — Payment online

```txt
Hãy code payment module theo adapter pattern.

Yêu cầu:
- Có interface PaymentProvider.
- Có COD provider.
- Có mock online provider cho development.
- Có cấu trúc provider cho VNPay, MoMo, Stripe để sau này điền credential.
- Có callback/webhook endpoint.
- Idempotent callback.
- Verify amount trước khi mark paid.
```

## Prompt 9 — Email

```txt
Hãy code email service.

Yêu cầu:
- Order confirmation email template.
- Payment success email template.
- Order status update template.
- EmailLog.
- Nếu SMTP chưa cấu hình thì console log email ở development.
- Checkout không fail nếu gửi email lỗi.
```

## Prompt 10 — Admin dashboard

```txt
Hãy code admin dashboard.

Yêu cầu:
- Protected /admin.
- Sidebar.
- Dashboard stats.
- Product management.
- Order management.
- Inventory management.
- Coupon management.
- User list.
- UI sạch, table dễ đọc.
```

## Prompt 11 — Test và fix

```txt
Hãy kiểm tra toàn bộ project theo 08_TEST_CASES.md và 09_ACCEPTANCE_CRITERIA.md.

Yêu cầu:
- Liệt kê chức năng đã pass/chưa pass.
- Fix lỗi TypeScript.
- Fix Prisma migration.
- Fix API response không đồng nhất.
- Fix responsive UI.
```
