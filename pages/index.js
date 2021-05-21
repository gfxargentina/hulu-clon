import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import requests from '../utils/requests'



export default function Home({ results }) {
  //console.log(props);

  return (
    <div >
      <Head>
        <title>Hulu Clon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Luis Chilo Hulu Clon" />
        <meta property="og:url" content="https://hulu-clon.vercel.app/" />
        <meta property="og:image" content="https://i.ibb.co/Cv6KLN8/hulu-clon.png" />
      </Head> 

      {/* Header */}
      <Header />

      {/* Nav */}
      <Navbar />

      <Results results={results} />

    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url }`
  ).then((res) => res.json() );

  return {
    props: {
      results: request.results,
    }
  }
  
}
