import React from 'react'
import Image from 'next/image'

const TopCards = ({id, name, year_established, url, image, trush_score, trush_score_rank}) => {
    return (
    <>
    <div className="grid">
      <div className="py-10">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className=" items-center justify-center  hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-600 shadow-lg transform -rotate-45 rotate-6 rounded-3xl "></div>
            <div className="relative px-4 bg-white/50 shadow-lg sm:rounded-3xl sm:p-20 ">
              <h1 className="text-6xl font-bold">
              {name}
              </h1>
              <h1 className="text-lg">
                  {id}
              </h1>
              <h2 className="text-1xl font-bold">
               {year_established} {url}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    </>
    )
}

export default TopCards
