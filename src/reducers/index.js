import { ADD_FEATURE, REMOVE_FEATURE, REMOVE_ADDED_FEATURE, ADD_ADDITIONAL_FEATURE } from '../actions/index';

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  export const carReducer = (state = initialState, action) => {
      switch(action.type){
        case ADD_FEATURE:  
            return ({...state, additionalPrice: (state.additionalPrice + action.payload.price), car: {...state.car, features: [...state.car.features, 
                {id: action.payload.id, name: action.payload.name, price: action.payload.price}]}});

        case ADD_ADDITIONAL_FEATURE:
            return ({...state, additionalFeatures: [...state.additionalFeatures, {
                id: action.payload.id, name: action.payload.name, price: action.payload.price}]})

        case REMOVE_FEATURE:
            const keptAdditionalFeatures = state.additionalFeatures.filter(feature => {
                if (feature.id !== action.payload.id){
                    return feature;
                }})
            return({...state, additionalFeatures: [...keptAdditionalFeatures]});

        case REMOVE_ADDED_FEATURE:
                const keptFeatures = state.car.features.filter(feature => {
                    if(feature.id !== action.payload.id){
                        return feature;
                    }})
            return ({...state, additionalPrice: (state.additionalPrice - action.payload.price), car: {...state.car, features: [...keptFeatures]}})

        default:
            return state;
      }
  }