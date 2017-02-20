import { combineReducers } from 'redux';
import { pushPage, popPage, popTo } from '../action'

const pageStackDatas = {
    pageStack:['/',],
    mode:'push',
}

function pageStack( state = pageStackDatas, action ){
    switch ( action.type ){
        case 'PUSH' :
            action.callback && action.callback(state);
            return {
                pageStack: state.pageStack.concat( action.path ),
                mode: 'push'
            };
            break;
        case 'POP' :
            action.callback && action.callback(state);
            return {
                pageStack: state.pageStack.splice(0, state.length--),
                mode: 'pop'
            };
            break;
        case 'POP_TO' :
            action.callback && action.callback(state);
            var index = state.pageStack.indexOf( path );
            if( index > 0 ){
                return {
                pageStack: state.pageStack.splice(0, index),
                mode: 'pop'
                };
            }else{
                return state;
            }
            break;
        default :
            return state;
    }
}

export default pageStack;