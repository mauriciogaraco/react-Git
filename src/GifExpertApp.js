import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GitExpertApp = () =>{


  const [categoria, setcategoria] = useState(['one punch']);
//const handleAdd =()=>{
//setcategoria([...categoria,'Arrow']);
//}


     return(<div>
        <h2>GitExpertApp</h2>
        <AddCategory setcategoria={setcategoria}/>
        <hr></hr>
       
        <ol>
            {
                categoria.map(category =>{
                    return (
                        <GifGrid
                        key={category}
                        category={category}/>
                    )
                    
                })
                
            }
        </ol>
    </div>)
}
export default GitExpertApp;