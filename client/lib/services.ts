import axios from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_EXPRESS_API;

interface registerRequestBody {
  name: string;
  email: string;
  password: string;
  role: string;
}

interface loginRequestBody {
  email: string;
  password: string;
}

// Register request handlers
export const registerRequest = async (
  url: string,
  body: registerRequestBody
) => {
  const response = await axios.post(`${baseUrl}${url}`, body);

  if (response.status === 200) {
    return {
      success: response.data?.success,
    };
  } else {
    return {
      error: response.data?.error,
    };
  }
};

// Login request handlers
export const loginRequest = async (url: string, body: loginRequestBody) => {
  const response = await axios.post(baseUrl + url, body);

  if (response.status === 200) {
    localStorage.setItem("User", JSON.stringify(response.data));
    return {
      success: response?.data,
    };
  } else
    return {
      error: response.data?.error,
    };
};

// Logout request handlers
export const logoutRequest = async () => {
  const response = await axios.get(baseUrl + "/user/logout");
  if (response.status === 200) localStorage.removeItem("User");

  return console.log(response.data);
};

// Get current user session
export const getSession = (url: string) => {
  const currentSession = axios.get(baseUrl + url);

  if (currentSession) return currentSession;
};
