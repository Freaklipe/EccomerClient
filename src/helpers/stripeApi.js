
import { loadStripe } from "@stripe/stripe-js";
import { getEnvVariables } from "./getEnvVariables";

const { STRAPI_KEY, HOST_STRAPI } = getEnvVariables();

const stripePromise = loadStripe(
    STRAPI_KEY
    // "pk_test_51MEuwKIIkmJRhxPJjD6csES5ThCq85LtZ62p2ZIlIKOw0Bks6E7IvRJ4BAajJTHQcULGQ5nTtfLP0qnmPqMgqHo300X6NaMBsV"
);

export async function makePayment(values, cart) {
    // console.log(STRAPI_KEY, HOST_STRAPI);
    const stripe = await stripePromise;
    const requestBody = {
      userName: [values.firstName, values.lastName].join(" "),
      email: values.email,
      products: cart.map(({ id, count }) => ({
        id,
        count,
      })),
    };

    // const response = await fetch("http://localhost:1338/api/orders", {
    const response = await fetch(`${HOST_STRAPI}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    const session = await response.json();
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
}
