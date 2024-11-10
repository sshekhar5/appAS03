import React, { useState, useRef, Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Lazy load your components
const Header = lazy(() => import("./components/Header"));
const InitialInfo = lazy(() => import("./components/mainContent/InitialInfo"));
const Footer = lazy(() => import("./components/Footer"));
const Blogs = lazy(() => import("./components/navigations/Blogs"));
const Collabs = lazy(() => import("./components/navigations/Collabs"));
const Merch = lazy(() => import("./components/navigations/Merch"));
const Portfolio = lazy(() => import("./components/navigations/Portfolio"));
const Reviews = lazy(() => import("./components/navigations/Reviews"));

function App() {
  const [count, setCount] = useState(0);
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    // Wrap the scroll action in React.startTransition
    React.startTransition(() => {
      if (footerRef.current) {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  // Set up the router with both `v7_startTransition` and `v7_fetcherPersist` flags
  const router = createBrowserRouter(
    [
      { path: "/", element: <InitialInfo /> },
      { path: "/blog", element: <Blogs /> },
      { path: "/collab", element: <Collabs /> },
      { path: "/merch", element: <Merch /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/review", element: <Reviews /> },
    ],
    {
      future: {
        v7_startTransition: true, // Enable the startTransition flag
        v7_fetcherPersist: true, // Enable the fetcher persistence flag
      },
    }
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header onContactClick={scrollToFooter} />
      <RouterProvider router={router} />
      <Footer ref={footerRef} />
    </Suspense>
  );
}

export default App;
