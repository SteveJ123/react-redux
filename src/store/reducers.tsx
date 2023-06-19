import { Reducer } from 'redux';
import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    SEARCH_PRODUCT,
    FETCH_PRODUCT_DETAIL_REQUEST,
    FETCH_PRODUCT_DETAIL_SUCCESS,
    FETCH_PRODUCT_DETAIL_FAILURE,
    ADD_TO_FAVORITES,
  } from './actions';
  
  const initialState = {
    products: [],
    loading: false,
    error: null,
    searchTerm: '',
    productDetail: null,
    favorites: [],
  };
  
  const rootReducer:Reducer<any> = (state = initialState , action:any) => {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        }
      case FETCH_PRODUCT_DETAIL_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_PRODUCTS_SUCCESS:
        console.log("payload product success", action.payload);
        return {
          ...state,
          products: action.payload,
          loading: false,
        };
      case FETCH_PRODUCTS_FAILURE:
      case FETCH_PRODUCT_DETAIL_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case SEARCH_PRODUCT:
        return {
          ...state,
          searchTerm: action.payload,
        };
      case FETCH_PRODUCT_DETAIL_SUCCESS:
        return {
          ...state,
          productDetail: action.payload,
          loading: false,
        };
      case ADD_TO_FAVORITES:
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  