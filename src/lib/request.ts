import "server-only";

export async function fetchByApiEndpoint(
    url: string,
    options: RequestInit = {}
) {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}