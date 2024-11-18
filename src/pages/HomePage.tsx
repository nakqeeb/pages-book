import { useEffect } from 'react';
import About from '../components/HomeContent/About';
import Author from '../components/HomeContent/Author';
import Banner from '../components/HomeContent/Banner';
import Blog from '../components/HomeContent/Blog';
import Callout from '../components/HomeContent/Callout';
import Chapter from '../components/HomeContent/Chapter';
import Testimonial from '../components/HomeContent/Testimonial';
import TrustedBy from '../components/HomeContent/TrustedBy';
import WhatWillLearn from '../components/HomeContent/WhatWillLearn';
import Subscribe from '../shared/components/Subscribe/Subscribe';

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to the top of the page when render the page
  }, []);
  return (
    <>
        <Banner />
        <Author />
        <About />
        <TrustedBy />
        <Callout />
        <WhatWillLearn />
        <Chapter />
        <Testimonial />
        <Blog />
        <Subscribe />
    </>
  )
}

export default HomePage