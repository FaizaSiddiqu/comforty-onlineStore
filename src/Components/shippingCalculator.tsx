// // src/app/components/ShippingCalculator.tsx
// "use client";

// import { useState } from "react";

// const ShippingCalculator = () => {
//   const [fromZip, setFromZip] = useState("");
//   const [toZip, setToZip] = useState("");
//   const [weight, setWeight] = useState("");
//   const [rates, setRates] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleCalculateRates = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch("/api/shipping", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           from: { postal_code: fromZip },
//           to: { postal_code: toZip },
//           weight: { value: parseFloat(weight), unit: "pound" },
//         }),
//       });

//       const data = await response.json();
//       setRates(data.rates);
//     } catch (error) {
//       console.error("Error calculating shipping rates:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4">Shipping Calculator</h2>
//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium">From ZIP Code</label>
//           <input
//             type="text"
//             value={fromZip}
//             onChange={(e) => setFromZip(e.target.value)}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">To ZIP Code</label>
//           <input
//             type="text"
//             value={toZip}
//             onChange={(e) => setToZip(e.target.value)}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Weight (lbs)</label>
//           <input
//             type="number"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <button
//           onClick={handleCalculateRates}
//           disabled={isLoading}
//           className="w-full bg-teal-600 text-white font-semibold py-2 rounded-md hover:bg-teal-900 transition"
//         >
//           {isLoading ? "Calculating..." : "Calculate Rates"}
//         </button>
//       </div>
//       {rates.length > 0 && (
//         <div className="mt-4">
//           <h3 className="text-lg font-bold">Shipping Rates</h3>
//           <ul className="space-y-2">
//             {rates.map((rate) => (
//               <li key={rate.rate_id} className="border p-2 rounded">
//                 <p className="font-semibold">{rate.service_type}</p>
//                 <p>${rate.shipping_amount.amount}</p>
//                 <p>Estimated Delivery: {rate.estimated_delivery_date}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShippingCalculator;


"use client";

import { useState } from "react";

interface ShippingRate {
  rate_id: string;
  service_type: string;
  shipping_amount: {
    amount: number;
  };
  estimated_delivery_date: string;
}

const ShippingCalculator = () => {
  const [fromZip, setFromZip] = useState("");
  const [toZip, setToZip] = useState("");
  const [weight, setWeight] = useState("");
  const [rates, setRates] = useState<ShippingRate[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleCalculateRates = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/shipping", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: { postal_code: fromZip },
          to: { postal_code: toZip },
          weight: { value: parseFloat(weight), unit: "pound" },
        }),
      });

      const data: { rates: ShippingRate[] } = await response.json();
      setRates(data.rates);
    } catch (error) {
      console.error("Error calculating shipping rates:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Shipping Calculator</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">From ZIP Code</label>
          <input
            type="text"
            value={fromZip}
            onChange={(e) => setFromZip(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">To ZIP Code</label>
          <input
            type="text"
            value={toZip}
            onChange={(e) => setToZip(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Weight (lbs)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          onClick={handleCalculateRates}
          disabled={isLoading}
          className="w-full bg-teal-600 text-white font-semibold py-2 rounded-md hover:bg-teal-900 transition"
        >
          {isLoading ? "Calculating..." : "Calculate Rates"}
        </button>
      </div>
      {rates.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Shipping Rates</h3>
          <ul className="space-y-2">
            {rates.map((rate) => (
              <li key={rate.rate_id} className="border p-2 rounded">
                <p className="font-semibold">{rate.service_type}</p>
                <p>${rate.shipping_amount.amount}</p>
                <p>Estimated Delivery: {rate.estimated_delivery_date}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShippingCalculator;
