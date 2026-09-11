import { Box, Button, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getMugs } from "../api/mugs";

export function Home() {
  const query = useQuery({
    queryKey: ["mugs"],
    queryFn: getMugs,
  });

  return (
    <>
      <Box
        sx={{
          minHeight: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#f0f0f0",
          padding: 4,
          marginBottom: 4,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Discover Our Collection
        </Typography>

        <Typography variant="h6" sx={{ mb: 3 }}>
          Find your perfect mug for every moment.
        </Typography>

        <Button variant="contained">Shop Now</Button>
      </Box>

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
