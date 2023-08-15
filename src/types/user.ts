export interface User {
  id?: string | undefined;
  name?: string | null | undefined;
  email?: string | undefined;
  emailVerified?: Date | null | undefined;
  number?: string | null | undefined;
  image?: string | null | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
}
