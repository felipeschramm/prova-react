import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../../store/User/userSlice";
import { clear } from "../../store/Cart/cartSlice";
import {BottomTgl,ContainerHeader,MenuHeader,Tgl} from './styles'

const Header = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const logoutHandler = () =>{
    dispatch(clear())
    dispatch(logout())
  }

  return (
    <>
      <ContainerHeader>
        <div>
          <Tgl>TGL</Tgl>
          {(location.pathname === '/new-bet' || location.pathname === '/account') && (
            <MenuHeader to="/" >
              Home
            </MenuHeader>
          )}
        </div>
        <div>
          <MenuHeader to="/account" >Account</MenuHeader>
          <MenuHeader to="/auth"  onClick={logoutHandler}>
            Sair <FiArrowRight size={25} style={{ marginBottom: "-5px" }} />
          </MenuHeader>
        </div>
      </ContainerHeader>
      <BottomTgl/>
    </>
  );
};

export default Header;
