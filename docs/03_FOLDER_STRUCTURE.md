# 03. Folder Structure

## 1. Root

```txt
youniverse/
├── backend/
├── frontend/
├── docs/
├── README.md
└── .gitignore
```

## 2. Backend structure

```txt
backend/
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── config/
│   │   ├── env.ts
│   │   ├── cors.ts
│   │   └── prisma.ts
│   ├── common/
│   │   ├── middlewares/
│   │   ├── utils/
│   │   ├── errors/
│   │   └── types/
│   ├── modules/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── products/
│   │   ├── categories/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── orders/
│   │   ├── payments/
│   │   ├── coupons/
│   │   ├── inventory/
│   │   ├── admin/
│   │   └── emails/
│   └── jobs/
├── tests/
├── package.json
├── tsconfig.json
└── .env.example
```

## 3. Frontend structure

```txt
frontend/
├── public/
│   ├── images/
│   │   ├── placeholders/
│   │   ├── brand/
│   │   └── products/
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   │   ├── page.tsx
│   │   │   ├── about/
│   │   │   └── products/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── account/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── order-success/
│   │   ├── admin/
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── products/
│   │   ├── cart/
│   │   ├── checkout/
│   │   └── admin/
│   ├── lib/
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   ├── format.ts
│   │   └── constants.ts
│   ├── hooks/
│   ├── store/
│   ├── types/
│   └── styles/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── .env.local.example
```

## 4. Quy ước đặt tên

### File React component

```txt
PascalCase.tsx
```

Ví dụ:

```txt
ProductCard.tsx
CheckoutSummary.tsx
AdminOrderTable.tsx
```

### Hook

```txt
useCart.ts
useAuth.ts
useProducts.ts
```

### API service frontend

```txt
auth.api.ts
products.api.ts
orders.api.ts
```

### Backend module

```txt
auth.controller.ts
auth.service.ts
auth.routes.ts
auth.validation.ts
```

## 5. Route frontend bắt buộc

```txt
/                         Home
/products                 Product list
/products/[slug]          Product detail
/about                    About us
/login                    Login
/register                 Register
/cart                     Cart
/checkout                 Checkout
/order-success            Order success
/account                  Account dashboard
/account/orders           My orders
/account/orders/[id]      My order detail
/admin                    Admin dashboard
/admin/products           Admin products
/admin/products/new       Create product
/admin/products/[id]      Edit product
/admin/orders             Admin orders
/admin/orders/[id]        Admin order detail
/admin/inventory          Admin inventory
/admin/coupons            Admin coupons
/admin/users              Admin users
```

## 6. API routes bắt buộc

```txt
/api/v1/auth/*
/api/v1/products/*
/api/v1/categories/*
/api/v1/cart/*
/api/v1/checkout/*
/api/v1/orders/*
/api/v1/payments/*
/api/v1/coupons/*
/api/v1/admin/*
```
