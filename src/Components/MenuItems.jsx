import { useState, useEffect } from "react"


export default function MenuItems(){

    const[data, setData] = useState(null)

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/Kuciuks/react-restaurant-menu/products")
            .then((response) => response.json())
            .then((data) => setData(data))
    },[])
    console.log(data)

    return(
        <div>
            {data ? (
                <div>    
                    <h1>{data[0].id} menu item</h1>
                    <h2>{data[0].name}</h2>
                    <h3>Price: {data[0].price}</h3>
                </div>
            ):(
                <h1>Loading data...</h1>
            )}
        </div>
    )
}