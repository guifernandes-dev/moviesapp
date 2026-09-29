import { NavLink } from "react-router-dom";
import styles from './Header.module.css';

type PropsNavLink = {
  isActive: boolean
};

const Header = () => {
  const fnClassLink = ({ isActive }: PropsNavLink) => isActive ? styles.activePage : "";

  return (
    <header>
      <h1>Movies App</h1>
      <nav>
        <ul>
          <li><NavLink to="/" className={fnClassLink}>Home</NavLink></li>
          <li><NavLink to="/movies" className={fnClassLink}>Movies</NavLink></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;