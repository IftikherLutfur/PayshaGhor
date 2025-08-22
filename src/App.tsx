
import { Outlet } from 'react-router'
import './App.css'
import CommonLayout from './components/CommonLayout'
import HomeHero from './pages/HomeHero'

function App() {

  return (
    <>
    <CommonLayout>
      <HomeHero/>
      <Outlet/>
    </CommonLayout>
    </>
  )
}

export default App
