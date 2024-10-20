'use client';

import { useRouter } from 'next/navigation';
import { ContactForm } from '@/components/ContactForm';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

interface IDataSubmitProps {
  name: string;
  email: string;
}

export default function CreateContactPage() {
  const router = useRouter();

  const handleSubmit = async ({ name, email }: IDataSubmitProps) => {
    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        body: JSON.stringify({ name, email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        router.push('/');
        router.refresh();
      } else {
        console.error('Failed to create contact');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <>
      <header>
        <Link
          href="/"
          className="text-muted-foreground flex items-center gap-1 text-xs mb-2 dark:hover:text-sky-300 hover:text-sky-600"
        >
          <ArrowLeftIcon className="size-4" />
          <span>Voltar para a lista</span>
        </Link>
        <h1 className="font-semibold text-3xl tracking-tighter">
          Criar contato
        </h1>
      </header>

      <ContactForm onSubmit={handleSubmit} />
    </>
  );
}
