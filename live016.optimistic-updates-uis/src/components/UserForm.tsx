import { useCreateUser } from '@/app/hooks/useCreateUser';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

export const UserForm = () => {
  const [formData, setFormData] = useState({ name: '', username: '' });
  const { createUser, isLoading } = useCreateUser();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await createUser({ ...formData, blocked: false });
      setFormData({ name: '', username: '' });
      toast.success('Usuário cadastrado com sucesso!');
    } catch {
      toast.error('Erro ao cadastrar o usuário!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-muted/70 p-4 rounded-md">
      <div className="flex gap-3">
        <Input
          name="name"
          placeholder="Nome do usuário"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isLoading}
        />
        <Input
          name="username"
          placeholder="@ no GitHub"
          value={formData.username}
          onChange={handleChange}
          required
          disabled={isLoading}
        />
      </div>
      <Button type="submit" className="mt-3 w-full">
        Cadastrar
      </Button>
    </form>
  );
};
