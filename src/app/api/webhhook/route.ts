import Stripe from "stripe";
import { NextResponse } from "next/server";
import UserProfile from "@/models/local_user";
import connect from "@/libs/mongo";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-08-16",
});
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
connect();

export async function POST(request) {
  // const buf = await request.json();
  const buf = await request.text();
  const sig = request.headers.get("stripe-signature");
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      webhookSecret
    );
  } catch (err) {
    console.error("Webhook error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
  switch (event.type) {
    case "checkout.session.completed":
      const checkoutSessionCompleted = event.data.object;
      console.log("payment success");
      console.log(checkoutSessionCompleted);
      const userEmail = checkoutSessionCompleted.customer_email;
      console.log("userEmail", userEmail);
      const user = await UserProfile.findOne({ email: userEmail });

      if (user) {
        user.subscriptionType = "paid";
        user.subscriptionExpiry = new Date(
          Date.now() + 30 * 24 * 60 * 60 * 1000
        );
        await user.save();
      }

      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  return NextResponse.json({ received: true });
}
