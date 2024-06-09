import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Address, Restautrant } from './model/restaurant';
import BestMenu from './BestMenu';


let data:Restautrant = {
  name:'누나네 식당',
  category: 'western',
  address:{
    city:'incheon',
    detail:'somewhere',
    zipCode:2435534
  },
  menu:[
    {name:'rose pasta',price:2000,category:'PASTA'},
    {name:'gariic steak',price:3000,category:'STEAK '}
  ]
}


const App:React.FC = () => {

  const [myRestaurant, setMyRestaurant] = useState<Restautrant>(data);
  const changeAddress = (address:Address) =>{
    setMyRestaurant({...myRestaurant, address})
  }
  const showBestMenuName = (name:string) =>{
    return name;
  }

  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu name="불고기피자" category="피자" showBestMenuName={showBestMenuName} />
    </div>
  );
}

export default App;
