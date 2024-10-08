import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet>
            </Outlet>
            <Footer/>
        </div>
    );
};

export default Layout;