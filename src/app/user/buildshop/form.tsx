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
import { FC } from "react";
import { prisma } from "@/db";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  highestCredit: z.string(),
  specialContracts: z.string(),
  website: z.string().optional(),
});

interface Props {
  // session: any;
  createShop: (
    name: string,
    highestCredit: string,
    website: string,
    specialContracts: string,
  ) => Promise<void>;
}

export const ProfileForm: FC<Props> = ({ createShop }) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      highestCredit: "",
      specialContracts: "",
      website: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    createShop(
      values.name,
      values.highestCredit,
      values.website || "",
      values.specialContracts,
    );
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">نام فروشگاه</FormLabel>
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
        <FormField
          control={form.control}
          name="highestCredit"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">سقف اعتبار</FormLabel>
              <FormControl>
                <Input placeholder="سقف اعتبار" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="specialContracts"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">قراردادهای خاص</FormLabel>
              <FormControl>
                <Input placeholder="قزارداد های خاص" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize">آدرس وبسایت</FormLabel>
              <FormControl>
                <Input placeholder="وبسایت" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-cyan-400">Submit</Button>
      </form>
    </Form>
  );
};
