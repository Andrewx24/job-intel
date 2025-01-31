import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

interface LineItem {
  name: string;
  price: number;
  quantity: number;
}

export async function POST(req: Request) {
  try {
    const { items, success_url, cancel_url }: { items: LineItem[]; success_url: string; cancel_url: string } =
      await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, // Convert to cents
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url,
      cancel_url,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: "Something went wrong with Stripe checkout" },
      { status: 500 }
    );
  }
}
