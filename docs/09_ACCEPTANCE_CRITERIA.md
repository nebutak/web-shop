# 09. Acceptance Criteria

## 1. General

Project is accepted when:

- Frontend and backend run separately.
- PostgreSQL database works with Prisma.
- User can browse products.
- User can register/login.
- User can add products to cart.
- User can checkout.
- User can pay online or select COD.
- User receives order confirmation email/log.
- Admin can manage products/orders/inventory/coupons.
- UI follows YOUniverse brand style.

## 2. Landing pages

### Home

Must have:

- Header
- Banner placeholder
- Slogan marquee
- Product line carousel
- How to Build section
- Footer

### Products

Must have:

- Banner placeholder
- OUR PRODUCTS headline
- 3 product line cards
- Product grid
- Slogan marquee
- Footer

### About

Must have:

- Our Story
- Our Mission
- Our Vision
- 3 core values
- CTA to products
- Footer

## 3. Auth

- Register works.
- Login works.
- Logout works.
- Admin route protected.
- Customer route protected.

## 4. Product detail

Must include:

- Image gallery
- Product name
- Badge
- Description
- Price
- Stock
- Quantity
- Add to cart
- Buy now
- Related products

## 5. Cart

Must include:

- Add item
- Update quantity
- Remove item
- Apply coupon
- Display subtotal/discount/total
- Validate stock

## 6. Checkout

Must include:

- Customer info form
- Shipping address form
- Payment method
- Review order
- Create order
- Redirect payment if online
- Success page

## 7. Payment

At minimum:

- COD works fully.
- Online payment adapter structure exists.
- Payment callback endpoint exists.
- Payment statuses handled.

If real provider credentials are not available, implement mock payment provider for development.

## 8. Orders

Customer:

- View own orders
- View order detail

Admin:

- View all orders
- Update order status
- Search/filter orders

## 9. Inventory

- Product stock displayed.
- Admin can adjust stock.
- Stock decreases after successful order.
- Low stock visible.

## 10. Coupon

- Admin can create/edit/disable coupon.
- Customer can apply coupon.
- Discount calculated correctly.

## 11. Email

- Email service exists.
- Order confirmation template exists.
- EmailLog saved.
- In development, console log fallback works.

## 12. Responsive

Must work on:

- Mobile
- Tablet
- Desktop

## 13. Code quality

- TypeScript no implicit any for core logic.
- Backend controllers/services separated.
- Prisma schema migrates successfully.
- API errors consistent.
- No hardcoded secrets.
