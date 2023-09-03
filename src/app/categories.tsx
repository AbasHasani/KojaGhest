import Image from "next/image";
import Link from "next/link";

const categories = [
  { title: "موبایل", image: "/phone.webp" },
  { title: "کتاب", image: "/book.jpg" },
  { title: "خانه", image: "/home.jpg" },
  { title: "ماشین", image: "/car.webp" },
  { title: "لپ تاپ", image: "/category.png" },
  { title: "دوچرخه", image: "/bycicle.jpg" },
];

const Categories = () => {
  return (
    <div className="mb-10">
      <h2 className="text-center font-bold py-8 ">دسته بندی</h2>
      <div className="flex md:justify-center gap-2 md:gap-0 overflow-auto pt-3">
        {categories.map((category, i) => (
          <Link
            href={`/products?category=${category.title}`}
            key={category.title}
            className="min-w-[12rem] transition-all relative h-[17rem] overflow-hidden pt-1 hover:bg-black hover:mx-2 cursor-pointer text-center hover:pt-14 group border-slate-200 shadow"
          >
            <Image
              src={category.image}
              fill
              alt=""
              className="object-cover"
              style={{
                maskImage: "linear-gradient(to bottom, transparent, black)",
              }}
            />
            <p className="relative transition-all bg-black/50 text-white mt-1 group-hover:bg-white/50 group-hover:text-black p-1 py-2 rounded-3xl mx-10">
              {category.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
