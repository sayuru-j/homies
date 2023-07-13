import axios from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_EXPRESS_API;

interface LoginBody {
  email: string;
  password: string;
}

interface RegisterBody extends LoginBody {
  name: string;
  role: string;
}

const login = async ({ email, password }: LoginBody) => {
  const result = await axios.post(`${baseUrl}/auth/login`, {
    email,
    password,
  });

  if (result.status === 200 && result.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(result.data));

    return { success: "Success" };
  } else {
    return { error: result.data.error };
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

const register = async ({ name, email, password, role }: RegisterBody) => {
  const result = await axios.post(`${baseUrl}/auth/register`, {
    name,
    email,
    password,
    role,
  });

  if (result.status === 203) {
    return result.data;
  }

  if (result.status === 200) {
    return { success: "Success" };
  }
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user")!);
};
const AuthService = {
  login,
  logout,
  register,
  getCurrentUser,
};

export default AuthService;
