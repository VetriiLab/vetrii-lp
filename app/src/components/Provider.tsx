"use client";

import { Providers } from "@/app/providers";

export function Provider({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>;
}
