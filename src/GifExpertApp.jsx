import { AddCategory, GifGrid } from "./components";
import { useState } from "react";

const APIKey = "D4Spj1Y8pqp8ZrSt2yQ8jBs5YIUuXY8B";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ ]);

    const onAddCategory = ( newCategory ) => {
        if(categories.includes(newCategory)) return; 
        setCategories( [newCategory, ...categories ]);
    }
    

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory onNewCategory={ value => onAddCategory(value) }/>
        { 
            categories.map( ( category ) => (
                    <GifGrid 
                        category={ category } 
                        key={ category }
                    />
                ))
        }
    </>
  )
}
