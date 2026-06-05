# 02. Architecture

## 1. Kiến trúc tổng quan

Dự án tách thành 2 app độc lập:

```txt
youniverse/
├── backend/
└── frontend/
```

## 2. Backend

Backend dùng:

- Node.js
- Express.js hoặc NestJS
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT Auth
- Zod hoặc class-validator để validate
- Nodemailer hoặc service email provider
- Payment provider adapters

Khuyến nghị dùng Express.js để dễ triển khai và phù hợp yêu cầu AI code nhanh.

## 3. Frontend

Frontend dùng:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod
- Zustand hoặc Redux Toolkit cho cart/auth state
- TanStack Query hoặc fetch wrapper cho API

## 4. Luồng dữ liệu

```txt
User Browser
   ↓
Next.js Frontend
   ↓ REST API
Node.js Backend
   ↓
Prisma ORM
   ↓
PostgreSQL
```

## 5. Auth flow

```txt
Frontend form login/register
   ↓
Backend validate
   ↓
Prisma user lookup/create
   ↓
Password hash compare/create
   ↓
JWT access token
   ↓
Frontend lưu auth state
```

## 6. Cart flow

Có 2 trạng thái giỏ hàng:

### Guest cart

- Lưu trong localStorage
- Cho phép thêm/xóa/sửa số lượng
- Khi checkout cần nhập thông tin khách

### User cart

- Lưu trong database
- Khi user login, merge guest cart vào database cart

## 7. Checkout flow

```txt
Cart
  ↓
Validate stock + coupon
  ↓
Create order PENDING_PAYMENT
  ↓
Create payment transaction
  ↓
Redirect to payment provider
  ↓
Webhook/callback
  ↓
Update order/payment
  ↓
Send confirmation email
```

## 8. Admin flow

```txt
Admin login
  ↓
Verify role ADMIN
  ↓
Access /admin/*
  ↓
Call admin API
  ↓
CRUD data
```

## 9. Payment adapter design

Không hardcode một cổng thanh toán vào toàn hệ thống. Tạo interface:

```ts
interface PaymentProvider {
  createPayment(input: CreatePaymentInput): Promise<CreatePaymentResult>;
  verifyCallback(payload: unknown): Promise<VerifyPaymentResult>;
  refund?(input: RefundInput): Promise<RefundResult>;
}
```

Implement:

- `codProvider`
- `vnpayProvider`
- `momoProvider`
- `stripeProvider`

## 10. Email architecture

Tạo service:

```txt
email.service.ts
templates/
  order-confirmation.ts
  payment-success.ts
  order-status-updated.ts
```

Không gọi trực tiếp nodemailer trong controller. Controller gọi service.

## 11. Environment

Backend và frontend có file env riêng:

```txt
backend/.env
frontend/.env.local
```

Frontend chỉ chứa biến public:

```txt
NEXT_PUBLIC_API_URL
NEXT_PUBLIC_SITE_URL
```

Backend chứa secret:

```txt
DATABASE_URL
JWT_SECRET
PAYMENT_SECRET
EMAIL_SMTP_PASSWORD
```

## 12. Quy ước API

Base URL:

```txt
/api/v1
```

Response chuẩn:

```json
{
  "success": true,
  "message": "OK",
  "data": {}
}
```

Error chuẩn:

```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    {
      "field": "email",
      "message": "Email is required"
    }
  ]
}
```
