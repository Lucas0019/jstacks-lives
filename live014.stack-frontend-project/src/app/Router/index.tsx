import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "@/views/pages/Home";
import { CreateUser } from "@/views/pages/CreateUser";
import { routes } from './routes';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={routes.createUser} element={<CreateUser />} />
    </Routes>
  );
};
