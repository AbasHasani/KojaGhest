"use client";
const Error = ({
  error,
  reset,
}: {
  error: { message: string };
  reset: () => void;
}) => {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default Error;
