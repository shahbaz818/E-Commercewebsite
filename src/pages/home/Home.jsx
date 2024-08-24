import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/herosection/HeroSection'
import Card from '../../components/product/Product'
function Home() {
  return (
    <Layout>
      <HeroSection/>
      <Card/>
    </Layout>   
  )
}

export default Home
