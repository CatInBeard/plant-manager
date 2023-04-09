import { createStore,combineReducers} from 'redux'

import PlantsReducer from './Reducers/PlantsReducer'
import EditPlantReducer from './Reducers/EditPlantReducer'

const rootReducer = combineReducers({
  plants: PlantsReducer,
  editPlant: EditPlantReducer
})

let store = createStore(rootReducer)

export default store