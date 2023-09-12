import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2023-08-16',
    });
    const data = await request.json();
    
    let priceId = data.price_id;
    let email = data.email

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: priceId,
                quantity: 1,
            },
        ],
        mode: 'subscription',
        success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/profile`,
        cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cancel`,
        customer_email: email,
        subscription_data: {
            trial_period_days: 3
        }
    });

    return NextResponse.json(session.url)
}

// import { NextResponse } from 'next/server';
// import Stripe from 'stripe';

// export async function POST(request) {
//   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//     apiVersion: '2022-11-15',
//   });
//   const data = await request.json();

//   let priceId = data.price_id; // This should be the Price ID for either free trial or recurring payment
//   let email = data.email;

//   // Depending on the type of subscription (trial or recurring), you can set the Price ID
//   // For the sake of example, let's assume you have 'price_trial' and 'price_recurring' as your Price IDs

//   if (data.subscription_type === 'trial') {
//     priceId = 'price_1Ngr13Eq3FYbPJAzF3yTqjQc'; // Replace with the actual Price ID for the free trial product
//   } else if (data.subscription_type === 'recurring') {
//     priceId = 'price_1NgqvzEq3FYbPJAz06L8fwE9'; // Replace with the actual Price ID for the recurring payment product
//   }

//   const now = Math.floor(Date.now() / 1000); // Current timestamp in seconds
//   const oneWeekInSeconds = 7 * 24 * 60 * 60; // One week in seconds
//   const trialEndTimestamp = now + oneWeekInSeconds;

//   // Create the subscription
//   const subscription = await stripe.subscriptions.create({
//     customer: email,
//     items: [{ price: priceId }],
//     trial_end: trialEndTimestamp, // Set trial end
//   });

//   return NextResponse.json({ subscriptionId: subscription.id });
// }

// import { NextResponse } from 'next/server';
// import Stripe from 'stripe';

// export async function POST(request) {
//   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//     apiVersion: '2022-11-15',
//   });
//   const data = await request.json();

//   let priceId = data.price_id;
//   let email = data.email;

//   // Step 1: Create a customer in Stripe
//   const customer = await stripe.customers.create({
//     email: email,
//   });

//   // Step 2: Save the customer ID to your database or use it as needed
//   const customerId = customer.id;

//   // Step 3: Create the subscription using the customer ID
//   const subscription = await stripe.subscriptions.create({
//     customer: customerId, // Use the customer ID
//     items: [{ price: priceId }],
//     trial_end: 'now', // Start trial immediately
//   });

//   return NextResponse.json({ subscriptionId: subscription.id });
// }
