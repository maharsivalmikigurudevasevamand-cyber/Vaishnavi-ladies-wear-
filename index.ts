export interface ColorVariant {
  id: string;
  colorName: string;
  colorCode: string; // Hex code for swatch (e.g. #E05374, #1B1B1B)
  images: string[];
  stock: number;
  sku: string;
  price?: number; // Optional override
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'Sarees' | 'Kurtis' | 'Dresses' | 'Tops' | 'Ethnic Wear' | string;
  description: string;
  fabric: string;
  sizes: string[]; // e.g. ['S', 'M', 'L', 'XL', 'Free Size']
  price: number;
  originalPrice: number;
  discountPercentage: number;
  mainImage: string;
  variants: ColorVariant[];
  featured?: boolean;
  newArrival?: boolean;
  active: boolean;
  createdAt: number;
  updatedAt?: number;
}

export interface CartItem {
  id: string; // unique item id: productId_variantId_size
  productId: string;
  productName: string;
  productSlug: string;
  productImage: string;
  variantId: string;
  colorName: string;
  colorCode: string;
  size: string;
  sku: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  maxStock: number;
}

export type OrderStatus = 'Pending' | 'Confirmed' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
export type PaymentStatus = 'Pending' | 'Paid' | 'Failed';

export interface ShippingAddress {
  fullName: string;
  mobile: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  deliveryInstructions?: string;
}

export interface OrderItemSnapshot {
  productId: string;
  productName: string;
  productImage: string;
  variantId: string;
  colorName: string;
  colorCode: string;
  size: string;
  sku: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  userId?: string;
  customerName: string;
  customerMobile: string;
  customerEmail: string;
  shippingAddress: ShippingAddress;
  items: OrderItemSnapshot[];
  subtotal: number;
  shippingFee: number;
  discountAmount: number;
  grandTotal: number;
  paymentMethod: 'Cash on Delivery' | 'UPI / Online';
  paymentStatus: PaymentStatus;
  orderStatus: OrderStatus;
  createdAt: number;
  updatedAt?: number;
  trackingNotes?: string;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: 'customer' | 'admin';
  phone?: string;
  savedAddress?: ShippingAddress;
  createdAt: number;
}
