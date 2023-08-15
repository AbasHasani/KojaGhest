import { AiFillStar, AiOutlineFlag } from "react-icons/ai";
import { MdOutlineKeyboardArrowLeft, MdLocationOn } from "react-icons/md";
const OnlineShops = ({loans}:any) => {
  return (
    <div className="flex flex-col gap-5 border p-5 rounded mt-3">
      <div className="flex justify-between">
        <p className="font-bold text-lg">فروشنده ها</p>
        <p className="text-red-500">راهنمای خرید امن</p>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col items-center justify-center rounded-2xl border p-2">
          <p>تمام ایران</p>
          <p>از 39,000,000</p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl border p-1">
          <p className="flex items-center">
            انتخاب شهر شما <MdOutlineKeyboardArrowLeft />
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex border-b">
          <p className="border-b-2 border-black p-2">خرید اینترنتی 34</p>
          <p className="p-2">خرید حضوری 21</p>
        </div>
        <div>
          {loans
            .map((loan: any) => (
              <div key={loan.id} className="grid grid-cols-3 gap-5 p-3 border-b">
                <div className="ml-40">
                  <p className="font-bold text-lg text-black">{loan.providerId}</p>
                  <p className="font-light text-sm text-gray-600">تهران</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <p className="flex items-center gap-1 bg-green-200 rounded">
                      <AiFillStar size={20} />
                      <span>5 (5سال در کجا قسط)</span>
                    </p>
                    <div className="flex items-center">
                      <AiOutlineFlag size={25} />
                      <p className="text-sm mr-2">گزارش</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl">قراره گوشی باشه با قیمت متفاوت</p>
                    <p className="text-sm text-gray-600 font-light">
                      رجیستر شده | 18 ماهه دیجی سرویس
                    </p>
                    <p className="flex items-center">
                      <MdLocationOn size={20} />
                      <span className="font-light">
                        آیا امکان پرداخت در محل من وجود دارد؟
                      </span>
                      <MdOutlineKeyboardArrowLeft size={20} />
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <p className="bg-blue-600 text-white px-2 py-1 rounded">
                    آگهی
                  </p>
                  <p className="text-red-500">{loan.percent}</p>
                  <p className="bg-red-500 text-white px-2 py-1 rounded">
                    خرید اینترنتی
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineShops;
