"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/app/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { FC, useState } from "react";
import { prisma } from "@/db";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  price: z.string(),
  description: z.string(),
  min: z.string(),
  max: z.string(),
  prepayment: z.string(),
});

interface Props {
  createProduct: (
    description: string,
    name: string,
    price: string,
    min: string,
    max: string,
    prepayment: string,
    providerId: string
  ) => Promise<void>;
  providerId: string;
}

export const ShopForm: FC<Props> = ({ createProduct, providerId }) => {
  const [success, setSuccess] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "",
      description: "",
      max: "",
      min: "",
      prepayment: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    await createProduct(
      values.description,
      values.name,
      values.price,
      values.min,
      values.max,
      values.prepayment,
      providerId
    );
    setSuccess(true);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">نام</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              {/* <FormDescription>
                برای فروشگاه خود نام و ایمیل انتخاب کنید
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">قیمت</FormLabel>
                <FormControl>
                  <Input placeholder="قیمت" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="min"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">حداقل</FormLabel>
                <FormControl>
                  <Input placeholder="حداقل" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="max"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">حداکثر</FormLabel>
                <FormControl>
                  <Input placeholder="حداکثر" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="prepayment"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">پیش پرداخت</FormLabel>
                <FormControl>
                  <Input placeholder="پیش پرداخت" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">توضیحات</FormLabel>
              <FormControl>
                <Input placeholder="اطلاعات" {...field} />
              </FormControl>
              <FormDescription>اطلاعات کالای خود را بنویسید</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
      {success && <p className="bg-emerald-700">Success</p>}
    </Form>
  );
};
