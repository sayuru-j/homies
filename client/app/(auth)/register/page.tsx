import { UserRegisterForm } from "@/components/user-register-form";

function Register() {
  return (
    <main className="h-screen w-screen grid lg:grid-cols-2">
      <section className="mx-auto flex w-[350px] h-screen items-center justify-center">
        <div className="w-full">
          <UserRegisterForm />
        </div>
      </section>
      <section className="bg-slate-800 h-full hidden lg:flex"></section>
    </main>
  );
}

export default Register;
