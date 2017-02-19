import { combineReducers } from 'redux';
import { pushPage, popPage } from '../action'

const pageStackDatas = []
function pageStack( state = pageStackDatas, action ){
    switch ( action.type ){
        case 'PUSH' :
            return state.concat( action.path );
            break;
        case 'POP' :
            if( action.path ){
                var index = state.indexOf( path );
                if( index > 0 ){
                    return state.splice( 0, index );
                }else{
                    return state;
                }
            }else{
                return state.splice( 0, state.length );
            }
            break;
        default :
            return state;
    }
}

export default pageStack;