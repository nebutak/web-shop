# Frontend 02. UI Style Guide

## 1. Brand mood

Website cần mang cảm giác:

- Gen Z
- Vũ trụ
- Cá nhân hóa
- Blink blink
- Creative
- Bold nhưng vẫn sạch
- Trắng đen làm nền, màu nhấn xanh/vàng/đỏ

## 2. Colors

### Base

```txt
background: #FFFFFF
foreground: #111111
muted: #F5F5F5
border: #E7E7E7
```

### Brand accents

```txt
blue: #2563EB
yellow: #FACC15
red: #EF4444
orange badge: #F97316
black: #000000
white: #FFFFFF
```

### Usage

- Header/menu: chữ đen, hover accent
- Badge: orange
- CTA chính: đen nền trắng hoặc đen nền vàng tùy section
- Footer: nền đen, chữ trắng
- Admin: dùng style sạch, dễ đọc

## 3. Typography

### Heading

Font phụ đề xuất: YOUTH.

Lưu ý:

- YOUTH dễ lỗi font tiếng Việt có dấu.
- Dùng YOUTH cho heading tiếng Anh ngắn:
  - OUR PRODUCTS
  - HOW TO BUILD YOUR YOUNIVERSE
  - ASTRA
  - SIRIUS
  - POLARIS
- Với tiếng Việt có dấu, dùng Montserrat hoặc font sans fallback.

### Body

Font chính: Montserrat.

Dùng cho:

- Paragraph
- Button
- Form
- Admin table
- Product description

## 4. Logo

Logo chưa có. Cần tạo placeholder component:

```txt
YOUniverse
```

Khi có file logo thật, đặt tại:

```txt
frontend/public/images/brand/logo.svg
```

## 5. Banner

Banner Home và Products khách hàng sẽ gửi sau.

Placeholder:

```txt
frontend/public/images/placeholders/home-banner.jpg
frontend/public/images/placeholders/products-banner.jpg
```

## 6. Elements vũ trụ

Có thể tạo CSS/SVG nhỏ cho:

- Sparkle
- Star
- Orbit line
- Planet shape
- Glow dots
- Floating geometric shapes

Không nên dùng quá nhiều asset ngoài.

## 7. Header

Desktop layout:

```txt
Left menu        Center logo        Right icons
Home             YOUniverse         Account / Cart
Our UNIverse
About us
```

Mobile layout:

```txt
Hamburger        Logo        Cart
```

Hover menu:

- Home hover xanh
- Our UNIverse hover vàng
- About us hover đỏ
- Hiệu ứng nổi lên nhẹ:
  - translateY(-2px)
  - scale(1.04)

## 8. Home sections

Thứ tự:

1. Header
2. Hero banner
3. Slogan marquee
4. Product line carousel
5. How to Build Your YOUniverse
6. Footer

## 9. Product cards

Card style:

- Nền trắng
- Border mảnh
- Bo góc 24px
- Ảnh lớn
- Badge nhỏ màu cam
- Heading đậm
- Description 2 dòng
- CTA Coming soon hoặc Add to cart tùy trạng thái
- Hover:
  - card nổi lên
  - ảnh scale nhẹ
  - sparkle xuất hiện

## 10. Product detail

Layout desktop:

```txt
Left: image gallery
Right: product info, price, stock, quantity, add to cart
Below: tabs/sections description, shipping, related products
```

Mobile:

```txt
Gallery
Product info
CTA sticky bottom optional
Description
Related products
```

## 11. How to Build Your YOUniverse

Đề xuất layout cho phần khách hàng chưa nghĩ ra:

### Option chọn triển khai

Dạng 3 bước orbit timeline.

```txt
[1 Set Your Vibe]  →  [2 Mix & Match]  →  [3 Tell Your Story]
```

Chi tiết:

- Mỗi bước là một card tròn/bo góc như hành tinh
- Có đường orbit nối giữa 3 bước
- Hover vào card thì sparkle sáng
- Scroll vào section thì từng card hiện lần lượt
- Mobile xếp dọc

Nội dung:

1. Set Your Vibe.
   - Chọn năng lượng, cá tính, mood của riêng bạn.
2. Mix & match Astra, Sirius, Polaris.
   - Kết hợp các dòng charm để tạo ra tổ hợp đúng với câu chuyện của bạn.
3. Tell your story.
   - Mang theo vũ trụ nhỏ của bạn và để nó kể thay điều bạn muốn nói.

## 12. About layout

Vì nhiều chữ và ít hình ảnh, dùng layout editorial:

- Hero title lớn
- Story section dạng 2 cột:
  - Text
  - Abstract planet illustration / sparkle card
- Mission/Vision dạng stacked cards
- Values dạng 3 cột Y/O/U
- CTA glow cuối trang

## 13. Footer

Footer nền đen, chữ trắng.

Desktop chia 4 cột:

1. Logo + slogan
2. Address + social links
3. Main contact nhóm 1
4. Main contact nhóm 2

Mobile:

- Xếp dọc
- Contact thành accordion hoặc grid 1 cột

## 14. Loading states

- Product list: skeleton cards
- Product detail: skeleton gallery + info
- Admin tables: skeleton rows
- Checkout: disabled button + spinner

## 15. Error states

- Product not found
- Cart empty
- Checkout failed
- Payment failed
- Admin no permission
