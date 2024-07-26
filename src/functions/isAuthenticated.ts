import type { AstroCookies } from "astro";
import { decode } from "jsonwebtoken";

export function isAuthenticated(cookies: AstroCookies) {
    if (cookies.has("session_jwt")) {
        const jwt = cookies.get("session_jwt")
        if (jwt) {
            try {
                const data = decode(jwt.value);	
                if (data && typeof(data) != "string") {
                    if(data.userId) {
                        return jwt;
                    }
                }
            } catch(_err) {}
        }
    }
    return null;
}