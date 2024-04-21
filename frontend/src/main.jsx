import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import './index.css'
import { AuthProvider } from './contexts/AuthContext.jsx';
import { AppProvider } from "./contexts/DarkModeContext";


//React query client
const queryClient = new QueryClient();
//Stripe configuration
const stripePromise = loadStripe(
  "pk_test_51LVGZED8n0ExDwA4ocq21Al6QdhH7mgu9wk26r0mOCAB1n4dYb8CwepGCH6BvQvggiyLogZjxQsSHNHrxPUoaha200iDWOiYVW"
);
const options = {
  mode: "payment",
  currency: "usd",
  amount: 1099,
};
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
<AppProvider>
        <Elements stripe={stripePromise} options={options}>
          <App />
          </Elements>
          </AppProvider>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);