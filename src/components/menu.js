import React from 'react'
import './style/menu.css'

class Menu extends React.Component {
    render() {
        if(this.props.menuShown) {
            return(
                <nav className="menu">
                    <ul className="menu__list">
                        <li><a href="#Murdoc">Murdoc Niccals</a></li>
                        <li><a href="#Stuart">2D</a></li>
                        <li><a href="#Russel">Russel</a></li>
                        <li><a href="#Noodle">Noodle</a></li>
                    </ul>
                </nav>
            )
        } else {
            return false
        }
    }
}

export default Menu