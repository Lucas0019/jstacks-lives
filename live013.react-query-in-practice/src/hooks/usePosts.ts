import { useQuery } from "@tanstack/react-query";
import { notifyError } from "../utils/notify";
import { sleep } from "../utils/sleep";

export const usePosts = () => {

  return useQuery({
    enabled: true,
    queryKey: ["posts"],
    queryFn: async (): Promise<[]> => {
      await sleep(1500);
      const response = await fetch("http://localhost:5000/posts");

      if (!response.ok) {
        notifyError("An error occurred while fetching posts");
        throw new Error("An error occurred while fetching posts");
      }

      return response.json();
    },
  });
};
