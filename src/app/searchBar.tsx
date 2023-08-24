"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Input, Tooltip } from "@mantine/core";
import { Button } from "@mantine/core";

const brands = [
  { name: "Samsung mobile" },
  { name: "Samsung TV" },
  { name: "LG mobile" },
  { name: "LG laundrary" },
];

const SearchBar = () => {
  const router = useRouter();
  const [productValue, setProductValue] = useState("");
  const search = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productValue) {
      router.push(`/products`);
      return;
    }
    router.push(`/products/${productValue}`);
  };

  return (
    <div className="w-full flex flex-col items-center justify-around md:px-2 relative z-20">
      <p className="font-extrabold md:text-3xl text-xl mb-10 text-center">
        سایتی برای پیدا کردن وام های مردمی
      </p>
      <Input
        className="md:w-1/3 w-[80%]"
        icon={<FiSearch />}
        placeholder="نام محصول ..."
        onChange={(e)=> setProductValue(e.target.value)}
        rightSection={
          <div className="m-2">
            <Button
              className="m-2"
              variant="gradient"
              onClick={(e)=> search(e)}
              gradient={{ from: "indigo", to: "cyan" }}
            >
              جستجو
            </Button>
          </div>
        }
      />
      <div className="w-full mt-5 text-center" style={{ maxWidth: "30em" }}>
        دیگه لازم نیست دنبال وام از جاهای مختلف بگردی با کجا قسط هر قسطی با هر
        شرایطی رو میتونی اینجا پیدا کنی
      </div>
    </div>
  );
};

export default SearchBar;
