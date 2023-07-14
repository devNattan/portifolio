import React from "react";

function PortifolioItem({title, imgUrl, stack, link}) {
  return(
    <div className="border-2 border-stone-900 rounded-md overflow-hidden">
      <img 
        src={imgUrl} 
        alt="portifolio" 
        className="w-full h-36 md:h-48 object-cover cursor pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
      </div>
      <p className="flex flex-wrap gap-1 flex-row items-center justify-center text-xs md:text-xs">
        {stack.map(item => (
          <span className="inline-block mb-2  px-3 py-1 font-semibold border-2 border-stone-900 rounded-md">
            {item}
          </span>
        ))}
      </p>
    </div>
  )
}

export default PortifolioItem;