import React from 'react'
import './style/card.css'

class Card extends React.Component {
    render() {
        if((this.props.id % 2) === 0) {
            return (
                <section className='card' id={this.props.name}>
                    <article className="card__pic-container">
                        <figure className="card__pic">
                            <img src={this.props.pic} alt={this.props.name} title={this.props.name}/>
                        </figure>
                    </article>
                    <article className="card__info">
                        <div className="card__info-data">
                            <h3>{this.props.name} {this.props.lastName}</h3>
                            <h4>a.k.a. {this.props.nickName}, {this.props.age} Years Old</h4>
                        </div>
                        <div className="card__info-description">
                            <p>
                                {this.props.description}
                            </p>
                        </div>
                        <div className="card__info-source">
                            <span><a href={this.props.url} target="__blank">Source</a></span>
                        </div>
                    </article>
                </section>
            )
        } else {
            return (
                <section className='card black-card' id={this.props.name}>
                    <article className="card__pic-container">
                        <figure className="card__pic">
                            <img src={this.props.pic} alt={this.props.name} title={this.props.name} />
                        </figure>
                    </article>
                    <article className="card__info">
                        <div className="card__info-data">
                            <h3>{this.props.name} {this.props.lastName}</h3>
                            <h4>a.k.a. {this.props.nickName}, {this.props.age} Years Old</h4>
                        </div>
                        <div className="card__info-description">
                            <p>
                                {this.props.description}
                            </p>
                        </div>
                        <div className="card__info-source">
                            <span><a href={this.props.url}>Source</a></span>
                        </div>
                    </article>
                </section>
            )
        }
    }
}

export default Card