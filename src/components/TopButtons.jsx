import React from "react";

/*
 * Top buttons with city names for quick fetch  
 */
function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Mumbai",
    },
    {
      id: 2,
      title: "Hyderabad",
    },
    {
      id: 3,
      title: "Delhi",
    },
    {
      id: 4,
      title: "Pune",
    },
    {
      id: 5,
      title: "Noida",
    },
  ];

      /*
       * Displaying the buttons using the map with id being the key satisfying react requirements 
       */
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium p-2 ease-out hover:scale-125"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;