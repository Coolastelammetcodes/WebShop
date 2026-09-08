import { useQuery } from "@tanstack/react-query";
import { getMugs } from "./api/mugs";
import Header from "./components/header";
import ProductCard from "./components/productCard";

export default function App() {
  const query = useQuery({
    queryKey: ["mugs"],
    queryFn: getMugs,
  });

  return (
    <>
      <Header></Header>
      {query.data?.map((mug: any) => (
        <ProductCard key={mug.id} product={mug} />
      ))}
    </>
  );
}
