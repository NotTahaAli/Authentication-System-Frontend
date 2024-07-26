import { decode } from 'jsonwebtoken';

function isAuthenticated(cookies) {
  if (cookies.has("session_jwt")) {
    const jwt = cookies.get("session_jwt");
    if (jwt) {
      try {
        const data = decode(jwt.value);
        if (data && typeof data != "string") {
          if (data.userId) {
            return jwt;
          }
        }
      } catch (_err) {
      }
    }
  }
  return null;
}

export { isAuthenticated as i };
