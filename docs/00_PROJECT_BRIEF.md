# 00. Project Brief — YOUniverse E-commerce Website

## 1. Mục tiêu dự án

Xây dựng website bán hàng cho thương hiệu phụ kiện cá nhân hóa YOUniverse. Giai đoạn đầu theo mô tả khách hàng gồm 3 landing page:

| Trang | Route đề xuất | Mục đích |
|---|---|---|
| Home | `/` | Giới thiệu thương hiệu, banner, slogan, product line |
| Our UNIverse | `/products` | Danh sách sản phẩm/charm |
| About us | `/about` | Câu chuyện thương hiệu, mission, vision, values |

Tuy nhiên, yêu cầu triển khai thực tế cần mở rộng thành website bán hàng đầy đủ với:

- Tài khoản khách hàng
- Giỏ hàng
- Checkout
- Thanh toán online
- Quản lý đơn hàng
- Trang chi tiết sản phẩm
- Admin dashboard
- Tồn kho
- Mã giảm giá
- Email xác nhận đơn hàng

## 2. Brand chính

Nên thống nhất hiển thị:

```txt
YOUniverse
```

Giải thích:

- PDF có xuất hiện cả `UNIverse` và `YOUniverse`.
- Nội dung thương hiệu, slogan, CTA đều thiên về `YOUniverse`.
- Route/code nên dùng chữ thường: `youniverse`.

## 3. Slogan

```txt
A galaxy to hold, a story to be told
```

Dùng ở:

- Dòng chữ chạy ở Home
- Dòng slogan chạy ở Products
- Footer
- Email template
- Metadata SEO

## 4. Tinh thần thiết kế

- Trắng, đen làm nền chính
- Điểm nhấn xanh, vàng, đỏ
- Theme vũ trụ, blink blink, ngôi sao, sparkle
- Trẻ trung, sáng tạo, cá nhân hóa, Gen Z
- Layout hiện đại, nhiều motion nhưng không làm rối
- Tối ưu responsive mobile-first

## 5. Product line

Có 3 dòng charm:

### Astra

```txt
Astra - Own your unique name, ignite your inner flame.
```

Mô tả sản phẩm:

```txt
A bold statement of identity, customized with your name, celestial symbols, and your unique elemental energy.
```

Badge:

```txt
Unique
```

### Sirius

```txt
Sirius - Pack the joy you seek, let your passion speak.
```

Mô tả sản phẩm:

```txt
Encapsulate the little things you love, from simple everyday passions and sweet pets to your daily rituals.
```

Badge:

```txt
Passion
```

### Polaris

```txt
Polaris - Trust the guiding quote, let your spirit float.
```

Mô tả sản phẩm:

```txt
Inspiring quotes that serve as a guiding compass for your soul.
```

Badge:

```txt
Inspiring
```

## 6. Chức năng bán hàng cần có

Hệ thống phải có các module chính:

1. Auth
2. Product catalog
3. Product detail
4. Cart
5. Checkout
6. Payment
7. Order management
8. Admin dashboard
9. Inventory
10. Coupon
11. Email notification

## 7. Định hướng triển khai

Không code theo kiểu landing page tĩnh. Cần xây dựng thành hệ thống thương mại điện tử có database, API, phân quyền và admin.

Frontend dùng Next.js có thể gọi backend Node.js API riêng. Backend không đặt trong Next.js API routes để đúng yêu cầu tách riêng `backend/` và `frontend/`.
