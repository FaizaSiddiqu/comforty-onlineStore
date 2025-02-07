import { NextResponse } from "next/server";
import { calculateShippingRates } from "../../../sanity/lib/shipengine";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const rates = await calculateShippingRates(body);
    return NextResponse.json(rates);
  } catch (error) {
    console.error("Shipping Calculation Error:", error); // ✅ Error log added
    return NextResponse.json(
      { error: "Failed to calculate shipping rates" },
      { status: 500 }
    );
  }
}
