# 08. Test Cases

## 1. Auth

### Register success

Input valid user.

Expected:

- User created
- Password hashed
- Role CUSTOMER
- Token returned

### Register duplicate email

Expected:

- 409 conflict
- Message email already exists

### Login success

Expected:

- Token returned
- User info returned

### Login wrong password

Expected:

- 401 unauthorized

### Customer access admin

Expected:

- 403 forbidden

## 2. Product

### View products

Expected:

- Active products only for public
- Pagination works

### View product detail

Expected:

- Product by slug returned
- Includes images, inventory, category

### Product not found

Expected:

- 404

### Admin create product

Expected:

- Product created
- Inventory created

### Admin archive product

Expected:

- Product status ARCHIVED
- Public cannot see it

## 3. Cart

### Add product to cart

Expected:

- Item added
- Quantity correct
- Total calculated

### Add out-of-stock product

Expected:

- Error stock not enough

### Update quantity over stock

Expected:

- Error

### Remove item

Expected:

- Item removed
- Cart total updated

### Apply valid coupon

Expected:

- Discount calculated

### Apply invalid coupon

Expected:

- Error

## 4. Checkout

### Checkout COD success

Expected:

- Order created
- Payment COD PENDING
- Order CONFIRMED
- Inventory deducted
- Email sent/logged

### Checkout online creates payment URL

Expected:

- Order PENDING_PAYMENT
- Payment PENDING
- paymentUrl returned

### Checkout with expired coupon

Expected:

- Error coupon expired

### Checkout empty cart

Expected:

- Error cart empty

## 5. Payment

### Payment success callback

Expected:

- Verify signature
- Payment PAID
- Order PAID/CONFIRMED
- Inventory deducted once
- Email sent once

### Duplicate payment callback

Expected:

- No duplicate inventory deduction
- No duplicate email

### Payment failed callback

Expected:

- Payment FAILED
- Order remains PENDING_PAYMENT or CANCELLED

## 6. Orders

### Customer views own orders

Expected:

- Only own orders returned

### Customer cannot view other order

Expected:

- 403/404

### Admin update order status

Expected:

- Status changed
- Email status update sent optional

### Cancel order restores stock

Expected:

- If stock was deducted, restore inventory

## 7. Inventory

### Low stock alert

Expected:

- Product with quantity <= threshold appears in admin low stock

### Admin adjusts stock

Expected:

- Quantity changed
- InventoryLog created

## 8. Coupons

### Create percentage coupon

Expected:

- Coupon created
- Code uppercase

### Percentage max discount

Expected:

- Discount not exceed maxDiscountAmount

### Usage limit

Expected:

- Coupon invalid after usage limit

## 9. Email

### Order confirmation email

Expected:

- Contains order code
- Contains products
- Contains total
- EmailLog SENT

### SMTP failure

Expected:

- Checkout still success
- EmailLog FAILED
