import Link from "next/link";
import type { Metadata } from 'next';


export const metadata: Metadata  = {
  title: "Articles",
  description: "Articles about web development",
};


async function getArticles() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return [
    { id: 1, title: "Article 1" },
    { id: 2, title: "Article 2" },
    { id: 3, title: "Article 3" },
    { id: 4, title: "Article 4" },
    { id: 5, title: "Article 5" },
  ];
}

export default async function Articles() {
  const articles = await getArticles();


  return (
    <section className="p-4 bg-zic-800">
      <h1 className="mb-10 font-extrabold">Articles</h1>
      <div className="grid grid-cols-5 gap-4">
        {articles?.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className="bg-zic-900 border border-zic-700 grid place-items-center h-56 rounded-lg"
          >
            {article.title}
          </Link>
        ))}
      </div>
    </section>
  );
};

