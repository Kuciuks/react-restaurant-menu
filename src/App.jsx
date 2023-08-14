import { useState } from 'react'
import './App.css'
import MenuItems from './Components/MenuItems.jsx'


function App() {

  const [showItems, setShowItems] = useState(false)

  const loadItems = () => {
    setShowItems(true)
  }

  return(
    <div>
      <button onClick={loadItems}>Display menu items</button>
      {showItems && <MenuItems />}
    </div>
  )
}

export default App
