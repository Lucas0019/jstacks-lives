import type { Metadata } from "next";

interface IArticleProps {
  readonly params: {
    article: string;
  };
}

export const generateMetadata = ({ params }: IArticleProps): Metadata => {
  return {
    title: `Article ${params.article} | Blog`,
    description: `Article ${params.article}`,
  }
};

export default function Article({ params }: IArticleProps)  {
  return (
    <div>
      <h1>Article {params.article}</h1>
    </div>
  );
};
