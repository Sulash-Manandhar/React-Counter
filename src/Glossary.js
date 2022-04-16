import React, { useState } from 'react'
import './stylesheets/style.css'

export default function Glossary() {

    const [items, addItem] = useState([{
        id:1,
        name:"Eggs",
        price:320  
      }])


    function handleForm(event){
        addItem([
            {
                id:document.getElementById("itemName").value.length,
                name:document.getElementById("itemName").value,
                price:document.getElementById("itemPrice").value
            }
        ])
    }


    function refreshData(){
        document.getElementById('contain').innerHTML= (items.map(item=>(
            <>
            <span className="itemName">{ item.name }</span>
            <span className="itemPrice">{item.price}</span>
            <br/>
            </>
        )))
    }
    return (
        <div>
            <h1>Item shop</h1><hr/>
            <div className="row">
                {/* column one  */}
                <div className="col">
                <form onSubmit={handleForm}>
                    <label>
                        <input type="text" placeholder="Item Name..." id="itemName"/>
                    </label>
                    <label>
                        <input type="number" min="100" placeholder="Price..." id="itemPrice"/>
                    </label>
                    <input type="submit"/>
                </form>
                </div>

                {/* column two  */}
                <div className="col">
                    <button onClick={refreshData}>Refresh Database</button><hr/>
                    <div className="contain">
                        {items.map(item=>(
                            <>
                            <span className="itemName">{ item.name }</span>
                            <span className="itemPrice">{item.price}</span>
                            <br/>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
