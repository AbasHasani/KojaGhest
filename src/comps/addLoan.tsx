"use client";
// import { CreateLoanArgs } from "@/app/user/[name]/page";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";

interface Props {
  id: string,
  productId: string,
  productMinMax: {min: number, max: number},
  loans: number,
  productPrepayment: number,
  createLoan: (args: any) => void,
}

const AddLoan: FC<Props> = ({
  id,
  productId,
  productMinMax,
  loans,
  productPrepayment,
  createLoan,
}) => {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    min: "",
    max: "",
    prepayment: "",
    percent: "",
  });
  const [isManager, setIsManager] = useState(false);
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formValues.min &&
      formValues.max &&
      formValues.prepayment &&
      formValues.percent
    ) {
      //   axios
      //     .post(`/api/createOfferedLoan`, {
      //       ...formValues,
      //       userId: id,
      //       productId,
      //       productMin: productMinMax.min || 0,
      //       productMax: productMinMax.max || 0,
      //       loans,
      //       productPrepayment,
      //     })
      //     .then(({ data }) => {
      //       console.log(data);
      //       //   fetchLoans();
      //     })
      //     .catch(console.log);
      const { max, min, percent, prepayment } = formValues;
      createLoan({
        max: Number(max),
        min: Number(min),
        prepayment: Number(prepayment),
        percent: Number(percent),
        productId,
        providerId: id,
        loans: loans,
        pPrepayment: productPrepayment,
        pMax: productMinMax.max,
        pMin: productMinMax.min
    });
      router.refresh();
    }
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="border border-cyan-400/40 shadow-lg text-white shadow-cyan-900/50 rounded-md mt-5 p-5"
      style={{ background: "#0a002f" }}
    >
      <div className="grid grid-cols-2 gap-3 mt-2">
        <div className="flex flex-col mb-5">
          <label htmlFor="min" className="mb-2">
            حداقل
          </label>
          <input
            type="text"
            name="min"
            value={formValues.min}
            onChange={(e) => handleInputChange(e)}
            placeholder="حداقل"
            style={{ background: "#050018" }}
            className="rounded-md p-1 outline-none focus:outline-cyan-400 border border-cyan-900/60"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="max" className="mb-2">
            حداکثر
          </label>
          <input
            name="max"
            placeholder="حداکثر"
            value={formValues.max}
            onChange={(e) => handleInputChange(e)}
            style={{ background: "#050018" }}
            className="rounded-md p-1 outline-none focus:outline-cyan-400 border border-cyan-900/60"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="prepayment" className="mb-2">
            پیش پرداخت
          </label>
          <input
            name="prepayment"
            placeholder="پیش پرداخت"
            value={formValues.prepayment}
            onChange={(e) => handleInputChange(e)}
            style={{ background: "#050018" }}
            className="rounded-md p-1 outline-none focus:outline-cyan-400 border border-cyan-900/60"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="prepayment" className="mb-2">
            سود
          </label>
          <input
            name="percent"
            placeholder="سود"
            value={formValues.percent}
            onChange={(e) => handleInputChange(e)}
            style={{ background: "#050018" }}
            className="rounded-md p-1 outline-none focus:outline-cyan-400 border border-cyan-900/60"
          />
        </div>
      </div>
      <button className="p-2 px-3 mt-5 bg-light-blue text-dark-blue w-full rounded-md">
        اضافه کردن
      </button>
    </form>
  );
};

export default AddLoan;
