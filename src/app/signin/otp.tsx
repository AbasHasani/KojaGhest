"use client";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { signIn } from "next-auth/react";
import { useToast } from "@/app/components/ui/use-toast";
import moment from "moment";

const OTP = () => {
  const [hasRequested, setHasRequested] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 120 seconds = 2 minutes
  const [number, setNumber] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    setTimeLeft(120);
  }, [hasRequested]);
  useEffect(() => {
    let timerInterval: any;

    const startTimer = () => {
      timerInterval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    };

    if (timeLeft > 0) {
      startTimer();
    }

    return () => clearInterval(timerInterval); // Clean up the interval on unmount
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  useEffect(() => {
    if (timeLeft === 0) {
      // Perform the action when the timer reaches zero
      // Your custom function goes here
      //   console.log("Time is up!");
      setHasRequested(false);
    }
  }, [timeLeft]);
  return (
    <div
      className={`flex translate-x-[${hasRequested ? 100 : 0}%] transition-all`}
    >
      <div className="min-w-full flex flex-col gap-3 justify-around items-center p-3">
        <p>شماره موبایل خود را وارد کنید</p>
        <Input
          placeholder="شماره موبایل..."
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <Button
          onClick={() => {
            if (number.length != 11) return;
            setHasRequested(true);

            toast({
              title: "کد به شماره شما ارسال شد",
              description: moment().format("yyyy:mm:dd"),
            });
          }}
        >
          Next
        </Button>
        {number.length}
      </div>{" "}
      <div className="min-w-full flex flex-col justify-around items-center p-3">
        <p>کدی که دریافت کردید را وارد کنید</p>
        <Input className="text-center w-1/2" />
        <div className="flex gap-2">
          <Button onClick={() => setHasRequested(false)}>
            {formatTime(timeLeft)}
          </Button>
          <Button
            onClick={() => {
              signIn("credentials", { number, callbackUrl: "/" });
            }}
          >
            ورود
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OTP;
