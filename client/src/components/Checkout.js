import React from "react";
import StripeCheckout from "react-stripe-checkout";

const STRIPE_PUBLISHABLE = "pk_test_0eKSi4tnuGE57U2ITlBiVU3v00pG2nTPAR";

const onToken = (user, checkout) => (token) => checkout(user, token.id);

const Checkout = ({ amount, user, checkout }) => (
  <StripeCheckout
    amount={amount * 100}
    token={onToken(user, checkout)}
    currency='RON'
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default Checkout;
