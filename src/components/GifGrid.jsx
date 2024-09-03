import { useState, useEffect } from "react";
import { GifItems } from "./GifItems";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category, key }) => {

    const { images, isLoading } = useFetchGifs( category );

    console.log(isLoading);

    return (
            <div key={key}>
                <h3>{ category }</h3>
                {
                    isLoading && ( <h2>Cargando...</h2> )
                }
                
                <div className="card-grid">
                    {
                        images.map( ( image ) =>( <GifItems key={image.id} { ...image }/> ))
                    }
                </div>
            </div>
    )
}
