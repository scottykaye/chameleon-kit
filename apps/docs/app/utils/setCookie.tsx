"use server";

import { cookies } from "next/headers";

export async function setCookieAction({
  key,
  value,
}: {
  key: string;
  value: string;
}) {
  const cookiesList = await cookies();
  cookiesList.set(key, value, {
    maxAge: 3600,
    httpOnly: true,
  });

  return { success: true };
}
