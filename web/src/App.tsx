import { useQuery } from "@tanstack/react-query";
import { getMugs } from "./api/mugs";
import Header from "./components/header";
import ProductCard from "./components/product-card";

export default function App() {
  const query = useQuery({
    queryKey: ["mugs"],
    queryFn: getMugs,
  });

  return (
    <>
      <Header></Header>
      <div>
        {query.data?.map((mug) => (
          <ProductCard key={mug.id} mug={mug}/>
        ))}
      </div>
      <button onClick={() => query.refetch()}>test</button>
    </>
  );
}
