import { useState } from 'react'
import './App.css'
import MenuItems from './Components/MenuItems.jsx'


function App() {

  const [showItems, setShowItems] = useState(false)

  const loadItems = () => {
    setShowItems(true)
  }

  const clearItems = () =>{
    setShowItems(false)
  }

  return(
    <div className='container'>
      <button onClick={loadItems}>Display menu items</button>
      <button onClick={clearItems}>Clear menu items</button>
      {showItems && <MenuItems />}
    </div>
  )
}

export default App
