import "./App.css";
import  { useDispatch, useSelector }  from 'react-redux';
import { fetchProductDetail } from "./store/actions";


function ProductList(props:any) {
    const {data, setProductView, setCurrentProduct} = props;
    const dispatch = useDispatch();

  return (    
    <div className="cardContainer" style={{display: 'flex', flexWrap: 'wrap'}}>
        {data.map((item:any)=>{
            console.log("item", item);
         return(
            <div style={{margin: '40px'}} onClick={()=>{
                setProductView(true);
                dispatch(fetchProductDetail(item.id));
            }}>
            <div>{item.id}</div>           
            <div><img style={{width: '100px'}} src={item.images[0]}/></div>           
            <div>{item.title}</div>
            <div>{item.price}</div>           
            </div>
         )
        })}
    </div>
  );
}

export default ProductList;
