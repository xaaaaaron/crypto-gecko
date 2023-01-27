import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import TopCards from './Components/TopCards'

export default function Home({exploreData, nextData}) {
  return (
    <>
     <Head>
        <title>Crypto Currency Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

 

       <div className="min-h-screen bg-black py-6 flex flex-col justify-center sm:py-12">
       <div className="max-w-7xl mx-auto px-8 sm:px-16">
                  
      <h1 className="text-lg text-white mx-auto  md:py-20 sm:py-40">
                       Top Exchanges
                </h1>

                  <div className="grid md:grid-cols-4 gap-1 py-10 sm:grid-cols-1 xl:grid-cols-4">
                    {nextData?.map(({id, name, year_established, url, image, trush_score, trush_score_rank}) => (
                   <>
                   <TopCards 
                   key={id}
                   id={id}
                   name={name}
                   year_established={year_established}
                   url={url}
                   />
                   </>
                 ))}
                </div>

                <h1 className="text-lg text-white mx-auto my-auto">
                        Crypto Currency Prices
                </h1>
                </div>   
          <div className="flex flex-col items-center justify-center py-10">
            <main className="bg-black min-h-screen py-6 flex flex-col justify-center">
              <div className="relative my-auto mx-auto">
                <section className="min-h-screen py-3 max-w-8xl mx-auto px-8 sm:px-16">

                {/*top part */}
               
                  {/*top part */}
           
                  <div className="stick-top top-0 z-50 grid grid-cols-7  mx-auto my-auto">
                    <p className="text-lg text-gray-400"></p>
                    <p className={`text-lg mx-auto my-auto text-gray-400`}>Rank</p>
                    <p className="text-lg mx-auto text-gray-400">Coin</p>
                    <p className={`text-lg mx-auto text-gray-400`}>Price</p>
                    <p className="text-lg mx-auto text-gray-400">24h</p>
                    <p className="text-lg mx-auto text-gray-400">24h Percentage</p>
                  </div>
      
                {exploreData?.map(({id, symbol, name, image, current_price, market_cap_rank, price_change_24h, price_change_percentage_24h}) => (
                  <div key={id} className=" border-x-50 border-gray-900 relative cursor-pointer hover:scale-105  transform transition duration-300 ease-out">
                    <Cards key={id}
                      image={image}
                      name={name}
                      symbol={symbol}
                      current_price={current_price}
                      market_cap_rank={market_cap_rank}
                      price_change_24h={price_change_24h}
                      price_change_percentage_24h={price_change_percentage_24h}
                    />
                  </div>
                ))}
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
  .then((res) => res.json()
  );

  const nextData = await fetch("https://api.coingecko.com/api/v3/exchanges?per_page=4&page=1")
  .then((res) => res.json()
  );

  return {
    props: {
      exploreData,
      nextData
    }
  }
}