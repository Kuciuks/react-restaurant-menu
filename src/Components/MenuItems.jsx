import { useState, useEffect } from "react"
import '../Styles/MenuItems.css'

export default function MenuItems(){

    const[data, setData] = useState(null)

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/Kuciuks/react-restaurant-menu/products")
            .then((response) => response.json())
            .then((data) => setData(data))
    },[])

    return(
        <div className='item-container'>
            {data ? (
                data.map((item) => (
                    <div key={item.id} className='item-div'>
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <h2>{item.price}</h2>
                    </div>
                ))
            ):(
                <h1>Loading data...</h1>
            )}
        </div>
    )
}