import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export const Header = () => {
  const queryClient = useQueryClient();

  const handleMouseEnter = () => {
    queryClient.prefetchQuery({
      queryKey: ["posts"],
      queryFn: async () => {
        const response = await fetch("http://localhost:5000/posts");

        if (!response.ok) {
          throw new Error("An error occurred while prefetching posts");
        }

        return response.json();
      },
    });
  };

  return (
    <header className="bg-gray-800 text-white text-center p-6 mb-6 shadow-md">
      <h1 className="text-2xl font-semibold uppercase">
        React Query in Practice
      </h1>

      <div className="mt-4 flex justify-center">
        <Link
          to="/"
          className="text-blue-400 hover:underline"
          onMouseEnter={handleMouseEnter}
        >
          Home
        </Link>
        <Link to="/about" className="text-blue-400 hover:underline ml-4">
          About
        </Link>
        <Link to="/register-new-post" className="text-blue-400 hover:underline ml-4">
          Register New Post
        </Link>
      </div>
    </header>
  );
};
