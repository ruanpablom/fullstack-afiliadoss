import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/Layouts";
import { Upload, Sellers, SellerTransactions } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Upload /> },
      { path: "/sellers", element: <Sellers /> },
      { path: "/seller/:id/transactions", element: <SellerTransactions /> },
    ],
  },
]);
