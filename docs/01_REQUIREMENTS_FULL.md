# 01. Full Requirements

## 1. Phạm vi tổng thể

Website YOUniverse là website bán phụ kiện/charm cá nhân hóa. Người dùng có thể xem sản phẩm, xem chi tiết, thêm vào giỏ, checkout, thanh toán online và nhận email xác nhận đơn hàng. Admin có thể quản lý sản phẩm, đơn hàng, tồn kho, mã giảm giá và dashboard doanh thu.

## 2. Vai trò người dùng

| Role | Mô tả |
|---|---|
| Guest | Người chưa đăng nhập |
| Customer | Người dùng đã đăng ký |
| Admin | Người quản trị hệ thống |

## 3. Chức năng Guest

Guest có thể:

- Xem Home
- Xem About us
- Xem danh sách sản phẩm
- Xem chi tiết sản phẩm
- Tìm kiếm/lọc sản phẩm
- Thêm sản phẩm vào giỏ hàng local/session
- Xem giỏ hàng
- Đăng ký
- Đăng nhập
- Checkout với yêu cầu tạo tài khoản hoặc checkout guest tùy cấu hình

Khuyến nghị giai đoạn đầu:

- Cho phép guest thêm giỏ hàng
- Khi checkout thì yêu cầu nhập email, thông tin giao hàng
- Nếu đã có tài khoản thì gợi ý đăng nhập

## 4. Chức năng Customer

Customer có thể:

- Đăng nhập/đăng xuất
- Cập nhật thông tin cá nhân
- Quản lý địa chỉ giao hàng
- Thêm/xóa/cập nhật sản phẩm trong giỏ
- Áp mã giảm giá
- Checkout
- Thanh toán online
- Xem lịch sử đơn hàng
- Xem chi tiết đơn hàng
- Nhận email xác nhận đơn hàng
- Nhận email cập nhật trạng thái đơn hàng
- Hủy đơn nếu đơn chưa xử lý

## 5. Chức năng Admin

Admin có thể:

- Đăng nhập trang admin
- Xem dashboard tổng quan
- Quản lý sản phẩm
- Quản lý biến thể sản phẩm
- Quản lý ảnh sản phẩm
- Quản lý danh mục
- Quản lý tồn kho
- Quản lý đơn hàng
- Cập nhật trạng thái đơn hàng
- Xem thông tin thanh toán
- Quản lý mã giảm giá
- Quản lý người dùng
- Xem danh sách khách hàng
- Xuất dữ liệu đơn hàng nếu cần
- Nhận cảnh báo tồn kho thấp

## 6. Auth

### Đăng ký

Thông tin:

- Full name
- Email
- Password
- Confirm password
- Phone optional

Validate:

- Email đúng định dạng
- Password tối thiểu 8 ký tự
- Password cần có chữ và số
- Email không trùng

Sau khi đăng ký:

- Tạo user role `CUSTOMER`
- Có thể tự đăng nhập hoặc yêu cầu xác thực email tùy cấu hình
- Gửi email welcome nếu bật email

### Đăng nhập

Thông tin:

- Email
- Password

Sau đăng nhập:

- Backend trả access token
- Frontend lưu token an toàn
- Đồng bộ giỏ hàng local vào giỏ hàng database nếu có

### Đăng xuất

- Xóa token phía client
- Có thể gọi API revoke refresh token nếu triển khai refresh token

## 7. Product Catalog

Danh sách sản phẩm cần có:

- Tên sản phẩm
- Slug
- Badge
- Mô tả ngắn
- Giá
- Giá sale optional
- Ảnh đại diện
- Category
- Product line: Astra/Sirius/Polaris
- Trạng thái: active/inactive/draft
- Tồn kho tổng
- CTA

## 8. Product Detail

Trang chi tiết sản phẩm cần đầy đủ:

- Gallery ảnh
- Tên sản phẩm
- Badge
- Mô tả ngắn
- Mô tả dài
- Giá
- Biến thể nếu có
- Số lượng tồn kho
- Chọn số lượng
- Nút thêm giỏ hàng
- Nút mua ngay
- Chính sách giao hàng
- Chính sách đổi trả
- Gợi ý sản phẩm liên quan
- Nội dung cá nhân hóa nếu sản phẩm hỗ trợ custom

## 9. Cart

Giỏ hàng cần có:

