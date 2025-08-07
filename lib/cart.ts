import { cookies } from "next/headers";
import { CartItem } from "@/types/cart";

const CART_COOKIE = "cart";

// If this is being used in a Route Handler or Server Action, it needs to be async
export async function getCart(): Promise<CartItem[]> {
  const cookieStore = await cookies(); // <-- await here
  const raw = cookieStore.get(CART_COOKIE)?.value;
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function saveCart(cart: CartItem[]) {
  const cookieStore = await cookies(); // <-- await here
  cookieStore.set(CART_COOKIE, JSON.stringify(cart));
}
