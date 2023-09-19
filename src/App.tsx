import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Blogs from "./components/blogs-list/blogs.screen";
import Blog from "./components/blog/blog.component";
import LogInComponent from "./components/login/login.component";
import ErrorPage from "./layout/notfound.component";
import RootLayout from "./layout/root-layout.component";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/blogs?",
          element: <Blogs />,
        },
        {
          path: "/blogs/:blogId",
          element: <Blog />,
        },
      ],
    },
    {
      path: "/login",
      element: <LogInComponent />,
    },
  ]);

  const theme = createTheme({
    direction: "rtl",
    typography: {
      fontFamily: "IRANYekanX",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
