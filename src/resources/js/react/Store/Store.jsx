import { createStore,combineReducers} from 'redux'

import PlantsReducer from './Reducers/PlantsReducer'

const rootReducer = combineReducers({
  plants: PlantsReducer,
})

let store = createStore(rootReducer)

export default store