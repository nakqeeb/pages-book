import React, { useEffect } from 'react'
import Banner from '../shared/components/Banner/Banner'
import Contact from '../components/ContactUsContent/Contact';

export default function ContactUsPage() {
    useEffect(() => {
      window.scrollTo(0, 0) // Scroll to the top of the page when render the page
    }, []);
  return (
    <>
        <Banner title='Contact Us' description='There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form.'/>
        <Contact />
    </>
  )
}
