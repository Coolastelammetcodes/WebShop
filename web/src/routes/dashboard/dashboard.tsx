import { useAtom } from "jotai";
import { selectedMugAtom } from "../../atoms/dialog";
import Breadcrumbs from "../../components/breadcrumbs";
import { AddProductForm } from "./addProductForm";
import { DisplayProducts } from "./displayProducts";
import { EditProductForm } from "./editProductForm";

export function Dashboard() {
  const [selectedMug] = useAtom(selectedMugAtom);

  return (
    <>
      <Breadcrumbs currentPage="Admin" />
      <h1>Dashboard</h1>
      <AddProductForm />
      {selectedMug && <EditProductForm mug={selectedMug} />}
      <DisplayProducts />
    </>
  );
}
