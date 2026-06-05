# 11. Implementation Roadmap

## Phase 1 — Setup

- Create root project
- Setup backend TypeScript Express
- Setup frontend Next.js
- Setup Tailwind
- Setup Prisma
- Setup PostgreSQL connection
- Setup env examples

Output:

- backend runs on port 4000
- frontend runs on port 3000
- health check API works

## Phase 2 — Database

- Add Prisma schema
- Run migration
- Add seed script
- Seed admin/category/products/coupons

Output:

- Database has initial products:
  - Charm Astra
  - Charm Sirius
  - Charm Polaris

## Phase 3 — Auth

- Register
- Login
- Me
- Auth middleware
- Role middleware
- Frontend login/register
- Auth state

Output:

- Customer can login
- Admin can login
- Admin route protected

## Phase 4 — Public UI

- Header
- Footer
- Home
- Products
- Product detail
- About

Output:

- Landing pages match client style
- Responsive
- Motion effects

## Phase 5 — Product APIs

- Product list
- Product detail
- Category
- Admin product CRUD

Output:

- Public products come from database
- Admin can manage products

## Phase 6 — Cart

- Guest cart
- User cart
- Add/update/remove
- Coupon apply
- Cart page

Output:

- Cart works before and after login

## Phase 7 — Checkout

- Checkout page
- Create order
- COD
- Order success
- Customer order history

Output:

- User can place COD order
- Inventory updates
- Email/log created

## Phase 8 — Online Payment

- Payment adapter
- Mock provider
- Provider callback
- Idempotency
- Payment result page

Output:

- Online flow testable without real credentials

## Phase 9 — Admin

- Dashboard
- Orders
- Products
- Inventory
- Coupons
- Users

Output:

- Admin can operate store

## Phase 10 — Polish

- Loading states
- Error states
- SEO metadata
- Responsive fixes
- Security review
- Test cases

Output:

- Ready for client review
