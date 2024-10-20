import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="font-semibold text-3xl tracking-tighter">Login</h1>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="rounded-lg border p-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-lg border p-2"
        />
        <button type="submit" className="bg-primary text-white rounded-lg p-2">
          Login
        </button>
      </form>

      <Link
        href="/"
        className="text-muted-foreground flex items-center gap-1 text-xs mb-2 dark:hover:text-sky-300 hover:text-sky-600"
      >
        <ArrowLeftIcon className="size-4" />
        <span>Voltar para a lista</span>
      </Link>
    </div>
  );
}
