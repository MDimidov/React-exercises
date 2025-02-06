import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export function Navigation() {
    return (
        <nav className={styles['navigation']}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/characters'>Characters</Link></li>
            </ul>
        </nav>
    )
}