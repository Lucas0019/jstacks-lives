import { Router } from "@/app/Router";
import { BrowserRouter, Link  } from "react-router-dom";
import { routes } from './app/Router/routes';

export const App = () => {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to={routes.createUser}>Create User</Link>
      <Router />
    </BrowserRouter>
  );
}

