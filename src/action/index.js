export function pushPage(path){
    return {
        type: 'PUSH',
        path: path,
    }
}

export function popPage(){
    return {
        type: 'POP',
        path: path
    }
}