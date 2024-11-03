// import { CDN_URL } from "../utils/constants";

// const TopRestaurantChains = ({resData}) => {
//     const {
//         cloudinaryImageId,
//         name,
//         avgRatingString,

//         areaName,
//         cuisines,
//         costForTwo,
//         sla,
//         aggregatedDiscountInfoV3,
//       } = resData.info;
//   return (
//     <div>
//       <h1>Top Rated Restaurants in</h1>
//       <div className="hover:scale-95 duration-300 ease-in-out my-3 w-[80%] ">
//       <div className="relative w-full md:h-[210px] min-h-[160px] sm:h-[180px]">
//         <img
//           src={CDN_URL + cloudinaryImageId}
//           alt="Example"
//           className="w-full h-full rounded-2xl object-cover"
//         />
//         <div className="absolute inset-0 flex items-end justify-end sm:p-2 p-1">
//           <h4
//             className={`text-white text-[11px] sm:text-xs sm:text-[13px] font-semibold sm:font-bold ${
//               aggregatedDiscountInfoV3?.header ? "bg-[#256FEF]" : null
//             } rounded-md py-[3px] px-[2px] sm:px-[5px]`}
//           >
//             {aggregatedDiscountInfoV3?.header
//               ? aggregatedDiscountInfoV3?.header
//               : null}{" "}
//             {aggregatedDiscountInfoV3?.subHeader
//               ? aggregatedDiscountInfoV3?.subHeader
//               : aggregatedDiscountInfoV3?.discountTag}
//           </h4>
//         </div>
//       </div>

//       <div className="pl-2 py-3">
//         <div className="flex justify-between text-center">
//           <h4 className="font-bold text-sm sm:text-[16px] lg:text-[18px] text-start">
//             {name}
//           </h4>
//           <h4 className="font-semibold text-sm sm:text-[16px] lg:text-[18px]">
//             {avgRatingString}
//             <i className="ri-star-fill text-[#14883f] text-sm sm:text-[15px] lg:text-[18px] pl-2 align-top"></i>
//           </h4>
//         </div>

//         <div className="sm:flex justify-between">
//           <p className="text-[12px] lg:text-[14px] text-[#02060c] opacity-[60%] ">
//             {cuisines.slice(0, 2).join(" , ")}
//           </p>
//           <p className="text-[12px] lg:text-[14px] text-[#02060c] opacity-[60%]">
//             {costForTwo}
//           </p>
//         </div>

//         <p className="text-[12px] lg:text-[14px] text-[#02060c] opacity-[60%] py-[4px] lg:py-[6px]">
//           {areaName.split(" ").slice(0, 2).join(" ")}
//         </p>

//         <div className="flex justify-between">
//           <h4 className="text-[12px] lg:text-[14px]">{sla?.slaString}</h4>
//           <h4 className="text-[12px] lg:text-[14px]">
//             {sla?.lastMileTravel} km
//           </h4>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };
// export default TopRestaurantChains;
