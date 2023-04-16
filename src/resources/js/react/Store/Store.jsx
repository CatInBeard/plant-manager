import { createStore,combineReducers} from 'redux'

import PlantsReducer from './Reducers/PlantsReducer'
import EditPlantReducer from './Reducers/EditPlantReducer'
import AddPlantReducer from './Reducers/AddPlantReducer'
import ViewPlantReducer from './Reducers/ViewPlantReducer'
const rootReducer = combineReducers({
  plants: PlantsReducer,
  editPlant: EditPlantReducer,
  addPlant: AddPlantReducer,
  viewPlant: ViewPlantReducer
})

let store = createStore(rootReducer)

export default store