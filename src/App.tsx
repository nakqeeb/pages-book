import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./shared/components/Header/Header";
import HomePage from "./pages/HomePage";
import Footer from "./shared/components/Footer/Footer";
import AboutPage from "./pages/AboutPage";
import StorePage from "./pages/StorePage";
import SingleProductPage from "./pages/SingleProductPage";
import ContactUsPage from "./pages/ContactUsPage";
import BlogPage from "./pages/BlogPage";
import SingleBlogPage from "./pages/SingleBlogPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  let routes = (
    <Routes>
      <Route path="/home/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/store" element={<StorePage />} />
      <Route path="/store/:productId" element={<SingleProductPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:blogId" element={<SingleBlogPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="*" element={<NotFoundPage />} />
      {/* <Route path="/" element={<Users />} />
      <Route path="/:userId/places" element={<UserPlaces />} />
      <Route path="/places/new" element={<NewPlace />} />
      <Route path="/places/:placeId" element={<UpdatePlace />} />
      <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
  return (
    <>
      <Header />
      <main>
        {routes}
      </main>
      <Footer />
    </>
  );
}

export default App;
