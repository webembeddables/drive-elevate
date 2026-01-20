import { generateUserToken } from "./auth";

// Wait for the SN_EMBEDDABLES object to be available on window
async function waitForEmbeddables(maxWaitMs = 10000, intervalMs = 100): Promise<any | null> {
  const start = Date.now();
  while (Date.now() - start < maxWaitMs) {
    const obj = (window as any).SN_EMBEDDABLES;
    if (obj) return obj;
    await new Promise((r) => setTimeout(r, intervalMs));
  }
  return null;
}

export async function initEmbeddables(userIdentifier?: string) {
  try {
    // If script is loaded via index.html, we just need to wait for it to be ready
    const SN_EMBEDDABLES = await waitForEmbeddables();
    if (!SN_EMBEDDABLES) {
      console.error("[Embeddables] SN_EMBEDDABLES not found on window after waiting!");
      return;
    }

    console.log("[Embeddables] Initializing...");

    var fetchGuestJWTTokenData;
    await fetch("https://token-generation.onrender.com/generate-guest-token")
    .then(response => response.json())
    .then(async data => {
        fetchGuestJWTTokenData = data.token;
    })
    .catch(error => {
        console.error("Error fetching guest token:", error);
    });

    
    await SN_EMBEDDABLES.init({
      theme: "843fedf397413610aa6b33611153af82",
      baseURL: "https://embeddables.devsnc.com",
      cacheComponents: [
        "sn-embedx-catalog-item-form",
        "sn-embedx-kb-article-view"
      ],
      module: '74917fdf97497210aa6b33611153af7b',
      guestTokenCallback: () => {
        var guestJWTToken = fetchGuestJWTTokenData;
        return Promise.resolve(guestJWTToken);
      },
      authCallback: async () => {
        if (!userIdentifier) {
          console.warn("[Embeddables] No user identifier provided for token");
          return "";
        }
        const token = await generateUserToken(userIdentifier);
        console.log("[Embeddables] authCallback called, token generated:", token);
        return token;
      },
    });


    await SN_EMBEDDABLES.startGuestSession();

     console.error("Error fetching success")
  } catch (err) {
    console.error("[Embeddables] Failed to load or initialize:", err);
  }
}
