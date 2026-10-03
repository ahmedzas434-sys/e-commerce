import SignupForm from "../components/SignupForm";
import SignupHero from "../components/SignupHero";

export default function SignUpScreen() {
  return (
    <>
      <div className="container grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2">
        <SignupHero />
        <SignupForm />
      </div>
    </>
  );
}
