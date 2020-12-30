export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:1337"
    : console.error("We don't have a production deployment yet")
