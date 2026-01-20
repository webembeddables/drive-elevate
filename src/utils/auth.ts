let authToken = "";

export async function generateUserToken(email: string) {
  try {
    const response = await fetch(
      `https://token-generation.onrender.com/generate-token?email=${email}`
    );
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    authToken = data.token;
    localStorage.setItem("authToken", authToken);
    localStorage.setItem("userEmail", email);
    return authToken;
  } catch (error) {
    console.error("Failed to fetch user token:", error);
    authToken = "";
    return null;
  }
}

export function getAuthToken() {
  if (!authToken) {
    authToken = localStorage.getItem("authToken") || "";
  }
  return authToken;
}

export function getUserEmail() {
  return localStorage.getItem("userEmail") || "";
}

export function clearAuthToken() {
  authToken = "";
  localStorage.removeItem("authToken");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userName");
}

export function isAuthenticated() {
  return !!getAuthToken();
}

export function setUserName(name: string) {
  localStorage.setItem("userName", name);
}

export function getUserName() {
  return localStorage.getItem("userName") || "";
}
