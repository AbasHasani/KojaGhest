import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function ToPersianNumber(n: number | string | bigint) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return n
    .toString()
    .split("")
    .map((x: any) => farsiDigits[x])
    .join("");
}


export const truncateString = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) {
    return str; // Return the string as is if it's already shorter or equal to the maximum length
  } else {
    return str.substring(0, maxLength) + "..."; // Truncate the string and add ellipsis
  }
};