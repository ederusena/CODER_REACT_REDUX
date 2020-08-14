import { NUM_MAX_ALTERADO } from './actionTypes'

export default function changeNumMax(novoNumero){
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}