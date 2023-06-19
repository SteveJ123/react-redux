import React from 'react';
import  { useDispatch, useSelector }  from 'react-redux';
import { addToFavorites } from './store/actions';

function ProductPage(props: any) {
    const { productData } = props;
    const dispatch = useDispatch();
    const productDetail = useSelector((state:any) => state.productDetail);
    const favorites = useSelector((state:any) => state.favorites);

    return (
        <div>
            <br/>
            <br/>
            {
                JSON.stringify(productDetail)
            }
            <br/>
            <br/>
            <button
            style={{
                backgroundColor: favorites.find((item:any)=>item.id == productDetail.id) ? 'green' : 'white',
                color: favorites.find((item:any)=>item.id == productDetail.id) ? 'white' : 'black',
            }}
            onClick={()=>{
                dispatch(addToFavorites(productDetail));
            }}>+ Favorite</button>
            <br/>
            {
                
            }
        </div>
    );
}

export default ProductPage;