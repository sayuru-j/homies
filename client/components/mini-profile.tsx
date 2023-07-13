import Link from "next/link";
import { buttonVariants } from "./UI/button";
import { useGlobalContext } from "@/context/store";
import AuthService from "@/lib/services/auth-service";
import { Icons } from "./icons";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";

interface UserDataBody {
  name: string;
  userName: string;
  expires: string;
}

export default function MiniProfile() {
  const { userId, data } = useGlobalContext();
  const router = useRouter();
  let userdata: UserDataBody = data[0];

  const handlePopup = () => {
    AuthService.logout();
  };

  return (
    <div>
      {userId ? (
        <button
          onClick={handlePopup}
          type="button"
          className="flex items-center gap-2"
        >
          <h1 className="text-xs font-bold">{userdata.userName}</h1>
          <Image
            className="w-10 h-10 object-cover rounded-2xl"
            width={1000}
            height={1000}
            src="https://i.pinimg.com/564x/12/45/25/124525319c94aec9115d892f5578592c.jpg"
            alt=""
          />
        </button>
      ) : (
        <button
          onClick={() => router.push("/login")}
          type="button"
          className={buttonVariants({
            size: "sm",
            variant: "ghost",
            className: "inline-flex gap-2",
          })}
        >
          Log In
          <Icons.ghost size={22} />
        </button>
      )}
    </div>
  );
}
