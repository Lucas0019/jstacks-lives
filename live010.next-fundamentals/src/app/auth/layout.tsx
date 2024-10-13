interface IAuthLayoutProps {
  readonly children: React.ReactNode;
}


export default function AuthLayout ({
  children
}: Readonly<IAuthLayoutProps>) {
  return (
    <html lang="en">
      <head>
        <title>Auth Layout</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
