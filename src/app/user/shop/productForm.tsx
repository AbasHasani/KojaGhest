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
  min: z.string(),
  max: z.string(),
  percent: z.string(),
  prepayment: z.string(),
});

interface Props {
  createLoan: (
    min: string,
    max: string,
    prepayment: string,
    percent: string,
    productId: string,
    providerId: string
  ) => Promise<void>;
  providerId: string;
  productId: string
}

export const ProductForm: FC<Props> = ({createLoan,providerId, productId }) => {
  const [success, setSuccess] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      percent: "",
      max: "",
      min: "",
      prepayment: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    await createLoan(values.min, values.max, values.percent, values.prepayment, providerId, productId);
    setSuccess(true);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-5">
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="min"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">حداقل</FormLabel>
                <FormControl>
                  <Input className="bg-accent border-0" placeholder="حداقل" {...field} />
                </FormControl>
                {/* <FormDescription>
                برای فروشگاه خود نام و ایمیل انتخاب کنید
              </FormDescription> */}
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
                  <Input className="bg-accent border-0" placeholder="حداکثر" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="percent"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">سود</FormLabel>
                <FormControl>
                  <Input className="bg-accent border-0" placeholder="سود" type="number" {...field} />
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
                  <Input className="bg-accent border-0" placeholder="پیش پرداخت" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
      {success && <p className="bg-emerald-700">Success</p>}
    </Form>
  );
};
