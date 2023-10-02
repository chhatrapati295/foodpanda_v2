import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './App.scss'
import Header from './components/Header'
import Body from './components/Body'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
// import Cart from './components/Cart'
import ResMenu from './components/ResMenu'
// import Quickmart from './components/Quickmart'
const Quickmart = lazy(()=>import('./components/Quickmart'))
const Cart = lazy(()=>import('./components/Cart'))

const App = () => {
  return (
    <div className='app'>
      <Header/>
      {/* <Body/> */}
      <Outlet/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    errorElement : <Error/>,
    children : [
      {
        path : '/',
        element : <Body/>,
      },
      {
        path : '/about',
        element : <About/>,
      },
      {
        path : '/contact',
        element : <Contact/>,
      },
      {
        path : '/cart',
        element : <Suspense fallback={<h2>Loading...</h2>}><Cart/></Suspense>,
      },
      {
        path : '/restaurant/:resId',
        element : <ResMenu/>
      },
      {
        path : '/quickmart',
        element : <Suspense fallback={<h2>Loading...</h2>}><Quickmart/></Suspense>
      },
    ]
  }
])



export default App

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)
