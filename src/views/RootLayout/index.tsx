import { Outlet } from "react-router-dom"
import Header from "../../components/Header"

const RootLayout = () => {
  return (
    <>
      <Header />
      <br />
      <Outlet />
    </>
  )
}

export default RootLayout