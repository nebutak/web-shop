# 07. Security and Validation

## 1. Input validation

Use Zod schemas for:

- Register
- Login
- Product create/update
- Cart item
- Checkout
- Coupon
- Inventory adjustment
- Order status update

## 2. Auth security

- Hash password
- Rate limit login/register
- Do not reveal whether email exists in forgot password
- JWT secret must be strong
- Admin routes protected by role

## 3. Payment security

- Verify payment callback signature.
- Amount from provider must match order total.
- Provider transaction ID should be stored.
- Callback must be idempotent.
- Never mark payment paid from frontend only.

## 4. Coupon security

- Backend calculates discount.
- Frontend only displays result.
- Validate usage limit in transaction.
- Avoid race condition by updating coupon usage inside transaction.

## 5. Inventory security

- Backend checks stock.
- Frontend stock display is not trusted.
- Admin stock adjustment requires admin role.
- Log every stock adjustment.

## 6. File upload security

If admin uploads images:

- Limit file type: jpg, jpeg, png, webp, svg carefully
- Limit size
- Store outside code or use cloud storage
- Sanitize filename

If not implementing upload initially:

- Use URL input or local placeholder images.

## 7. CORS

Allow only frontend domain:

```txt
http://localhost:3000
production frontend URL
```

## 8. Error response

Do not expose stack trace in production.

## 9. Environment

Secrets only in backend env:

- JWT_SECRET
- DATABASE_URL
- SMTP password
- Payment secret

## 10. PII

Footer contains names and phone numbers. Confirm with client before publishing publicly.
