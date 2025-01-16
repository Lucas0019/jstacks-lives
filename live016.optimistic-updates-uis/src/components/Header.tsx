import { ThemeSwitcher } from './ThemeSwitcher';

export const Header = () => {
  return (
    <header className="flex items-center justify-between" data-header>
      <div>
        <h1 className="font-bold text-3xl -tracking-wider">Users</h1>
        <small className="text-muted-foreground">
          Gerencie os seus usuários.
        </small>
      </div>

      <ThemeSwitcher />
    </header>
  );
};
