import './App.css';
import { useState, useEffect, Fragment } from 'react';

// const base_url = "http://192.168.29.229:33233";

function App() {

  const [items, setItems] = useState([]);
  const [names, setNames] = useState([]);
  const [recipeSelected, setRecipeSelected] = useState([])
  const [formData, setFormData] = useState({user:"", recipe:""})

  useEffect(()=>{
    fetch(`http://localhost:3001/api/menu/items`)
    .then(response => response.json())
    .then(menu => setItems(menu.getItems))
  }, []);

  useEffect(()=>{
    fetch(`http://localhost:3001/api/user/users`)
    .then(response => response.json())
    .then(data => setNames(data.users))
  }, []);

  function fetchSelectedData(){
    
    let month = new Date().getMonth()+1;
    let presentDate = new Date().getDate();
    if(month < 10){
      month = "0"+month
    }
    if(presentDate < 10){
      presentDate = "0"+presentDate;
    }
    let todayDate = `${new Date().getFullYear()}-${month}-${presentDate}`;
    fetch(`http://localhost:3001/api/menu/menus`)
    .then(response => response.json())
    .then(menu => setRecipeSelected(menu.item));
    console.log(todayDate)
  }

  useEffect(()=>{
    fetchSelectedData()
  },[])

  // console.log(items)

  function handleName(e){
    setFormData({...formData, user: e.target.value})
  }

  function handleRecipe(e){
    setFormData({ ...formData, recipe: e.target.value})
  }

   function handleSubmit(e){
    e.preventDefault();
    //  setFormData({user: formData.user, date: new Date().toDateString().slice(0,15), recipe: formData.recipe});

    let data = {
      data:{
        createdBy: formData.user,
        createdAt: `${new Date().toISOString().slice(0,10)}`,
        items: formData.recipe,
        // mealtype: "Dinner"
      }
    }
    const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    // console.log(formData.user, data.data.createdBy, new Date().toISOString().slice(0,10), data.data.createdAt);
    // if(formData.user === data.data.createdBy && new Date().toISOString().slice(0,10) === data.data.createdAt){
      // console.log("UPDATE")
      
        fetch("http://localhost:3001/api/menu/update", options)
        .then(response => response.json())
        .then(data => {
        alert("Recipe Selected")
        fetchSelectedData()}).catch(err=>alert("Select an Item"))
    // }else{
    //   console.log("NEW ITEM")
    //   fetch("http://localhost:3001/api/menu/menus", options)
    //   .then(response => response.json())
    //   .then(data => fetchSelectedData())
    // }
    setFormData({user:"", recipe:""})
  }
  return (
    <div className="App">
      <h1 className='title'>Food menu Selection</h1>
      <h4>Get your job faster to select dinner item with your Hubby by putting up your selected meal for today and get the job done faster</h4>
      <form action="" method='post' onSubmit={handleSubmit}> 
      {/* <label htmlFor="name">Enter your name: </label>
      <input type="text" name="name" id="name" required /> */}
      <label htmlFor="date">Date: {new Date().toDateString().slice(0,15)}</label>

      <p>Select your name:</p>
       {/* <input type='radio' id='name1' name='sagar' checked={formData.user === 'ejr8gma74qzoyojchiz6rndg'} onChange={handleName} value='ejr8gma74qzoyojchiz6rndg' />
       <label htmlFor='sagar' > Sagar </label><br/><br/>
       <input type='radio' id='name2' name='twinkle' checked={formData.user === 'updne6zqiiwh0ws4pfcdygoc'} onChange={handleName} value='updne6zqiiwh0ws4pfcdygoc' />
       <label htmlFor='twinkle'> Twinkle </label><br/><br/> */}

       {names.map((item, index)=>(
        <Fragment key={index}>

        <input type='radio' id={item._id} name='item' value={item._id} checked={formData.user === item._id} onChange={handleName} />
        <label htmlFor={item._id} > {item.name} </label><br/><br/>
        </Fragment>
      ))}

      <p>Please select your food-item:</p>
      <select className='select-item' name="menuItem" id='menuItem' onChange={handleRecipe}>
      {items.map((item, index)=>(
        <Fragment key={index}>

        {/* <input type='radio' id={item._id} name='menuItem' value={item.item} checked={formData.recipe === item.item} onChange={handleRecipe} /> */}
        {/* <label htmlFor={item._id} > {item.item} </label><br/><br/> */}
          <option value={item.item} checked={formData.recipe === item.item}>{item.item}</option>

        </Fragment>
      ))}
      </select>
      <input type="submit" value="Submit" className='submit-btn' />


      </form>

      
      {/* if item is selected by any one of the person then that item should be displayed on screen */}

      <div>
      <table className='display-table'> 
                      <tr>
                        <th>Name</th>
                        <th>Menu item</th>
                      </tr>
        {recipeSelected.map((data, ind)=>{
          // console.log(data.createdAt.slice(0,10), new Date().toISOString().slice(0,10))
          if(data.createdAt.slice(0,10) === new Date().toISOString().slice(0,10)){
            // console.log(true)
            // return <h3 key={ind}>Item selected by {data.createdBy.name }: {data.items}</h3>
            return <tr>
                        <td>{data.createdBy.name }</td>
                        <td>{data.items}</td>
                      </tr>

          }else{
            // console.log(false)
            return false
          }
          
        })}
        </table>
      </div>
    </div>
  );
}

export default App;
