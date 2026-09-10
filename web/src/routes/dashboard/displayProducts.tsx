import { useQuery } from "@tanstack/react-query";
import { getMugs } from "../../api/mugs";

export function DisplayProducts() {
  const query = useQuery({
    queryKey: ["mugs"],
    queryFn: getMugs,
  });

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {query.data?.map((mug: any, index: any) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "400px",
              maxHeight: "400px",
              backgroundColor: "#2e2e2e",
              padding: "1em",
              margin: "0.5em",
            }}
          >
            <img
              src={mug.filepath}
              onClick={() => console.log("click")}
              alt="a mug"
              style={{
                maxWidth: "250px",
                maxHeight: "250px",
              }}
            />
            <div style={{ width: "100%" }}>
              <p>product name: {mug.name}</p>
              <p>product description: {mug.description}</p>
              <p>product price: {mug.price}:-</p>
            </div>

            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <button onClick={() => console.log("nothing here yet..")}>
                edit
              </button>
              <button onClick={() => console.log("nothing here yet..")}>
                remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
