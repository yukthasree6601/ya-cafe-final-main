// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

// // FilterRestaurant Component
// const FilterRestaurant = ({ allrestaurant, setFilteredRestaurants }) => {
//   const [isRatingFiltered, setIsRatingFiltered] = useState(false);
//   const [priceCategory, setPriceCategory] = useState("");
//   const [isFilterApplied, setIsFilterApplied] = useState(false);

//   const filterOnRating = (restaurants) => {
//     return restaurants.filter((res) => res?.info?.avgRating > 4.2);
//   };

//   const filterOnPrice = (restaurants, category) => {
//     return restaurants.filter((res) => {
//       const costForTwo = parseInt(
//         res?.info?.costForTwo?.replace(/\D/g, ""),
//         10
//       );
//       if (category === "low") return costForTwo <= 250;
//       else if (category === "medium")
//         return costForTwo > 250 && costForTwo <= 400;
//       else if (category === "high") return costForTwo > 400;
//       return true;
//     });
//   };

//   const applyFilters = () => {
//     let filteredData = allrestaurant;

//     if (isRatingFiltered) filteredData = filterOnRating(filteredData);
//     if (priceCategory)
//       filteredData = filterOnPrice(filteredData, priceCategory);

//     setFilteredRestaurants(filteredData);
//   };

//   const handleFilterClick = (type) => {
//     if (type === "rating") setIsRatingFiltered((prev) => !prev);
//     else setPriceCategory((prev) => (prev === type ? "" : type));

//     setIsFilterApplied(true);
//   };

//   const resetFilters = () => {
//     setIsRatingFiltered(false);
//     setPriceCategory("");
//     setIsFilterApplied(false);
//     setFilteredRestaurants(allrestaurant);
//   };

//   useEffect(() => {
//     if (isFilterApplied) applyFilters();
//     else setFilteredRestaurants(allrestaurant);
//   }, [isRatingFiltered, priceCategory, isFilterApplied]);

//   return (
//     <div className="flex flex-wrap items-center gap-3">
//       <button
//         onClick={() => handleFilterClick("rating")}
//         className={`${
//           isRatingFiltered
//             ? "border border-orange-600 text-white bg-orange-600"
//             : "border border-orange-600 text-orange-600 bg-white"
//         } font-semibold py-2 px-4 rounded-lg hover:bg-orange-200 transition duration-200`}
//       >
//         {isRatingFiltered ? "Above 4.2 (Applied)" : "Above 4.2"}
//       </button>
//       <button
//         onClick={() => handleFilterClick("low")}
//         className={`${
//           priceCategory === "low"
//             ? "border border-orange-600 text-white bg-orange-600"
//             : "border border-orange-600 text-orange-600 bg-white"
//         } font-semibold py-2 px-4 rounded-lg hover:bg-orange-200 transition duration-200`}
//       >
//         Low Price
//       </button>
//       <button
//         onClick={() => handleFilterClick("medium")}
//         className={`${
//           priceCategory === "medium"
//             ? "border border-orange-600 text-white bg-orange-600"
//             : "border border-orange-600 text-orange-600 bg-white"
//         } font-semibold py-2 px-4 rounded-lg hover:bg-orange-200 transition duration-200`}
//       >
//         Medium Price
//       </button>
//       <button
//         onClick={() => handleFilterClick("high")}
//         className={`${
//           priceCategory === "high"
//             ? "border border-orange-600 text-white bg-orange-600"
//             : "border border-orange-600 text-orange-600 bg-white"
//         } font-semibold py-2 px-4 rounded-lg hover:bg-orange-200 transition duration-200`}
//       >
//         High Price
//       </button>
//       {isFilterApplied && (
//         <button
//           onClick={resetFilters}
//           className="border border-gray-600 text-gray-600 bg-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-200"
//         >
//           Reset Filters
//         </button>
//       )}
//     </div>
//   );
// };

// // SearchInputBox Component
// export const SearchInputBox = ({
//   allRestaurants,
//   setFilteredRestaurants,
//   setNoRestaurant,
//   searchInput,
//   setSearchInput,
// }) => {
//   const theme = useSelector((store) => store.sidebar.theme);

//   const filterData = (input, restaurants) => {
//     return restaurants.filter((res) =>
//       res?.info?.name?.toLowerCase().includes(input.toLowerCase())
//     );
//   };

//   useEffect(() => {
//     if (searchInput.length === 0) {
//       setFilteredRestaurants(allRestaurants);
//       setNoRestaurant("");
//     } else {
//       const data = filterData(searchInput, allRestaurants);
//       if (data.length === 0) {
//         setNoRestaurant(
//           <h1 className="text-center text-lg text-gray-500">
//             No Restaurant Found
//           </h1>
//         );
//       } else {
//         setNoRestaurant("");
//       }
//       setFilteredRestaurants(data);
//     }
//   }, [searchInput, allRestaurants]);

//   return (
//     <input
//       type="text"
//       placeholder="Search for restaurants..."
//       value={searchInput}
//       onChange={(e) => setSearchInput(e.target.value)}
//       className="border border-gray-300 rounded-lg p-2 h-12 w-full sm:w-64 focus:outline-none focus:border-orange-500 focus:ring-0"
//       style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
//     />
//   );
// };
// export default FilterRestaurant;
