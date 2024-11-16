import { QueryClient, QueryClientProvider, } from "@tanstack/react-query";
import { Posts } from "./components/Posts";

const queryClient = new QueryClient();

export const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Posts/>
    </QueryClientProvider>
  );
};
