import { useQuery } from "@tanstack/react-query";

import * as T from "./types";

export const Posts = () => {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: async (): Promise<[]> => {
      const response = await fetch("http://localhost:5000/posts");
      return response.json();
    },
  });

  if (!data) return null;

  return (
    <section data-content-page-type="posts" className="text-center p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl mb-6">Posts</h1>
      <p className="mb-6 text-gray-500 text-lg italic leading-relaxed">
        All posts are fetched from a fake API. The API is built with{" "}
      </p>
      <div className="grid grid-cols-2 gap-4">
        {data?.map((post: T.PostProps) => (
          <article key={post.id} className="p-4 border border-gray-200 rounded">
            <h2 className="text-xl mb-2">{post.title}</h2>
            <p className="mb-2 text-gray-500">{post.content}</p>
            <p className="text-gray-400 text-sm italic">{post.author}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
