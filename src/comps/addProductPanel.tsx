"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ImAttachment } from "react-icons/im";
const AddProductPanel = ({
  id,
  createProduct,
}: {
  id: string;
  createProduct: (
    name: string,
    description: string,
    providerId: string
  ) => void;
}) => {
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [isManager, setIsManager] = useState(false);
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    if (selectedFile) {
      formData.append("image", selectedFile);
    }
    if (formValues.name && formValues.description) {
      try {
        createProduct(id, formValues.name, formValues.description);
        router.refresh()
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }
  }, [success]);
  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
    console.log(selectedFile);
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="border border-cyan-400/40 shadow-lg shadow-cyan-900/50 rounded-md mt-5 p-5"
      style={{ background: "#13054851" }}
    >
      <div className="flex flex-col mt-2">
        <div className="flex flex-col mb-5">
          <label htmlFor="name" className="mb-2">
            نام محصول
          </label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={(e) => handleInputChange(e)}
            placeholder="یخچال"
            style={{ background: "#050018" }}
            className="rounded-md p-1 outline-none focus:outline-cyan-400 border border-cyan-900/60"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="mb-2">
            توضیحات
          </label>
          <textarea
            name="description"
            placeholder="یخچال دوغلو با پهنای دو متر..."
            value={formValues.description}
            onChange={(e) => handleInputChange(e)}
            style={{ background: "#050018" }}
            className="rounded-md p-1 outline-none focus:outline-cyan-400 border border-cyan-900/60"
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="formFile"
            className="flex items-center p-3 cursor-pointer transition-all hover:bg-dark-blue rounded"
          >
            <span className="ml-3">عکس محصول را وارد کنید</span>
            <ImAttachment
              size={30}
              className="text-white bg-dark-blue rounded p-1 ml-2"
            />
            <span>
              {selectedFile ? selectedFile?.name : "هیچ عکسی وارد نشده است"}
            </span>
          </label>
          <input
            className="hidden"
            type="file"
            id="formFile"
            placeholder="he"
            onChange={handleFileChange}
          />
        </div>
      </div>
      <button className="p-2 px-3 mt-5 bg-light-blue text-dark-blue w-full rounded-md">
        {loading ? <span>بارگذاری...</span> : <span>اضافه کردن</span>}
      </button>
      {success && (
        <button className="p-2 px-3 mt-5 bg-green-500 text-black w-full rounded-md">
          محصول با موفقیت بارگذاری شد!
        </button>
      )}
    </form>
  );
};

export default AddProductPanel;
