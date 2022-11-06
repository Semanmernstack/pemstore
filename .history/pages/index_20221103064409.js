import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductShop from '../components/ProductShop'


export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Ellystore</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className="ax-w-screen-2xl mx-auto"   >
        <Banner/>
        <ProductShop products={products}/>
      </div>
      

      
    </div>
  )
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  )
  

  return {
    props: {
      products,
    },
  }
}
