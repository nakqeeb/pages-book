import React, { useEffect } from 'react';
import Banner from '../shared/components/Banner/Banner';
import Articales from '../components/BlogContent/Articales';

export default function BlogPage() {
    useEffect(() => {
      window.scrollTo(0, 0) // Scroll to the top of the page when render the page
    }, []);
  return (
    <>
        <Banner title='Articles' description='There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form.'/>
        <Articales />
   </>
  )
}
