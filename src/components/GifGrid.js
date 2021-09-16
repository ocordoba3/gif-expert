import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs(category);

    return (
        <>
            <h1><i>{ category }</i></h1>

            { loading && <div className="animate__animated animate__flash">
                            <h2><i className="fas fa-spinner fa-spin" /> Cargando...</h2>
                         </div>}

            <div className="grid-card">
                {
                    data.map( img => {
                        return (
                            <GifGridItem key={img.id} {...img} />
                        )
                    })
                }
            </div>
            
        </>
    )
}
