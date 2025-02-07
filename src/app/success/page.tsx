// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import ShippingCalculator from "@/Components/shippingCalculator";

// const Success = () => {
//   const router = useRouter();
//   const [orderId, setOrderId] = useState<string | null>(null);
//   const [shipment, setShipment] = useState<any>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrderDetails = async () => {
//       try {
//         // Get session_id from URL (Stripe success redirect)
//         const urlParams = new URLSearchParams(window.location.search);
//         const sessionId = urlParams.get("session_id");

//         if (!sessionId) {
//           router.push("/");
//           return;
//         }

//         // Fetch Stripe order details
//         const stripeResponse = await fetch(`/api/stripe_order?session_id=${sessionId}`);
//         const stripeData = await stripeResponse.json();

//         setOrderId(stripeData.orderId);

//         // Shipping details
//         const shippingResponse = await fetch("/api/create_shipment", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             to: stripeData.shipping_address, // Address from Stripe checkout
//             weight: stripeData.total_weight, // Weight of items
//           }),
//         });

//         const shippingData = await shippingResponse.json();
//         setShipment(shippingData);
//       } catch (error) {
//         console.error("Error fetching order details:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchOrderDetails();
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
//       <h1 className="text-3xl font-bold text-green-600">Payment Successful! 🎉</h1>
//       <p className="text-lg mt-2">Thank you for your purchase. Your order ID is:</p>
//       {orderId ? <p className="text-xl font-semibold">{orderId}</p> : <p>Loading...</p>}

//       {isLoading ? (
//         <p className="mt-4 text-gray-500">Processing your shipment...</p>
//       ) : shipment ? (
//         <div className="mt-6 p-4 bg-gray-100 rounded-lg">
//           <h2 className="text-xl font-bold">Shipping Details 📦</h2>
//           <p><strong>Carrier:</strong> {shipment.carrier}</p>
//           <p><strong>Tracking Number:</strong> {shipment.tracking_number}</p>
//           <p><strong>Estimated Delivery:</strong> {shipment.estimated_delivery}</p>
//         </div>
//       ) : (
//         <p className="mt-4 text-red-500">Failed to generate shipment. Please contact support.</p>
//       )}

//       <button
//         onClick={() => router.push("/")}
//         className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
//       >
//         Back to Home
//       </button>
//       <ShippingCalculator />
//     </div>
//   );
// };

// export default Success;






"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ShippingCalculator from "@/Components/shippingCalculator";
import { Shipment } from "../../../types/shipment"; // Import Shipment type

const Success = () => {
  const router = useRouter();
  const [orderId, setOrderId] = useState<string | null>(null);
  const [shipment, setShipment] = useState<Shipment | null>(null); // Use Shipment type
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        // Get session_id from URL (Stripe success redirect)
        const urlParams = new URLSearchParams(window.location.search);
        const sessionId = urlParams.get("session_id");

        if (!sessionId) {
          router.push("/");
          return;
        }

        // Fetch Stripe order details
        const stripeResponse = await fetch(`/api/stripe_order?session_id=${sessionId}`);
        const stripeData = await stripeResponse.json();

        setOrderId(stripeData.orderId);

        // Shipping details
        const shippingResponse = await fetch("/api/create_shipment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: stripeData.shipping_address, // Address from Stripe checkout
            weight: stripeData.total_weight, // Weight of items
          }),
        });

        const shippingData = await shippingResponse.json();
        setShipment(shippingData);
      } catch (error) {
        console.error("Error fetching order details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrderDetails();
  }, [router]); // Add router to dependency array

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl font-bold text-green-600">Payment Successful! 🎉</h1>
      <p className="text-lg mt-2">Thank you for your purchase. Your order ID is:</p>
      {orderId ? <p className="text-xl font-semibold">{orderId}</p> : <p>Loading...</p>}

      {isLoading ? (
        <p className="mt-4 text-gray-500">Processing your shipment...</p>
      ) : shipment ? (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold">Shipping Details 📦</h2>
          <p><strong>Carrier:</strong> {shipment.carrier}</p>
          <p><strong>Tracking Number:</strong> {shipment.tracking_number}</p>
          <p><strong>Estimated Delivery:</strong> {shipment.estimated_delivery}</p>
        </div>
      ) : (
        <p className="mt-4 text-red-500">Failed to generate shipment. Please contact support.</p>
      )}

      <button
        onClick={() => router.push("/")}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
      >
        Back to Home
      </button>
      <ShippingCalculator />
    </div>
  );
};

export default Success;