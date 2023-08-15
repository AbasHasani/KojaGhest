"use client";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
interface Props {
  session: Session
}

const SignedIn: FC<Props> = ({ session: {user} }) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  return (
    <div className="relative" style={{ zIndex: 100000000000000 }}>
      <button
        className={`${
          showOptions ? "bg-form-blue" : "bg-dark-blue"
        } text-accent border border-light-blue/30 p-1 px-2 flex items-center justify-around rounded-md`}
        style={{ fontStyle: "dejavu" }}
        onClick={() => setShowOptions((prev) => !prev)}
      >
        <span className="ml-2">{user?.name}</span>
        <Image
          width={30}
          height={30}
          style={{ borderRadius: "50%" }}
          alt=""
          src={user?.image || ""}
        />
        <AiOutlineDown
          className={`mr-2 transition-all ${showOptions ? "rotate-180" : ""}`}
        />
      </button>
      {showOptions && (
        <div className="absolute overflow-hidden left-0 top-full w-full rounded bg-light-blue mt-1 text-black">
          <Link href={`/user`}>
            <button
              className="text-center w-full hover:bg-dark-blue hover:text-light-blue py-2"
              onClick={() => setShowOptions(false)}
            >
              داشبورد
            </button>
          </Link>
          <button
            className="text-center w-full hover:bg-red-500 hover:text-light-blue py-2"
            onClick={() => {
              signOut();
              setShowOptions(false);
            }}
          >
            خروج
          </button>
        </div>
      )}
    </div>
  );
};

export default SignedIn;
