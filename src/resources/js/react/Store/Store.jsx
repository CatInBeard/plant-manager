import { createStore,combineReducers} from 'redux'

import PlantsReducer from './Reducers/PlantsReducer'
import EditPlantReducer from './Reducers/EditPlantReducer'
import AddPlantReducer from './Reducers/AddPlantReducer'

const rootReducer = combineReducers({
  plants: PlantsReducer,
  editPlant: EditPlantReducer,
  addPlant: AddPlantReducer
})

let store = createStore(rootReducer)

export default store