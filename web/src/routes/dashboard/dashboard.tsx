import Breadcrumbs from "../../components/breadcrumbs";
import { AddProductForm } from "./addProductForm";
import { DisplayProducts } from "./displayProducts";

export function Dashboard() {
  return (
    <>
      <Breadcrumbs currentPage="Admin" />

      <h1>Dashboard</h1>
      <AddProductForm />
      <DisplayProducts />
    </>
  );
}
