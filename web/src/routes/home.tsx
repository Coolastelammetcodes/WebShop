import { useQuery } from "@tanstack/react-query";
import { getMugs } from "../api/mugs";

export function Home() {
  const query = useQuery({
    queryKey: ["mugs"],
    queryFn: getMugs,
  });

  return (
    <>
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
