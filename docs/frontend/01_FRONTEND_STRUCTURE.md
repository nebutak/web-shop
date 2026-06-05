# Frontend 01. Frontend Structure

## 1. Tech stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod
- Zustand hoặc Redux Toolkit
- TanStack Query optional

## 2. App groups đề xuất

```txt
src/app/
├── (public)/
│   ├── page.tsx
│   ├── about/page.tsx
│   └── products/
│       ├── page.tsx
│       └── [slug]/page.tsx
├── (auth)/
│   ├── login/page.tsx
│   └── register/page.tsx
├── cart/page.tsx
├── checkout/page.tsx
├── order-success/page.tsx
├── account/
└── admin/
```

## 3. Layout public

Public layout gồm:

- Header
- Main content
- Footer

Header theo yêu cầu:

- Logo ở giữa
- Menu bên trái:
  - Home
  - Our UNIverse
  - About us
- Bên phải:
  - Search icon optional
  - Account icon
  - Cart icon với badge số lượng
- Hover menu đổi màu theo brand:
  - Home: xanh
  - Our UNIverse: vàng
  - About us: đỏ

## 4. Layout admin

Admin layout gồm:

- Sidebar
- Topbar
- Content
- Breadcrumb
- Logout

Sidebar:

- Dashboard
- Products
- Orders
- Inventory
- Coupons
- Users
- Settings optional

## 5. State management

### Auth state

Lưu:

- user
- token
- role
- isAuthenticated

### Cart state

Lưu:

- cart items
- subtotal
- discount
- total
- coupon
- loading state

Guest cart dùng localStorage.

User cart sync với backend.

## 6. API client

Tạo `src/lib/api.ts`:

- Base URL lấy từ `NEXT_PUBLIC_API_URL`
- Tự attach Authorization Bearer token
- Handle 401
- Chuẩn hóa error message

## 7. UI components chung

```txt
Button
Input
Textarea
Select
Modal
Drawer
Badge
Card
Container
SectionTitle
LoadingSpinner
EmptyState
ErrorState
QuantitySelector
PriceText
```

## 8. Motion rules

Dùng Framer Motion cho:

- Section reveal on scroll
- Header hover
- Product card hover
- Carousel chuyển động
- Slogan marquee
- CTA glow
- Admin card nhẹ

Không dùng animation quá nặng cho bảng admin.

## 9. Responsive breakpoints

Tailwind default:

- sm
- md
- lg
- xl
- 2xl

Mobile-first:

- Header đổi sang hamburger menu
- Product cards 1 cột mobile, 3 cột desktop
- Checkout 1 cột mobile, 2 cột desktop
- Admin table có horizontal scroll
