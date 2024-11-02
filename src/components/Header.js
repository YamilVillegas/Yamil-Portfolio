import { Navbar, NavbarBrand } from "reactstrap";
import YLogo from '../app/assets/img/YLogo.png';


const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand href='/'>
                <img src={YLogo} alt='YLogo' />
            </NavbarBrand>
        </Navbar>
    )
}

export default Header;