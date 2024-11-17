import { Loader } from "lucide-react";


import { usePosts } from "../../hooks/usePosts";
import * as T from "./types";

export const Posts = () => {

  const { data, refetch, isLoading, isFetching } = usePosts();

  return (
    <main className="container mx-auto px-4 h-full">
      <section
        data-content-page-type="posts"
        className="text-center p-4 max-w-3xl mx-auto"
      >
        <h2 className="text-2xl mb-6">Posts</h2>
        <p className="mb-6 text-gray-500 text-lg italic leading-relaxed">
          All posts are fetched from a fake API{" "}
        </p>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => refetch()}
            className="bg-blue-900 text-white px-4 py-2 rounded mb-4 hover:bg-blue-800 flex gap-2 transition-colors"
          >
            {!isLoading && isFetching ? "Refreshing..." : "Refresh"}
            {!isLoading && isFetching && (
              <Loader className="animate-spin" size="1.25em" />
            )}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            {isLoading && (
              <p className="text-gray-400 italic text-sm">
                Loading all posts...
              </p>
            )}
          </div>
          {data?.map((post: T.PostProps) => (
            <article
              key={post.id}
              className="p-4 border border-gray-200 rounded"
            >
              <h2 className="text-xl mb-2">{post.title}</h2>
              <p className="mb-2 text-gray-500">{post.content}</p>
              <p className="text-gray-400 text-sm italic">{post.author}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};
