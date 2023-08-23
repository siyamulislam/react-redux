import { DECREMENT, INCREMENT, INCREMENT_BY_AMOUNT, RESET } from "../constants/counterConstants"

export const incrementCounter =()=>{
    return{
        type: INCREMENT,
    }
}
export const decrementCounter =()=>{
    return{
        type: DECREMENT,
    }
}
export const resetCounter =()=>{
    return{
        type: RESET,
    }
}
export const incrementByAmountCounter =(value)=>{
    console.log(value)
    return{
        type: INCREMENT_BY_AMOUNT,
        payload:value
    }
}