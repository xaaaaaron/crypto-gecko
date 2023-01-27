import React from 'react'
import Image from 'next/image'

const Cards = ({id, symbol, name, image, current_price, market_cap_rank, price_change_24h, price_change_percentage_24h}) => {
    return (
        <div className="grid lg:grid-cols-7 pt-1 md:grid-cols-3">
            <p className="text-gray-400">{id}</p>
            <p className={` mx-auto my-auto text-gray-400`}>{market_cap_rank}</p>
                <div className="grid grid-cols-3 gap-0">
                    <Image className=""
                        src={image}
                        width="18"
                        height="18"
                        alt="test"
                    />
                    <p className="text-sm text-gray-100">{name}</p>  
                    <p className="hidden lg:inline mx-auto text-sm text-gray-500">{symbol}</p>
                </div>
            <p className="mx-auto text-gray-400">${current_price}</p>
            <p className={`hidden lg:inline mx-auto text-red ${price_change_24h > 0? "text-green-600 text-sm" : "text-red-500 text-sm "}`}>{parseFloat(price_change_24h).toFixed(3)}$</p>
            <p className={`hidden lg:inline mx-auto text-red ${price_change_percentage_24h > 0? "text-green-600 text-sm" : "text-red-500 text-sm "}`}>${price_change_percentage_24h}</p>
        </div>
    )
}

export default Cards
