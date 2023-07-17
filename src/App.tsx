import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/root-layout";
import ErrorPage from "./layout/notfound";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
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
