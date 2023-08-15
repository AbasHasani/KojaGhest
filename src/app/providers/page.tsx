import { prisma } from "@/db";
import Options from "./options";
import Provider from "./provider";
import SideBar from "./siebarOptions";

const providers = [
  {
    name: "لندو",
    image: "/p1.jpg",
    id: 1,
    highestCredit: 500000,
    specialContracts: "فرهنگیان",
    website: "www.lendo.ir",
  },
  {
    name: "ازکی",
    image: "/p2.jpg",
    id: 1,
    highestCredit: 2000000,
    specialContracts: "فرهنگیان",
    website: "www.azki.ir",
  },
  {
    name: "بانک آینده",
    image: "/p3.jpg",
    id: 1,
    highestCredit: 2000000,
    specialContracts: "فرهنگیان",
    website: "www.furutrebank.ir",
  },
  {
    name: "بانک ملت",
    image: "/p4.jpg",
    id: 1,
    highestCredit: 3000000,
    specialContracts: "فرهنگیان",
    website: "www.mellat.ir",
  },
];

const Page = async () => {
  const options = [
    "پربازدید ترین ها",
    "بیشترین مبلغ",
    "کمترین مبلغ",
    "پیشنهاد وام گیرندگان",
  ];
  // const providers = await prisma.provider.findMany();
  const getu = await new Promise((res, rej) => setTimeout(() => res(""), 2000));

  return (
    <div className="flex gap-2 items-start mt-5">
      <SideBar />
      <div className="flex-1">
        {/* <div className="flex justify-around border border-info/20 p-3 rounded"> */}
        <Options options={options} />
        {/* </div> */}
        <div>
          {providers.map((provider) => (
            <Provider {...provider} key={provider.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
