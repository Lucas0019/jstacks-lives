import { Loader } from "lucide-react";

import { useCreatePost } from "../../hooks/useCreatePost";
import { notifyError } from "../../utils/notify";

export const RegisterNewPost = () => {
  const { mutateAsync, isPending } = useCreatePost();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newPost = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      author: formData.get("author") as string,
    };

    if (!newPost.title || !newPost.content || !newPost.author) {
      notifyError("All fields are required");
      return;
    }
    await mutateAsync(newPost);
  };

  return (
    <section className="container mx-auto px-4 h-full">
      <h2 className="text-2xl mb-6 text-center">Register New Post</h2>
      <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-500"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-600"
            placeholder="Title"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-500"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows={3}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-600"
            placeholder="Content"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-500"
          >
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-600"
            placeholder="Author"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-900 text-white px-4 py-2 rounded mb-4 hover:bg-blue-800 flex gap-2 transition-colors"
        >
          {isPending ? "Registering..." : "Register Post"}
          {isPending && <Loader className="animate-spin" size="1.25em" />}
        </button>
      </form>
    </section>
  );
};
