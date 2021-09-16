import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Marvel', 'DC']);

    return (
        <>
            <div className="container-header ">
                <h1>GifExpertApp</h1>
                <AddCategory setCategories={setCategories} />
            </div>
            <hr />
            <div className="category">
                {
                    categories.map(category => <GifGrid key={category} category={category} />)
                }
            </div>
        </>
    )
}

export default GifExpertApp;