import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { setIsApp } from './store/appstore'
import Counter from './store/Counter'
function App() {
  const dispatch=useDispatch()
  const {isApp}=useSelector((state)=>state.app)
  const [count, setCount] = useState(0)

  return (
    <>
    {isApp}
 <Counter/>
 <input onChange={(e)=>dispatch(setIsApp(e.target.value))}/>

    </>
  )
}

export default App
