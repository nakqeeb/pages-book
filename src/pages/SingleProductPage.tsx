import React, { useEffect } from "react";
import Banner from "../shared/components/Banner/Banner";
import ProductInfo from "../components/SingleProductContent/ProductInfo";
import ShoppingFeature from "../components/SingleProductContent/ShoppingFeature";

export default function SingleProductPage() {
    useEffect(() => {
      window.scrollTo(0, 0) // Scroll to the top of the page when render the page
    }, []);
  return (
    <>
      <Banner
        title="My Store"
        description="There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form."
      />
      <ProductInfo />
      <ShoppingFeature />
    </>
  );
}
