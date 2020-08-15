import { NUM_MIN_ALTERADO } from './actionTypes'

export default function changeNumMin(novoNumero){
    return {
        type: NUM_MIN_ALTERADO,
        payload: novoNumero
    }
}