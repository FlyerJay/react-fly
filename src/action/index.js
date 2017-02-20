export function pushPage(path,callback){
    return {
        type: 'PUSH',
        path: path,
        callback:callback || undefined,
    }
}

export function popPage(callback){
    return {
        type: 'POP',
        callback:callback || undefined,
    }
}

export function popTo(path,callback){
    return {
        type: 'POP_TO',
        path: path,
        callback:callback || undefined,
    }
}