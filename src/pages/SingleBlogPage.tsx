import React, { useEffect } from 'react'
import Banner from '../shared/components/Banner/Banner';
import Blog from '../components/SingleBlogContent/Blog';

export default function SingleBlogPage() {
    useEffect(() => {
        window.scrollTo(0, 0) // Scroll to the top of the page when render the page
      }, []);
    return (
      <>
          <Banner title='Significant reading has more info number' />
          <Blog />
     </>
    )
}
