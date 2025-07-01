import "server-only";

import { env } from "@/env/env";
import { fetchByApiEndpoint } from "@/lib/request";
import { NextResponse } from "next/server";

export async function GET() {
    const fetchOptions = {
        "method": "GET",
        "Content-Type": "application/json"
    }
    const request = await fetchByApiEndpoint(env.API_BASE_URL, fetchOptions);

    return NextResponse.json(request);
}