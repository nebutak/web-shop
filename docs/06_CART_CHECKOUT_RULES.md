# 06. Cart and Checkout Rules

## 1. Cart item price

Cart item price should be calculated from product price at current time.

When order is created, copy price into OrderItem.

## 2. Quantity rules

- Minimum quantity: 1
- Maximum quantity: available stock
- Cannot checkout item inactive/out of stock

## 3. Coupon calculation

Order amount fields:

```txt
subtotalAmount = sum(item price * quantity)
discountAmount = coupon result
shippingFee = shipping calculation
totalAmount = subtotalAmount - discountAmount + shippingFee
```

## 4. Coupon percentage

```txt
discount = subtotal * percentage / 100
if maxDiscountAmount exists:
  discount = min(discount, maxDiscountAmount)
```

## 5. Coupon fixed amount

```txt
discount = min(coupon.value, subtotal)
```

## 6. Free shipping

```txt
shippingFee = 0
discountAmount can stay 0 or store original shipping fee as discount depending UI
```

## 7. Shipping fee

Simple default:

```txt
shippingFee = 30000
free if subtotal >= 500000
```

Can be updated later.

## 8. Checkout validation

Before create order:

- Customer name required
- Email required
- Phone required
- Address required
- Cart not empty
- Product active
- Stock enough
- Coupon valid
- Total amount positive

## 9. Guest checkout

Guest checkout should create order with:

- userId null
- customerEmail
- customerPhone
- shippingAddress

If user logged in:

- userId set

## 10. Cart after order

After successful order creation:

- Mark cart CHECKED_OUT
- Or clear cart items
- For online payment pending, keep cart checked out to avoid duplicate order

## 11. Buy now

Product detail `Buy now` flow:

- Add item to cart
- Redirect `/checkout`
- Or create temporary checkout item

Recommended simple implementation:

```txt
Add to cart then redirect checkout.
```
