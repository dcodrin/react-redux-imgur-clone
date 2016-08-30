import React from 'react';
import {Link, IndexLink} from 'react-router';

class MainNav extends React.Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text"><IndexLink to="/public" activeClassName="active-nav-link">Imgur Clone</IndexLink></li>
                        <li><Link to="/public/one" activeClassName="active-nav-link">One</Link></li>
                        <li><Link to="/public/two" activeClassName="active-nav-link">Two</Link></li>
                        <li><Link to="/public/three" activeClassName="active-nav-link">Three</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li><input type="search" placeholder="Search"/></li>
                        <li>
                            <button type="button" className="button">Search</button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

MainNav.propTypes = {};
MainNav.defaultProps = {};

export default MainNav;
