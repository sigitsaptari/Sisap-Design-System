import type { SVGProps } from "react";

export type PaymentMethod = "JCB" | "PayPal" | "Stripe" | "Mastercard" | "Visa" | "Alipay" | "GooglePay" | "ApplePay" | "Discover" | "AMEX";

export interface PaymentIconProps extends SVGProps<SVGSVGElement> {
  method: PaymentMethod;
  size?: "sm" | "md" | number;
  className?: string;
}
