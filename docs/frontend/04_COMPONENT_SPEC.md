# Frontend 04. Component Spec

## 1. Layout components

### `Header`

Props:

```ts
type HeaderProps = {
  cartCount: number;
  user?: User | null;
}
```

Features:

- Logo center
- Menu left
- Account/cart right
- Mobile hamburger
- Active route style
- Hover brand colors

### `Footer`

Content:

- Logo YOUniverse
- Slogan
- Address
- Social links
- Contact list

### `Container`

Reusable max-width wrapper.

## 2. Home components

### `HeroBanner`

- Uses image placeholder until real banner provided
- Full width
- Responsive height
- Optional overlay text

### `SloganMarquee`

Text:

```txt
A galaxy to hold, a story to be told
```

Features:

- Runs left-to-right
- Pauses on hover
- Click redirects `/about`

### `ProductLineCarousel`

Cards:

- Astra
- Sirius
- Polaris

Features:

- Carousel 3 cards
- Hover reveals tagline
- Click filters product list

### `HowToBuildSection`

3 step orbit cards.

## 3. Product components

### `ProductCard`

Props:

```ts
type ProductCardProps = {
  product: Product;
}
```

Display:

- Image
- Badge
- Name
- Short description
- Price
- CTA

### `ProductGallery`

- Main image
- Thumbnails
- Supports placeholder

### `QuantitySelector`

- Minus/plus
- Min 1
- Max stock

### `ProductDetailInfo`

- Name
- Badge
- Price
- Description
- Stock
- CTA

## 4. Cart components

### `CartItemRow`

- Image
- Name
- Variant
- Quantity selector
- Price
- Remove

### `CartSummary`

- Subtotal
- Discount
- Shipping fee
- Total
- Checkout CTA

### `CouponInput`

- Code input
- Apply button
- Error/success state

## 5. Checkout components

### `CheckoutForm`

- Customer info
- Shipping address
- Payment method
- Review

### `PaymentMethodSelector`

Methods:

- COD
- VNPay
- MoMo
- Stripe

### `OrderReview`

Display final items and amount.

## 6. Admin components

### `AdminSidebar`

### `AdminStatCard`

### `AdminTable`

### `ProductForm`

### `OrderStatusBadge`

### `InventoryAdjustModal`

### `CouponForm`

## 7. Common UX rules

- Button loading state
- Form validation inline
- Toast success/error
- Confirm modal before destructive action
- Empty state for no data
- Breadcrumb on admin detail pages