- Danh sách sản phẩm
- Ảnh, tên, biến thể
- Giá
- Số lượng
- Tạm tính
- Xóa item
- Cập nhật số lượng
- Áp mã giảm giá
- Tổng giảm giá
- Tổng thanh toán
- CTA checkout

Logic:

- Không cho số lượng vượt quá tồn kho
- Nếu sản phẩm hết hàng thì báo lỗi
- Nếu sản phẩm bị inactive thì không cho checkout

## 10. Checkout

Checkout gồm các bước:

1. Thông tin khách hàng
2. Địa chỉ giao hàng
3. Phương thức vận chuyển
4. Mã giảm giá
5. Kiểm tra đơn hàng
6. Thanh toán
7. Trang kết quả

Thông tin bắt buộc:

- Full name
- Email
- Phone
- Address line
- Ward/District/Province hoặc địa chỉ text
- Note optional

## 11. Payment Online

Cần thiết kế theo dạng provider adapter để sau này có thể đổi cổng thanh toán.

Provider đề xuất:

- COD
- VNPay
- MoMo
- Stripe

Trạng thái payment:

- PENDING
- PAID
- FAILED
- CANCELLED
- REFUNDED

Luồng chung:

1. Customer tạo order
2. Backend kiểm tra tồn kho, coupon
3. Backend tạo payment transaction
4. Backend trả payment URL nếu online
5. Customer thanh toán trên cổng
6. Provider callback/webhook về backend
7. Backend verify chữ ký
8. Backend cập nhật payment/order
9. Backend gửi email xác nhận

## 12. Order Management

Trạng thái đơn hàng:

- PENDING_PAYMENT
- PAID
- CONFIRMED
- PROCESSING
- SHIPPING
- COMPLETED
- CANCELLED
- REFUNDED

Admin có thể:

- Xem danh sách đơn
- Lọc theo trạng thái
- Tìm theo mã đơn/email/số điện thoại
- Xem chi tiết đơn
- Cập nhật trạng thái
- Thêm ghi chú nội bộ
- Cập nhật tracking code nếu có
- Hủy đơn
- Hoàn tiền thủ công nếu cần

Customer có thể:

- Xem đơn của mình
- Xem trạng thái
- Hủy khi đơn chưa xử lý

## 13. Inventory

Mỗi sản phẩm/biến thể cần có:

- stock quantity
- low stock threshold
- reserved quantity
- sold quantity

Logic:

- Khi checkout tạo order pending: reserve hàng hoặc trừ hàng tùy chiến lược
- Khuyến nghị: giữ đơn giản bằng cách trừ tồn kho khi thanh toán thành công/COD confirmed
- Nếu payment failed/cancelled thì không trừ tồn kho
- Nếu order cancelled sau khi trừ thì hoàn tồn kho

## 14. Coupon

Coupon cần có:

- Code
- Type: percentage/fixed/free shipping
- Value
- Min order amount
- Max discount amount
- Start date
- End date
- Usage limit
- Usage per user
- Active/inactive
- Áp dụng cho all products/category/product line hoặc đơn giản all products

Validate:

- Code tồn tại
- Còn hạn
- Đang active
- Chưa vượt usage limit
- Đơn hàng đạt min amount
- User chưa vượt usage per user

## 15. Email

Cần gửi email:

- Đăng ký thành công/welcome optional
- Xác nhận đơn hàng
- Thanh toán thành công
- Thanh toán thất bại optional
- Cập nhật trạng thái đơn hàng
- Reset password optional

Email template nên có:

- Logo/brand
- Slogan
- Mã đơn
- Danh sách sản phẩm
- Tổng tiền
- Địa chỉ giao hàng
- Trạng thái thanh toán
- CTA xem đơn hàng

## 16. Responsive

Bắt buộc hỗ trợ:

- Mobile: 360px+
- Tablet
- Desktop
- Large desktop

Menu mobile:

- Logo ở giữa hoặc trái tùy breakpoint
- Hamburger menu
- Cart icon
- Account icon

## 17. Performance

- Tối ưu ảnh bằng Next Image
- Lazy load các section dưới fold
- Motion nhẹ
- Không lạm dụng animation
- Skeleton loading cho API data
- SEO metadata cho sản phẩm

## 18. SEO

Các trang cần có metadata:

- Home
- Products
- Product detail
- About

Product detail cần có Open Graph image.

## 19. Không làm trong giai đoạn đầu nếu chưa có yêu cầu

- Marketplace đa vendor
- Chat realtime
- Livestream
- App mobile native
- AI recommendation phức tạp
- Loyalty point nâng cao
