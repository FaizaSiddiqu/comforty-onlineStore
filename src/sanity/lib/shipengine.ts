// const SHIPENGINE_API_KEY = process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY;

// // Define an interface for the shipping data structure
// interface ShippingData {
//   from: { postal_code: string };
//   to: { postal_code: string };
//   weight: { value: number; unit: string };
// }

// // Function to calculate shipping rates
// export const calculateShippingRates = async (data: ShippingData): Promise<any> => {
//   try {
//     const response = await fetch("https://api.shipengine.com/v1/rates", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "API-Key": SHIPENGINE_API_KEY!,
//       },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to calculate shipping rates");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching shipping rates:", error);
//     throw error;
//   }
// };




const SHIPENGINE_API_KEY = process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY;

interface ShippingData {
  shipment: {
    service_code: string;
    ship_to: {
      name: string;
      address_line1: string;
      city_locality: string;
      state_province: string;
      postal_code: string;
      country_code: string;
    };
    ship_from: {
      name: string;
      address_line1: string;
      city_locality: string;
      state_province: string;
      postal_code: string;
      country_code: string;
    };
    packages: {
      weight: {
        value: number;
        unit: string;
      };
      dimensions?: {
        length: number;
        width: number;
        height: number;
        unit: string;
      };
    }[];
  };
}

export const calculateShippingRates = async (data: ShippingData) => {
  const response = await fetch("https://api.shipengine.com/v1/rates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": SHIPENGINE_API_KEY!,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to calculate shipping rates");
  }

  return response.json();
};
