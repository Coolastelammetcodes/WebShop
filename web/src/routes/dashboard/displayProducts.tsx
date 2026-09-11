import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteMug, getMugs } from "../../api/mugs";

export function DisplayProducts() {
  const fetchQuery = useQuery({
    queryKey: ["mugs"],
    queryFn: getMugs,
  });

  const queryClient = useQueryClient();

  const deleteQuery = useMutation({
    mutationFn: deleteMug,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mugs"] });
    },
  });

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {fetchQuery.data?.map((mug: any) => (
          <div
            key={mug.id}
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
              <button onClick={() => deleteQuery.mutate(mug.id)}>
                {deleteQuery.isPending ? "deleting" : "delete"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
