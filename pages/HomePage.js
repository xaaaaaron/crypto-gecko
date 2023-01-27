import Cards from './Components/Cards'

export default function HomePage({exploreData}) {
    return (
      <>
        <main className="bg-black min-h-screen py-6 flex flex-col justify-center">
        <div className="relative mx-auto">
          
        <section className="min-h-screen py-1 pt-30 max-w-8xl mx-auto px-8 sm:px-16">
        {exploreData?.map(({id, symbol, name, image, current_price, market_cap_rank, price_change_24h, price_change_percentage_24h}) => (
          <div className="relative cursor-pointer hover:scale-105  transform transition duration-300 ease-out">
            <Cards 
              key={id}
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
      </>
    )
}

export async function getStaticProps() {
    const exploreData = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
    .then((res) => res.json());

    return {
      props: {
        exploreData
      }
    }
  }


