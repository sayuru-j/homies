import { buttonVariants } from "@/components/UI/button";
import { Icons } from "@/components/icons";
import { UserRegisterForm } from "@/components/user-register-form";
import Link from "next/link";

export const metadata = {
  title: "Create an account",
  description: "Create an account to get started",
};

function Register() {
  return (
    <main className="container h-screen w-screen grid lg:grid-cols-2 lg:px-0 lg:max-w-none">
      <Link
        href="/login"
        className={`${buttonVariants({
          variant: "ghost",
          size: "sm",
        })} absolute top-4 left-4 md:left-8 md:top-8 flex gap-2 border border-accent text-primary/80 hover:text-primary items-center justify-center`}
        passHref
      >
        <Icons.key size={16} strokeWidth={2.5} />
        Login
      </Link>
      <section className="mx-auto flex flex-col w-[300px] h-screen items-center justify-center gap-2">
        <div className="flex flex-col items-center justify-center gap-2 mb-6">
          <Icons.ghost size={25} className="text-primary animate-pulse" />

          <h1 className="font-medium flex flex-col items-center justify-center gap-2">
            Welcome to our platform!
            <span className="text-xs text-secondary-foreground">
              Create your account and start exploring.
            </span>
          </h1>
        </div>

        <div className="w-full">
          <UserRegisterForm />
        </div>
      </section>
      <section className="bg-primary h-full hidden lg:flex flex-col items-center justify-center gap-2"></section>
    </main>
  );
}

export default Register;
