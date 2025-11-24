const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function fetcher(url: string, options?: RequestInit) {
    const res = await fetch(`${API_BASE_URL}${url}`, options);
    if (!res.ok) {
        throw new Error("An error occurred while fetching the data.");
    }
    return res.json();
}
