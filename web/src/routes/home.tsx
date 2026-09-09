import { useQuery } from "@tanstack/react-query";
import { getMugs } from "../api/mugs";

export function Home() {
  const query = useQuery({
    queryKey: ["mugs"],
    queryFn: getMugs,
  });

  return (
    <>
      {/* placeholder länk för routing, detta kanske ska ligga i header?? */}
      <a href="/admin">go to admin page</a>

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
