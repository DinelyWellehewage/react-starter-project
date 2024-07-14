import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, //if query fails it will try 3 more times
      cacheTime: 300_000, //5mins - inactive query remove from cahce after 5mins - gc
      staleTime: 10 * 1000, //how long data considered fresh-after 10s data becomes stale
      refetchOnWindowFocus: false,
      refetchOnReconnect: false, //when come offline to online  then refetch query
      refetchOnMount: false, //true-query fetch when component mounted first time
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
