// Action types
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';

export const FETCH_PRODUCT_DETAIL_REQUEST = 'FETCH_PRODUCT_DETAIL_REQUEST';
export const FETCH_PRODUCT_DETAIL_SUCCESS = 'FETCH_PRODUCT_DETAIL_SUCCESS';
export const FETCH_PRODUCT_DETAIL_FAILURE = 'FETCH_PRODUCT_DETAIL_FAILURE';

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';

// Action creators
export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products:any) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error:any) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const searchProduct = (searchTerm:any) => ({
  type: SEARCH_PRODUCT,
  payload: searchTerm,
});

export const fetchProductDetailRequest = () => ({
  type: FETCH_PRODUCT_DETAIL_REQUEST,
});

export const fetchProductDetailSuccess = (product:any) => ({
  type: FETCH_PRODUCT_DETAIL_SUCCESS,
  payload: product,
});

export const fetchProductDetailFailure = (error:any) => ({
  type: FETCH_PRODUCT_DETAIL_FAILURE,
  payload: error,
});

export const addToFavorites = (product:any) => ({
  type: ADD_TO_FAVORITES,
  payload: product,
});

export const fetchProducts: any = () => {
    return (dispatch:any) => {
      dispatch(fetchProductsRequest());
      fetch('https://api.escuelajs.co/api/v1/products')
        .then((response) =>  response.json())
        .then((data) => dispatch(fetchProductsSuccess(data)))
        .catch((error) => dispatch(fetchProductsFailure(error.message)));
    };
  };
  
  export const fetchProductDetail: any = (name:any) => {
    return (dispatch:any) => {
      dispatch(fetchProductDetailRequest());
      fetch(`https://api.escuelajs.co/api/v1/products/${name}`)
        .then((response) => response.json())
        .then((data) => dispatch(fetchProductDetailSuccess(data)))
        .catch((error) => dispatch(fetchProductDetailFailure(error.message)));
    };
  };
