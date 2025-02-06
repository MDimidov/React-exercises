import { Navigation, NavItem } from './Navigation';

export function MainNavigation() {
    return (
        <Navigation>
            <NavItem style={({ isActive }) => ({ color: isActive ? 'purple' : '' })} to="/">Home</NavItem>
            <NavItem style={({ isActive }) => ({ color: isActive ? 'purple' : '' })} to='/about'>About</NavItem>
            <NavItem style={({ isActive }) => ({ color: isActive ? 'purple' : '' })} to='/characters'>Characters</NavItem>
        </Navigation>
    );
}