import { useState } from 'react';
import Card from "./Card";
import Copyright from "./Copyright";
import Navbar from "./Navbar";
import Template from "./Template";


let obj =  [
    {
      id:1,
      imageUrl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Fancy Product",
      Price: "$40.00 - $80.00",
      button: "Add to Cart",
      disabled:false,
      hidden:true
    },
    {
      id:2,
      imageUrl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Special Item",
      Price: "$18.00",
      button: "Add to Cart",
      disabled:false,
      hidden:true

    },
    {
      id:3,
      imageUrl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Sale Item",
      Price: "$25.00",
      button: "Add to Cart",
      disabled:false,
      hidden:true


    },
    {
      id:4,
      imageUrl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Popular Item",
      Price: "$40.00",
      button: "Add to Cart",
      disabled:false,
      hidden:true


    },
    {
      id:5,
      imageUrl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Sale Item",
      Price: "$25.00",
      button: "Add to Cart",
      disabled:false,
      disabled:false,
      hidden:true


    },
    {
      id:6,
      imageUrl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Fancy Product",
      Price: "$120.00 - $280.00",
      button: "Add to Cart",
      disabled:false,
      hidden:true

    },
    {
      id:7,
      imageUrl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Special Item",
      Price: "$18.00",
      button: "Add to Cart",
      disabled:false,
      hidden:true

    },
    {
      id:8,
      imageUrl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Popular Item",
      Price: "$40.00",
      button: "Add to Cart",
      disabled:false,
      hidden:true
    }
  ]


function App() {
  let [counter,setCounter]=useState(0);
  // let [disabled,setDisabled]=useState(false);

  let myfunction=(id)=>{
    setCounter(counter+1);

    let index=obj.map((value)=>{
      return (value.id===id)
    }).indexOf(true);
    // console.log(index)
    obj[index].disabled=true;
    obj[index].hidden=true;
  }

  let removefunction=(id)=>{
    setCounter(counter-1);
    let index=obj.map((value)=>{
      return (value.id===id)
    }).indexOf(true);
    // console.log(index)
    obj[index].hidden=false;
    obj[index].disabled=false;
  }
  return (
    <>
    <div >
    <Navbar counter={counter}/>
    
    <Template/>
    <div className="container">
      <div className="row">
        {obj.map((element) => {
          return (
            <div className="col-md-3 col-sm-12 d-flex justify-content-center align-items-center" key={element.id}>
            <Card myfunction={myfunction} disabled={element.disabled} removefunction={removefunction}
              url={element.imageUrl}
              title={element.title}
              price={element.Price}
              button={element.button}
              id={element.id}
              hidden={element.hidden}
            />
            </div>
          );
        })}
      </div>
      </div>
      <Copyright/>
      </div>
    </>
  );
}

export default App;
