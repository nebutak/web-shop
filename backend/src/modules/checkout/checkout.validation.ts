import { PaymentProvider } from "@prisma/client";
import { z } from "zod";

const optionalText = z.string().trim().min(1).optional().nullable();

export const checkoutSchema = z.object({
  cartId: z.string().trim().min(1, "Cart is required"),
  customer: z.object({
    fullName: z.string().trim().min(1, "Full name is required"),
    email: z.string().trim().email("Invalid email").toLowerCase(),
    phone: z.string().trim().min(1, "Phone is required"),
  }),
  shipping: z.object({
    addressLine: z.string().trim().min(1, "Address is required"),
    ward: optionalText,
    district: optionalText,
    province: optionalText,
  }),
  paymentProvider: z.nativeEnum(PaymentProvider).default(PaymentProvider.COD),
  couponCode: z.string().trim().min(1).transform((value) => value.toUpperCase()).optional().nullable(),
  note: optionalText,
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;
