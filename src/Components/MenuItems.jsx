import { useState, useEffect } from "react"


export default function MenuItems(){

    const[data, setData] = useState(null)

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/Kuciuks/react-restaurant-menu/products")
            .then((response) => response.json())
            .then((data) => setData(data))
    },[])

    return(
        <div>
            {data ? (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                            <h2>{item.price}</h2>
                        </li>
                    ))}
                </ul>
            ):(
                <h1>Loading data...</h1>
            )}
        </div>
    )
}