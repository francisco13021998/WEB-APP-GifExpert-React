import { useState, useEffect } from "react";
import { GifItems } from "./GifItems";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

export const GifGrid = ({ category, itemKey }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
            <div key={ itemKey }>
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


GifGrid.propTypes = {

    category: PropTypes.string.isRequired
}