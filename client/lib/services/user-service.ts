import axios from "axios";
import authHeader from "./auth-header";

export const baseUrl = process.env.NEXT_PUBLIC_EXPRESS_API;

const getCurrentUser = () => {};

const getFeed = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/post/feed`, {
      headers: authHeader(),
    });
    return response.data;
  } catch (error) {
    return console.error(error);
  }
};

const UserService = {
  getCurrentUser,
  getFeed,
};

export default UserService;
