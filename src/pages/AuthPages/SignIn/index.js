import LoginCard from "./LoginCard";

function SignIn() {
  return (
    <>
      <section
        className={`relative min-h-[100vh] max-w-[100vw] overflow-y-auto flex flex-col items-center justify-center lg:space-y-14 space-y-[50px] px-4`}
      >
        <div className="flex flex-col items-center space-y-2 lg:space-y-3">
          <img
            src="/assets/caaryaLogos/logo.png"
            alt=""
            className="w-16 h-16 lg:w-20 lg:h-20"
          />
          <p className="font-poppins text-3xl lg:text-5xl font-semibold text-primary-magenta-medium">
            Founders Dictionary
          </p>
        </div>
        <LoginCard />
      </section>
    </>
  );
}

export default SignIn;
