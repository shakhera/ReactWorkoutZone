import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Layout/Root";
import Categories from "../pages/Categories/Categories";
import Home from "../pages/Home/Home/Home";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/News/News/News";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Categories></Categories>,
        loader: () =>
          fetch(
            "https://the-news-dragon-server-g3jgqqb6c-shakheras-projects.vercel.app/news/"
          ),
      },
      {
        path: "/cetagories/:id",
        element: <Categories></Categories>,
        loader: ({ params }) =>
          fetch(
            `https://the-news-dragon-server-g3jgqqb6c-shakheras-projects.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: "/news/:id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(
            `https://the-news-dragon-server-g3jgqqb6c-shakheras-projects.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);

const Routers = () => {
  return <div></div>;
};

export default Routers;
