import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Router as RemixRouter } from "@remix-run/router/dist/router";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

interface RouterBase {
  id: number; // 페이지 아이디 (반복문용 고유값)
  path: string; // 페이지 경로
  label: string; // 사이드바에 표시할 페이지 이름
  element: React.ReactNode; // 페이지 엘리먼트
}

export const routerData: RouterBase[] = [
  {
    id: 0,
    path: "/",
    label: "home",
    element: <Home />,
  },
  {
    id: 1,
    path: "/aboutme",
    label: "aboutme",
    element: <AboutMe />,
  },
  {
    id: 2,
    path: "/projects",
    label: "projects",
    element: <Projects />,
  },
  {
    id: 3,
    path: "/contact",
    label: "contact",
    element: <Contact />,
  },
];

export const routers: RemixRouter = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: router.element,
      errorElement: <NotFound />,
    };
  }),
);
