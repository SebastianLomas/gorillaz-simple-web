import React from 'react'
import Menu from './menu'
import './style/header.css'
import '../fonts.css'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuShown: false,
            iconClass: "icon-menu3"
        }
    }

    showMenu = e => {
        this.setState({
            menuShown: !this.state.menuShown,
            iconClass: this.state.iconClass === "icon-menu3"? "icon-menu4" : "icon-menu3"
        })
        console.log(e.target.class = "asdadas")
    }

    render() {
        return (
                <header className='header'>
                    <section className='header__menu'>
                        <i className={this.state.iconClass} onClick={this.showMenu}></i>
                    </section>
                    <section className='header__logo'>
                        <h1>Gorillaz App</h1>
                    </section>
                    <Menu menuShown={this.state.menuShown} />
                </header>
        )
    }
}

export default Header