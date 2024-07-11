import BookingPage from "./pages/BookPage/BookingPage"
import Main from "./pages/Main/Main"
import SignInPage from "./pages/SignIn/SignIn"
import SignUpPage from "./pages/SignUp/SignUpPage"
import TourPage from "./pages/TourPage/TourPage"
import Footer from "./widgets/Footer/Footer"
import Header from "./widgets/Header/Header"

import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} ></Route>
          <Route path="/sign-in" element={<SignInPage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/bookings" element={<BookingPage />}></Route>
          <Route path="/trip/:tripId" element={<TourPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
