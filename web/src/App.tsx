import { useQuery } from "@tanstack/react-query";
import { getMugs } from "./api/mugs";
import Header from "./components/header";

export default function App() {
  const query = useQuery({
    queryKey: ["mugs"],
    queryFn: getMugs,
  });

  console.log(query);

  return (
    <>
      <Header></Header>
      <button onClick={() => query.refetch()}>test</button>
      <div>
        {query.data?.map((mug: any, index: any) => (
          <div key={index}>
            <p>{mug.name}</p>
            <img src={mug.filepath} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
