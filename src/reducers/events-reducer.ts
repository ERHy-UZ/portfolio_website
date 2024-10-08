//BoilderPlate del reducer

//Types
export type EventActions =
    { type: 'scanlines-on' } |
    { type: 'scanlines-off' } |
    { type: 'flicker-on' } |
    { type: 'flicker-off' } |
    { type: 'warning-on' } |
    { type: 'warning-off' }

export type EventState = {
    scanlines: boolean
    flicker: boolean
    warning: boolean
}

//Estado inicial
export const initialState: EventState = {
    scanlines: true,
    flicker: true,
    warning: false
}

//Reducer con acciones
export const eventReducer = (
    state: EventState = initialState,
    action: EventActions
) => {

    //Para activar el efecto de scan lines
    if (action.type === 'scanlines-on') {

        return {
            ...state,
            scanlines: true
        }
    }

    //Para desactivar el efecto de scan lines
    if (action.type === 'scanlines-off') {

        return {
            ...state,
            scanlines: false
        }
    }

    //Para activar el efecto de parpadeo
    if (action.type === 'flicker-on') {

        return {
            ...state,
            flicker: true
        }
    }

    //Para desactivar el efecto de parpadeo
    if (action.type === 'flicker-off') {

        return {
            ...state,
            flicker: false
        }
    }

    //Para activar la advertencia
    if (action.type === 'warning-on') {

        return {
            ...state,
            warning: true
        }
    }

    //Para desactivar la advertencia
    if (action.type === 'warning-off') {

        return {
            ...state,
            warning: false
        }
    }

    return state
}