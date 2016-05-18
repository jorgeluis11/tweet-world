import { applyMiddleware, compose, createStore } from 'redux'
import reducer from '../reducers/reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk';


let finalCreateStore = compose(
	applyMiddleware(logger(), thunk)

)(createStore)

let initialState =  {

    grouponList:[
            // {id:1,
            // name:'groopanda',
            // active:false},
            {id:2,
            name:'gustazos',
            active:false},
            {id:3,
            name:'oferta',
            active:false},
            {id:4,
            name:'ofertones',
            active:false},
            // {id:5,
            // name:'peroquedescuentos',
            // active:false},
            {id:6,
            name:'prgoza',
            active:false},
            {id:7,
            name:'kokigo',
            active:false}],
            // {id:8,
            // name:'puertoricolike',
            // active:false}],
    list:[],
    loading:false
}


export default function configureStore(){
	 return finalCreateStore(reducer, initialState);
	 // return createStore(reducer, initialState);
}
