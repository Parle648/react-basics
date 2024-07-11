import styles from './styles/header.module.scss';
import Logo from '../../shared/UI/Logo/Logo';
import HeaderProfile from '../../entities/HeaderProfile/HeaderProfile';
import BookingNavItem from '../../entities/BookingNavItem/BookingNavItem';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <Logo />
                <nav data-test-id="header-nav" className={styles.header__nav}>
                <ul className={styles.navHeader__list}>
                    <BookingNavItem />
                    <HeaderProfile />
                </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;