# Frontend 03. Routes and Screens

## 1. Public routes

### `/`

Home page.

Sections:

1. Hero banner
2. Running slogan
3. Product line introduction carousel
4. How to Build Your YOUniverse
5. Footer

CTA:

- Slogan click sang `/about`
- Product line card click sang `/products?line=ASTRA/SIRIUS/POLARIS`
- How to Build CTA click sang `/products`

### `/products`

Our UNIverse page.

Sections:

1. Banner
2. Headline: `OUR PRODUCTS`
3. Product line trigger/cards
4. Product grid
5. Running slogan
6. Footer

Filters:

- Search keyword
- Product line
- Category
- Availability
- Sort:
  - Newest
  - Price low-high
  - Price high-low

### `/products/[slug]`

Product detail.

Content:

- Gallery
- Breadcrumb
- Badge
- Product name
- Price
- Short description
- Long description
- Stock status
- Quantity selector
- Add to cart
- Buy now
- Personalization fields if enabled
- Shipping info
- Related products

### `/about`

About page.

Sections:

1. Hero
2. Our Story
3. Our Mission
4. Our Vision
5. Our Core Values
6. CTA
7. Footer

CTA text:

```txt
Vậy bạn đã sẵn sàng để tạo ra vũ trụ cho riêng mình chưa?
```

Click:

```txt
/products
```

## 2. Auth routes

### `/login`

Fields:

- Email
- Password

Actions:

- Login
- Link to register
- Forgot password optional

After login:

- Customer redirect `/account`
- Admin redirect `/admin`

### `/register`

Fields:

- Full name
- Email
- Phone optional
- Password
- Confirm password

After register:

- Login automatically or redirect login

## 3. Cart route

### `/cart`

Display:

- Cart items
- Quantity update
- Remove item
- Coupon input
- Cart summary
- Checkout button

Empty state:

```txt
Your universe is still empty.
```

CTA:

```txt
Explore charms
```

## 4. Checkout route

### `/checkout`

Steps:

1. Customer information
2. Shipping address
3. Shipping method
4. Payment method
5. Review order

Payment methods:

- COD
- VNPay
- MoMo
- Stripe

CTA:

- `Place order`
- Nếu online: redirect payment URL
- Nếu COD: order success

## 5. Order success

### `/order-success?orderCode=...`

Display:

- Success animation
- Order code
- Payment status
- Summary
- Link view order
- Link continue shopping

## 6. Account routes

### `/account`

Dashboard customer:

- Profile summary
- Recent orders
- Address
- Logout

### `/account/orders`

List:

- Order code
- Date
- Total
- Status
- Payment status

### `/account/orders/[id]`

Detail:

- Items
- Address
- Timeline
- Payment
- Cancel button if allowed

## 7. Admin routes

### `/admin`

Dashboard:

- Revenue
- Orders
- Products
- Low stock
- New customers
- Recent orders

### `/admin/products`

Features:

- List products
- Search
- Filter status
- Create
- Edit
- Delete/Deactivate

### `/admin/products/new`

Form:

- Name
- Slug auto generate
- Product line
- Category
- Short description
- Long description
- Price
- Sale price
- Stock
- Low stock threshold
- Images
- Status

### `/admin/products/[id]`

Edit product.

### `/admin/orders`

Features:

- List orders
- Filter status/payment
- Search order code/email/phone
- Export optional

### `/admin/orders/[id]`

Features:

- Order detail
- Customer info
- Shipping info
- Payment transaction
- Items
- Update status
- Admin note

### `/admin/inventory`

Features:

- Product stock list
- Low stock filter
- Adjust stock
- View inventory logs

### `/admin/coupons`

Features:

- List coupons
- Create coupon
- Edit coupon
- Disable coupon
- View usage

### `/admin/users`

Features:

- List users
- Search by name/email
- View user orders
- Change role only if super admin optional
