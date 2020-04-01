import { useState } from 'react';
import { APP_NAME } from '../config';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className='container'>
        <Link href='/'>
          <a className='text-reset text-decoration-none'>{APP_NAME}</a>
        </Link>
      </div>
      <div className='row justify-content-center'>
        <p>where witty, chatty &amp; efortlessly cool mums meet</p>
      </div>
      <div>
        <Navbar color='' light expand='md'>
          <Link href=''>
            <NavLink></NavLink>
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <Link href='/signup'>
                  <NavLink>Signup</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href='/signin'>
                  <NavLink>Signin</NavLink>
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Categories
                </DropdownToggle>
                <DropdownMenu right>
                  <Link href='/photography'>
                    <DropdownItem>Photography</DropdownItem>
                  </Link>
                  <Link href='/reviews'>
                    <DropdownItem>Reviews</DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <Link href='/look'>
                    <DropdownItem>Get the Look</DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            {/* <NavbarText>Menu</NavbarText> */}
          </Collapse>
        </Navbar>
      </div>

      <style jsx>{`
        .container {
          min-height: 10vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default Header;
