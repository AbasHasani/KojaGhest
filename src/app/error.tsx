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
      <button className="bg-red-400 text-red-50 p-2 px-3 rounded" onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default Error;
