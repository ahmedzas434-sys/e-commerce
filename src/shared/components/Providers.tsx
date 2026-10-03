"use client";
import { store } from "@/shared/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { ReactNode } from "react";
import { Provider } from "react-redux";

const client = new QueryClient();
type Props = { children: ReactNode };

export default function Providers({ children }: Props) {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          {children}
          <ReactQueryDevtools position="bottom" initialIsOpen={true} />
        </QueryClientProvider>
      </Provider>
    </>
  );
}
