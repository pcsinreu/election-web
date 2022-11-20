
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet, Link } from "react-router-dom";

function Layout(props) {
    return(

        <div>
            <Header />  
                <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;