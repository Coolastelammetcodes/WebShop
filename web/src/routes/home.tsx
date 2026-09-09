import { useQuery } from "@tanstack/react-query";
import { getMugs } from "../api/mugs";

export function Home() {
  const query = useQuery({
    queryKey: ["mugs"],
    queryFn: getMugs,
  });

  return (
    <>
      {/* placeholder länkar för routing, detta kanske ska ligga i header?? */}
      <a href="/admin" style={{ marginRight: "12px" }}>
        go to admin page
      </a>
      <a href="/shopping-cart" style={{ marginRight: "12px" }}>
        go to shopping-cart
      </a>

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
