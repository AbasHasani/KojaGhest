"use client";
import { Carousel } from "@mantine/carousel";
import { rem } from "@mantine/core";
import Image from "next/image";
import { useRef, useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import SearchBar from "./searchBar";
const Events = () => {
  const imgPaths = ["/p8.jpg", "/p9.jpg", "/p10.jpg"];

  return (
    <div className="fullScreenMarginRight w-screen">
      <SearchBar />
      <div className="relative overflow-hidden rounded-lg -mt-[12rem] z-10">
      {/* <h1 className="text-center p-3 text-lg font-bold">جشنواره ها</h1> */}
        <Carousel
          className="w-full"
          mx="auto"
          withIndicators
          // onChange={(e)=> console.log(e)}
          onSlideChange={(e) => console.log(e)}
          height={700}
          styles={{
            indicator: {
              width: rem(12),
              height: rem(4),
              transition: "width 250ms ease",

              "&[data-active]": {
                width: rem(40),
              },
            },
            control: {
              "&[data-inactive]": {
                opacity: 0,
                cursor: "default",
              },
              margin: "0 5rem"
            },
          }}
        >
          {imgPaths.map((path) => (
            <Carousel.Slide key={path}>
              <div className="relative min-w-full h-full bg-green-400/20">
                <Image
                  quality={100}
                  unoptimized={true}
                  style={{maskImage: "linear-gradient(to bottom, transparent, white)"}}
                  src={path}
                  className="min-w-full h-full -z-10 object-cover"
                  fill
                  alt=""
                />
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Events;
