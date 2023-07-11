import axios from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_EXPRESS_API;

interface registerRequestBody {
  name: string;
  email: string;
  password: string;
  role: string;
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
