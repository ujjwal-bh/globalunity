import { NextRequest, NextResponse } from "next/server";

const TEST_IP = "8.8.8.8"; // Google's IP — resolves to United States, Mountain View
// Use any real IP to test different countries:
// "103.1.206.1"  → Nepal
// "2.16.1.1"     → UK
// "49.204.0.1"   → India

const isDev = process.env.NODE_ENV === "development";

export async function GET(req: NextRequest) {
  try {
    const forwarded = req.headers.get("x-forwarded-for");
    const prodIp = forwarded?.split(",")[0].trim();

    // In dev, fall back to TEST_IP so you always get real location data
    const ip =  (isDev ? (process.env.DEV_TEST_IP ?? TEST_IP) : prodIp|| "");

    const url = ip
      ? `https://ipinfo.io/${ip}/json?token=${process.env.IPINFO_TOKEN}`
      : `https://ipinfo.io/json?token=${process.env.IPINFO_TOKEN}`;

    const res = await fetch(url, { next: { revalidate: 0 } });
    if (!res.ok) throw new Error(`ipinfo error: ${res.status}`);

    const data = await res.json();

    return NextResponse.json({
      country: data.country_name ?? data.country ?? "",
      country_code: data.country ?? "",
      city: data.city ?? "",
      region: data.region ?? "",
      status: "success",
      ip: process.env.DEV_TEST_IP || "xyz",
      isDev: isDev
    });
  } catch (err) {
    console.error("[location]", err);
    return NextResponse.json(
      { country: "", country_code: "", city: "", region: "", status: "error" },
      { status: 200 }
    );
  }
}