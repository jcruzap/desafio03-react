import React from 'react'
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
    return (

        <div>

            <NavBar />
            <ItemListContainer greeting="Bienvenidos a Clara Joyas" />

        </div>
    )
}

export default App