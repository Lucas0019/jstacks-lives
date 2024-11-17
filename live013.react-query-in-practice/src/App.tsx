import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from 'react-toastify';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { NotFound } from "./components/NotFound";
import { Posts } from "./components/Posts";

import 'react-toastify/dist/ReactToastify.css';
import { RegisterNewPost } from "./components/RegisterNewPost";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      gcTime: 10 * 60 * 1000, // 10 minutes
      refetchOnWindowFocus: false,
      retry: false,
    }
  }
});

export const App = () => {



  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/about" element={<About/>} />
          <Route path="/register-new-post" element={<RegisterNewPost/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>

        <ReactQueryDevtools buttonPosition="bottom-left" position="left" />
      </BrowserRouter>
      <ToastContainer />
    </QueryClientProvider>
  );
};
