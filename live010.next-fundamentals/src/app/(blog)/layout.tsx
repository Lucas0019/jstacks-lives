
type BlogLayoutProps = {
  readonly children: React.ReactNode;
};

export default function BlogLayout ({ children }: BlogLayoutProps)  {
  return (
    <div data-page-id="blog">
      {children}
    </div>
  )
}

