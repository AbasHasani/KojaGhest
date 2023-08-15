import Image from "next/image";
import Link from "next/link";

const Categories = async () => {
  const categories = [
    {
      title: "موبایل",
      items: ["آیفون", "سامسونگ", "شیایومی", "هوآوی", "نوکیا", "ال جی"],
      image: "/phone.webp",
    },
    {
      title: "کنسول بازی",
      items: ["PS5", "PS4", "XBOX"],
      image: "/xbox.avif",
    },
    {
      title: "سرمایشی کولر",
      items: ["کولر گازی", "کولر آبی"],
      image: "/airconditioner.jpg",
    },
  ];
  const getu = await new Promise((res, rej) => setTimeout(() => res(""), 2000));

  return (
    <div className="flex flex-col md:flex-row justify-center mt-5 mx-10 md:mx-0">
      {categories.map(({ title, items, image }) => (
        <div key={title} className="md:hover:mx-3 mb-3 md:mb-0 transition-all border-r border-white rounded md:rounded-none">
          <div className="relative w-full md:w-[15rem] h-[7rem] transition-all group flex justify-center items-end p-2 hover:bg-black/80 overflow-hidden mb-3">
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
              style={{
                maskImage: "linear-gradient(to bottom, black, transparent)",
              }}
            />
            <p className="relative transition-all group-hover:bg-white/30 group-hover:text-white p-1 px-3 rounded-3xl mx-10">
              {title}
            </p>
          </div>
          <div className="flex flex-col">
          {items.map((item) => (
            <Link
            key={item}
            href={`/products?category=${item}`}
            className="cursor-pointer text-center py-2 bg-black/10 hover:bg-black/20 transition-all"
            >
              {item}
            </Link>
          ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
