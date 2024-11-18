import { useEffect } from 'react'
import Author from '../components/AboutContent/Author'
import Books from '../components/AboutContent/Books'
import History from '../components/AboutContent/History'
import TrustedBy from '../components/AboutContent/TrustedBy'
import Banner from '../shared/components/Banner/Banner'
import Subscribe from '../shared/components/Subscribe/Subscribe'


export default function AboutPage() {
    useEffect(() => {
      window.scrollTo(0, 0) // Scroll to the top of the page when render the page
    }, []);
  return (
    <>
      <Banner title='About the Author' description='There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form.'/>
      <Author />
      <History />
      <Books />
      <TrustedBy />
      <Subscribe />
    </>
  )
}
