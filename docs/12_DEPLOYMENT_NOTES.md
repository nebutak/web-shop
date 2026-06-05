# 12. Deployment Notes

## 1. Development

Backend:

```bash
cd backend
npm install
npm run dev
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

## 2. Database

Local PostgreSQL database:

```txt
youniverse_db
```

Run:

```bash
npx prisma migrate dev
npx prisma db seed
```

## 3. Production checklist

- Set production DATABASE_URL
- Set strong JWT_SECRET
- Set real FRONTEND_URL
- Set real BACKEND_URL
- Configure SMTP
- Configure payment provider credentials
- Run Prisma migration
- Seed only required data
- Change admin password
- Upload real logo/banner/product images
- Confirm public contact information with client

## 4. Frontend env

```env
NEXT_PUBLIC_API_URL="https://api.example.com/api/v1"
NEXT_PUBLIC_SITE_URL="https://example.com"
```

## 5. Backend env

Do not expose:

- DATABASE_URL
- JWT_SECRET
- Payment secrets
- SMTP password

## 6. Image assets

Placeholders:

```txt
frontend/public/images/placeholders/
```

Real assets when provided:

```txt
frontend/public/images/brand/
frontend/public/images/products/
frontend/public/images/banners/
```

## 7. Domains

Suggested:

```txt
www.youniverse.vn
api.youniverse.vn
```

## 8. Payment test mode

Before production:

- Test success payment
- Test failed payment
- Test callback duplicate
- Test wrong amount
- Test invalid signature

## 9. Email test

Before production:

- Send order confirmation
- Send payment success
- Send order status update
- Check mobile rendering
