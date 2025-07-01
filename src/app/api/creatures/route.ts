import "server-only";

import { env } from "@/env/env";
import { fetchByApiEndpoint } from "@/lib/request";
import { NextResponse } from "next/server";
import { z } from "zod"

const fetchOptionsSchema = z.object({
    "method": z.enum(["GET", "POST", "PUT", "DELETE"]),
    "Content-Type": z.literal("application/json")
});

export async function GET() {
    const _fetchOptions = {
        "method": "GET",
        "Content-Type": "application/json"
    }
    const fetchOptions = fetchOptionsSchema.safeParse(_fetchOptions);

    const response = await fetchByApiEndpoint(`${env.API_BASE_URL}/criaturas`, fetchOptions.data);

    return NextResponse.json(response);
}