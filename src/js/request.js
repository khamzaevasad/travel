import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://json-api.uz/api/project/axios",
});

export async function getData(url) {
  if (!url || !url.trim()) {
    throw new Error("No url provided");
  }

  try {
    // loading(true)
    const response = await axiosInstance.get(url);
    // loading(false)
    return response.data;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
}
