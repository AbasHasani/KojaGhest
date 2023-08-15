import Link from "next/link";
import React from "react";

const categories = ["موبایل", "کتاب", "خانه", "ماشین", "لپ تاپ", "دوچرخه"];

const Categories = () => {
  return (
    <div>
      <h1 className="my-5 font-bold text-lg text-secondary">دسته بندی ها</h1>
      <div className="flex gap-2 px-6 py-3 overflow-auto">
        {categories.map((category, i) => (
          <Link
            className="flex-1"
            href={`/products?category=${category}`}
            key={i}
          >
            <div
              className="flex-1 bg-cover bg-right relative bg-white transition-all flex flex-col justify-between rounded-xl overflow-hidden cursor-pointer hover:-mt-3"
              style={{
                minHeight: "18em",
                minWidth: "10rem",
                height: "100%",
                width: "100%",
                background:
                  "linear-gradient(to top, rgba(255,255,255,0) 0%,  #CCE3EB 80%), url('/category.png') no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center top ",
              }}
            >
              <p className="text-white text-center p-3 text-lg font-bold bg-gradient-to-b from-black to-transparent">
                {category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
