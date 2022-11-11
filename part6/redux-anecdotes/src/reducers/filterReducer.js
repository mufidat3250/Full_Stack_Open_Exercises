import { bindActionCreators } from "redux"

const filterslice = {
    name:'filter',
    reducer:{
        filterReducer(state, action){
            return action.payload
        }
    }
}

export default filterslice.reducer
export const {filterReducer} 