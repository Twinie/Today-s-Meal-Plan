import { useState } from "react";
import {
  NavLink,
} from "react-router-dom";

function NewItem(){

    const [newItemToBeAddedInList, setNewItemToBeAddedInList] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        //  setFormData({user: formData.user, date: new Date().toDateString().slice(0,15), recipe: formData.recipe});
    
        let data = {
          data:{
            item: newItemToBeAddedInList,
          }
        }
        const options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        };

            fetch("http://localhost:3001/api/menu/add", options)
            .then(response => {
              if(response.ok){
                return response.json()
              }else{
                throw new Error("Item already added")
              }
              })
            .then(data => {
                console.log(data)
                if(data){
                  alert("Item added to the Menu list")
                  setNewItemToBeAddedInList("")
                }
                // else{
                  // alert("Item already added")
                // }
            })
            .catch(err=>{
              // console.log(err)
              alert(err)
              setNewItemToBeAddedInList("")
            })
      }

      return (
        // <BrowserRouter>
          <div className="App">
            <h1 className='title'>Customize Your Menu <NavLink to="/">Home</NavLink> </h1>
            
            <form onSubmit={handleSubmit}>
                <p>If not in the List, add up the Item to the List</p>
                <label htmlFor="addItem" > Name of the Item: </label>
                <input className="select-item" type='text' id="addItem" name="addItem" value={newItemToBeAddedInList} onChange={(e)=>setNewItemToBeAddedInList(e.target.value)} />
                <input type="submit" value="Submit" className='submit-btn' />
            </form>

          </div>
          // </BrowserRouter>
        );
}

export default NewItem