import { Outlet } from "react-router"
import Nevber from "./component/Nevber"
import Footer from "./component/Footer"


function App() {

  return (
     <div>
      <Nevber />
       <Outlet />
      <Footer />
     </div>
  )
}

export default App
