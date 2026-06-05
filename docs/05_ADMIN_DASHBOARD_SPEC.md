# 05. Admin Dashboard Spec

## 1. Admin access

Only users with role `ADMIN` can access `/admin`.

If not logged in:

```txt
Redirect /login
```

If logged in but not admin:

```txt
Show 403 or redirect /
```

## 2. Dashboard page

Route:

```txt
/admin
```

Cards:

1. Total revenue
2. Total orders
3. Pending orders
4. Products
5. Low stock products
6. New customers

Charts optional:

- Revenue by day/month
- Orders by status
- Product line sales

Recent orders table:

- Order code
- Customer
- Total
- Payment status
- Order status
- Created at
- Action view

## 3. Products admin

Route:

```txt
/admin/products
```

Features:

- Search
- Filter by product line
- Filter by status
- Create product
- Edit product
- Archive product
- Update stock shortcut

Table columns:

- Image
- Name
- Product line
- Price
- Stock
- Status
- Updated at
- Actions

## 4. Product form

Fields:

- Name
- Slug
- Product line
- Category
- Badge
- Short description
- Description
- Price
- Sale price
- SKU
- Stock quantity
- Low stock threshold
- Images
- Status
- Featured
- Allow customize
- SEO title
- SEO description

Validation:

- Name required
- Slug unique
- Product line required
- Price positive
- Stock >= 0

## 5. Orders admin

Route:

```txt
/admin/orders
```

Features:

- Search order code/email/phone
- Filter order status
- Filter payment status
- Filter date range
- View detail
- Update status

Table columns:

- Order code
- Customer
- Phone
- Total
- Payment
- Status
- Created at
- Actions

## 6. Order detail admin

Route:

```txt
/admin/orders/[id]
```

Sections:

- Order summary
- Customer info
- Shipping address
- Product items
- Payment transactions
- Timeline/status history optional
- Admin note
- Status update form

Status update options:

- CONFIRMED
- PROCESSING
- SHIPPING
- COMPLETED
- CANCELLED
- REFUNDED

Rules:

- Cannot set COMPLETED if CANCELLED
- Cannot cancel completed order
- If cancel after stock deducted, restore stock

## 7. Inventory admin

Route:

```txt
/admin/inventory
```

Features:

- View stock by product
- Low stock alert
- Adjust stock
- Inventory logs

Adjust stock form:

- Product
- Type:
  - IMPORT
  - EXPORT
  - ADJUSTMENT
- Quantity
- Note

## 8. Coupons admin

Route:

```txt
/admin/coupons
```

Fields:

- Code
- Name
- Type
- Value
- Min order amount
- Max discount amount
- Usage limit
- Usage per user
- Start date
- End date
- Active

Rules:

- Code uppercase
- Percentage value 1-100
- Fixed amount positive
- End date after start date

## 9. Users admin

Route:

```txt
/admin/users
```

Features:

- List customers
- Search name/email/phone
- View orders
- Disable user optional

## 10. Admin UI style

Admin không cần blink nhiều. Ưu tiên:

- Sạch
- Rõ
- Tốc độ
- Table dễ đọc
- Button trạng thái rõ màu
