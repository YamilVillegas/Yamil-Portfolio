import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import YLogo from '../app/assets/img/YLogo.png';


const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand href='/'>
                <img src={YLogo} alt='YLogo' />
            </NavbarBrand>
            <Nav navbar className="ml-auto">
                <NavItem>
                    <NavLink href="#home">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#about">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#projects">Projects</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#contact">Contact</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Header;