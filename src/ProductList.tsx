import "./App.css";

function ProductList(data:any) {
    console.log("event", data.data);
  return (    
      
    <div className="cardContainer">
        {data.data.map((item:any)=>{
            console.log("item", item);
         return(
            <div>
            <div>{item.id}</div>           
            <div><img src={item.images[0]}/></div>           
            <div>{item.title}</div>
            <div>{item.price}</div>           
            </div>
         )
            
          
        })}
    </div>
  );
}

export default ProductList;
