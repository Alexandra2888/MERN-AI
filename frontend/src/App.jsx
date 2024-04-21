import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/users/Register";
import Login from "./components/users/Login";
import Dashboard from "./components/users/Dashboard";
import PrivateNavbar from "./components/navbar/PrivateNavbar";
import PublicNavbar from "./components/navbar/PublicNavbar";
import Home from "./components/home/Home";
import { useAuth } from "./contexts/AuthContext";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import BlogPostAIAssistant from "./components/contentGeneration/ContentGeneration";
import Plans from "./components/plans/Plan";
import FreePlanSignup from "./components/stripePayment/FreePlanSignUp";
import CheckoutForm from "./components/stripePayment/CheckoutForm";
import PaymentSuccess from "./components/stripePayment/PaymentSuccess";
import ContentGenerationHistory from "./components/contentGeneration/ContentHistory";
import AppFeatures from "./components/appFeatures/AppFeatures";
import AboutUs from "./components/aboutUs/AboutUs";

export default function App() {
  //custom auth hook
  const { isAuthenticated } = useAuth();

  return (
    <>
      <BrowserRouter>
        {/* Navbar */}
        {isAuthenticated ? <PrivateNavbar /> : <PublicNavbar />}
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <AuthRoute>
                <Dashboard />
              </AuthRoute>
            }
          />
          <Route
            path="/generate-content"
            element={
              <AuthRoute>
                <BlogPostAIAssistant />
              </AuthRoute>
            }
          />
          <Route
            path="/history"
            element={
              <AuthRoute>
                <ContentGenerationHistory />
              </AuthRoute>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route
            path="/free-plan"
            element={
              <AuthRoute>
                <FreePlanSignup />
              </AuthRoute>
            }
          />
          <Route
            path="/checkout/:plan"
            element={
              <AuthRoute>
                <CheckoutForm />
              </AuthRoute>
            }
          />
          <Route path="/success" element={<PaymentSuccess />} />
          <Route path="/features" element={<AppFeatures />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
