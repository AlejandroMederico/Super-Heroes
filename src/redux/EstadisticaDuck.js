//constante
const dataInicial ={
    equipo:[]
}

//se coloca el nombre de accion en mayuscula
//types
const ACTUALIZAR_EQUIPO = 'ACTUALIZAR_EQUIPO'
const AGREGAR_AL_EQUIPO = 'AGREGAR_AL_EQUIPO'
//reducer
export default function estadisticaReducer(state = dataInicial,action){

    switch (action.type) {
        case ACTUALIZAR_EQUIPO:
                return {...state,equipo: action.payload}
        case AGREGAR_AL_EQUIPO:
                return {...state,equipo:[...state.equipo,action.payload]}
        default:
            return state
    }
}

//acciones


export const actualizarEquipoAction = (status) =>  (dispatch, getState) => {
    // console.log(getState().EstadisticaArray.prueba)
        dispatch({
            type: ACTUALIZAR_EQUIPO,
            payload: status
        })

}
export const agregarAlEquipoAction = (status) =>  (dispatch, getState) => {
    // console.log(getState().EstadisticaArray.prueba)
        dispatch({
            type: AGREGAR_AL_EQUIPO,
            payload: status
        })

}


