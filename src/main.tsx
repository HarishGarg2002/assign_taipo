import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import ContactLayout from "./components/ContactLayout.tsx";
import AddContactPage from "./pages/AddContactPage.tsx";
import UserContact from "./pages/UserContact.tsx";
import MapLayout from "./components/MapLayout.tsx";
import StatsPage from "./pages/StatsPage.tsx";
import CountryWisePage from "./pages/CountryWisePage.tsx";
import DailyData from "./pages/DailyData.tsx";
import CountryData from "./pages/CountryData.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import StoreProvider from "./redux/StoreProvider.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./redux/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // redirect to /contact/add-contact
    children: [
      {
        path: "/contact",
        element: <ContactLayout />,
        children: [
          {
            path: "add-contact",
            element: <AddContactPage />,
          },
          {
            path: ":userId",
            element: <UserContact />,
          },
        ],
      },
      {
        path: "charts-maps",
        element: <MapLayout />,
        children: [
          {
            path: "stats",
            element: <StatsPage />,
          },
          {
            path: "country-wise-data",
            element: <CountryWisePage />,
          },
          {
            path: "daily-data",
            element: <DailyData />,
          },
          {
            path: ":country",
            element: <CountryData />,
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <QueryClientProvider client={queryClient}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </StoreProvider>
  </React.StrictMode>
);
