import { useMutation } from "@tanstack/react-query";
import { notifyError, notifySuccess } from "../utils/notify";
import { sleep } from "../utils/sleep";

type RegisterNewPostProps = {
  title: string;
  content: string;
  author: string;
}

export const useCreatePost = () => {
  return useMutation({
    mutationFn: async (
      newPost: RegisterNewPostProps
    ): Promise<RegisterNewPostProps> => {
      await sleep(1500);

      const response = await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newPost),
      });

      return response.json();
    },
    onError: (error) => {
      if (error instanceof Error) {
        notifyError(error.message);
      }
    },
    onSuccess: () => {
      notifySuccess("Post registered successfully");
    },
    onSettled: () => {
      // refetch();
    },
  });
}
