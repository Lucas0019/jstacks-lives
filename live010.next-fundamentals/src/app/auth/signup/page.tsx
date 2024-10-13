import Link from 'next/link';

export default function SignUp () {
  return (
    <section>
      <h2 className="text-2xl font-bold">SignUp</h2>
      <Link href="/auth/signin">SignIn</Link>
    </section>
  )
}

