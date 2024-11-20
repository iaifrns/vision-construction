import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import AboutUsPage from "../pages/AboutUsPage"
import ContactUsPage from "../pages/ContactUsPage"

const ProjectNavigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/about_us" element={<AboutUsPage/>}></Route>
                <Route path="/contact_us" element={<ContactUsPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default ProjectNavigation