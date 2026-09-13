import { useQuery } from "@tanstack/react-query";
import { getMugs } from "../api/mugs";
import { Fragment } from "react/jsx-runtime";
import ProductCard from "./product-card";


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
        <Fragment>
            <div>
                {query.data?.map((mug) => (<ProductCard key={mug.id} mug={mug} />))}
            </div>
        </Fragment>
    )
}