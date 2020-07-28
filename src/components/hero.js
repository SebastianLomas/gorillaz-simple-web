import React from 'react'
import './style/hero.css'

class Hero extends React.Component {
    render() {
        return(
            <section className="hero">
                <div className="hero__title">
                    <h2>
                        Gorillaz App created with ReactJS
                    </h2>
                </div>
            </section>
        )
    }
}

export default Hero;