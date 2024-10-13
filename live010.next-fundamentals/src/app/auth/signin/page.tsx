import Link from 'next/link';

export default function SignIn () {
  return (
    <section>
      <h2 className="text-2xl font-bold">SignIn</h2>
      <Link href="/auth/signup">SignUp</Link>
    </section>
  )
}


