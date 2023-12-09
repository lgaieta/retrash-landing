import { Navbar, NavbarBrand } from '@nextui-org/navbar';
import ReTrashLogo from './ReTrashLogo';

function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <ReTrashLogo />
      </NavbarBrand>
    </Navbar>
  );
}

export default Header;
