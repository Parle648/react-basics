import { Link } from 'react-router-dom';
import userImg from '../../shared/assets/images/user.svg';
import styles from './styles/headerProfile.module.scss';
import Button from '../../shared/UI/Button/Button';
import { FC } from 'react';

const HeaderProfile: FC = () => {
    return (
        <li className={styles.navHeader__item} title="Profile">
            <div data-test-id="header-profile-nav" className={`${styles.navHeader__inner} ${styles.profileNav}`}>
                <span className='visually-hidden'>Profile</span>
                <img src={userImg} alt="profile" />
                <ul data-test-id="header-profile-nav-list" className={styles.profileNav__list}>
                <li data-test-id="header-profile-nav-username" className={styles.profileNav__item}>
                    John Doe
                </li>
                <li className={styles.profileNav__item}>
                    <Link to='/sign-up'>
                        <Button title={'Sign Out'} dataTextId={'header-profile-nav-sign-out'} type={'button'} />
                    </Link>
                </li>
                </ul>
            </div>
        </li>
    );
};

export default HeaderProfile;