"use client";

import AuthService from "@/lib/services/auth-service";
import { useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";

type DataType = {
  name: string;
  userName: string;
  expires: string;
};

interface ContextProps {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
}

const GlobalContext = createContext<ContextProps>({
  userId: "",
  setUserId: (): string => "",
  data: [],
  setData: (): DataType[] => [],
});

export const GlobalContextProvider = ({ children }: any) => {
  // Change this type ASAP
  const [userId, setUserId] = useState<string>("");
  const [data, setData] = useState<DataType[] | []>([]);
  const router = useRouter();

  useEffect(() => {
    const userLoggedIn = AuthService.getCurrentUser();

    if (userLoggedIn) {
      setUserId(userLoggedIn.userId);
      setData([
        {
          name: userLoggedIn.name,
          userName: userLoggedIn.username,
          expires: "Will expire soon",
        },
      ]);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        userId,
        setUserId,
        data,
        setData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
