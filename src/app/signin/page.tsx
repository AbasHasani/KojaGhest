import OTP from "./otp";

const Page = () => {
  return (
    <div className="grid place-items-center mt-20">
      <div className="border rounded w-[20rem] overflow-hidden">
        <OTP />
      </div>
    </div>
  );
};

export default Page;
