import { useQuery } from "@tanstack/react-query";
import { getMugs } from "../api/mugs";
import ProductCard from "./product-card";
import { Grid } from "@mui/material";


export default function ProductList(){
    const query = useQuery({
        queryKey:["mugs"],
        queryFn: getMugs
    });

    if (query.isLoading) {
        return <p>Laddar...</p>;
    }

    if (query.isError) {
        return <p>Fel: {query.error.message}</p>;
    }

    if (!query.data || query.data.length === 0) {
        return <p>Inga mugs hittades.</p>;
    }

    return(
        <Grid>
            {query.data?.map((mug) => (<ProductCard key={mug.id} mug={mug} />))}
        </Grid>
    )
}