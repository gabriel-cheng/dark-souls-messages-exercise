import { z } from "zod";

const envSchema = z.object({
    NODE_ENV: z.enum(["development", "production"]),
    API_BASE_URL: z.string().url()
});

const _env = envSchema.safeParse(process.env);

if(_env.error) {
    console.error("Invalid environment variables", _env.error.format());
    throw new Error("Invalid environment variables");
}

export const env = _env.data;