import { buttonVariants } from "@/components/UI/button";
import { Icons } from "@/components/icons";
import { UserLoginForm } from "@/components/user-login-form";
import Link from "next/link";

export const metadata = {
  title: "Login to the application",
  description: "Login to the application",
};

function Login() {
  return (
    <main className="container h-screen w-screen grid lg:grid-cols-2 lg:px-0 lg:max-w-none">
      <Link
        href="/"
        className={`${buttonVariants({
          variant: "ghost",
          size: "sm",
        })} absolute top-4 left-4 md:left-8 md:top-8 lg:text-white bg-transparent`}
        passHref
      >
        <Icons.plus size={16} strokeWidth={2.5} className="rotate-45" />
      </Link>
      <Link
        href="/register"
        className={`${buttonVariants({
          variant: "ghost",
          size: "sm",
        })} absolute top-4 right-4 md:right-8 md:top-8 flex gap-2 border border-accent text-primary/80 hover:text-primary items-center justify-center`}
        passHref
      >
        <Icons.user size={16} strokeWidth={2.5} />
        Sign Up?
      </Link>
      <section className="bg-primary h-full hidden lg:flex flex-col items-center justify-center gap-2"></section>
      <section className="mx-auto flex flex-col w-[300px] h-screen items-center justify-center gap-2">
        <div className="flex flex-col items-center justify-center gap-2 mb-6">
          <Icons.lollipop size={25} className="text-primary animate-pulse" />

          <h1 className="font-medium flex flex-col items-center justify-center gap-2">
            Welcome back!
            <span className="text-xs text-secondary-foreground">
              Log in to access exclusive content.
            </span>
          </h1>
        </div>

        <div className="w-full">
          <UserLoginForm />
        </div>
      </section>
    </main>
  );
}

export default Login;
