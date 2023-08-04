import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/root-layout";
import ErrorPage from "./layout/notfound";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Blogs from "./components/blogs-list/blogs.screen";
import Blog from "./components/blog/blog.component";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { 
          path: "/blogs?", 
          element: <Blogs /> 
        },
        { 
          path: "/blogs/:blogId", 
          element: <Blog /> 
        },
    
    ],
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
