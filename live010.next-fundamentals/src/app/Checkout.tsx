'use client';

type Props = {
  content: React.ReactNode;
}

export const Checkout = ({ content }: Props) => {
  return (
    <div>
      <h1>Checkout</h1>
      {content}
    </div>
  )
}
