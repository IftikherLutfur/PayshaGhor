
import { Outlet } from 'react-router'
import './App.css'
import CommonLayout from './components/CommonLayout'

function App() {

  return (
    <>
    <CommonLayout>
      <h1 className='text-3xl font-bold'>Welcome</h1>
      <Outlet/>
    </CommonLayout>
    </>
  )
}

export default App
