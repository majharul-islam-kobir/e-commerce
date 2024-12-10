import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import T_Shop from './pages/T_Shop.jsx'
import store from './app/Store.jsx'
import { Provider } from 'react-redux'
import Privacy from './pages/Privacy.jsx'
import CartItem from './features/cart/CartItem.jsx'
import LogIn from './pages/LogIn.jsx'
import Register from './pages/Register.jsx'
import AuthProvider from './provider/AuthProvider.jsx'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/privacy",
        element: <Privacy/>
      },
      {
        path: "/tshop",
        element: <T_Shop />
      },
      {
        path: "/cart",
        element: <CartItem />
      },
      {
        path: "/login",
        element: <LogIn />
      },
      {
        path: "/register",
        element: <Register />
      }
      

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
    </Provider>
  </StrictMode>,
)
