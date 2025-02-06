import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export function Navigation({children}) {
    return (
        <nav className={styles['navigation']}>
            <ul>
                {children}
            </ul>
        </nav>
    )
}

export function NavItem({children, to}) {
    return <li><Link to={to}>{children}</Link></li>
}