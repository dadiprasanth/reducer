import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset } from './junistore'
export default function Counter() {
    const {count}=useSelector((state)=>state.juni)
  const dispatch=useDispatch()
    return (
    <section><p>{count}</p>
    <button onClick={()=>dispatch(increment())}> +</button>
    <button onClick={()=>dispatch(decrement())}>-</button></section>

  )
}
