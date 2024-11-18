import React, { useEffect } from 'react'
import Banner from '../shared/components/Banner/Banner'
import AuthorBooks from '../components/StoreContent/AuthorBooks'
import Subscribe from '../shared/components/Subscribe/Subscribe'

export default function StorePage() {
    useEffect(() => {
      window.scrollTo(0, 0) // Scroll to the top of the page when render the page
    }, []);
  return (
    <>
        <Banner title='My Store' description='There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form.'/>
        <AuthorBooks />
        <Subscribe />
   </>
  )
}
