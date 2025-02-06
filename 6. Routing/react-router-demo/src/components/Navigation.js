import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export function Navigation() {
    return (
        <nav className={styles['navigation']}>
            <ul>
                <li><NavLink style={({isActive}) => ({color: isActive ? 'purple' : ''})} to="/">Home</NavLink></li>
                <li><NavLink style={({isActive}) => ({color: isActive ? 'purple' : ''})} to='/about'>About</NavLink></li>
                <li><NavLink style={({isActive}) => ({color: isActive ? 'purple' : ''})} to='/characters'>Characters</NavLink></li>
            </ul>
        </nav>
    )
}