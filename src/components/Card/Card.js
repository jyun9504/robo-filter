import React from 'react';

import './Card.css';

class Card extends React.Component {
	constructor() {
		super();
		this.state = {
			imageLoading: true
		}
		this.handleImageLoaded = this.handleImageLoaded.bind(this);
		this.image = React.createRef();
	}
	componentDidMount() {
		const img = this.image.current;
		if (img && img.complete) {
			this.handleImageLoaded();
		}
	}
	handleImageLoaded() {
		if (this.state.imageLoading && this.image.current.complete) {
			this.setState({ imageLoading: false });
		}
	}
	handleImageLoadingError() {
		throw new Error('img load error')
	}
	loadingCard () {
		if(this.state.imageLoading){
			return <div className="loading-card f-sega b--solid bw2 b--black br2">Loading</div>
		}
	}
	render() {
		const { id, name, email } = this.props;
		const imgUrl = `https://robohash.org/${id}?size=200x200`;
		return (
			<div className='card tc dib bg-white br3 pa3 ma3 grow bw2 b--solid b--black'>
				<div className="img-block b--solid bw2 b--black br2">
					<img 
						alt="robot" 
						src={ imgUrl }
						onLoad={ this.handleImageLoaded }
						onError={ this.handleImageLoadingError }
						ref={ this.image }
					></img>
				</div>
				{ this.loadingCard() }
				<h2 className="name" title={ name }>{ name }</h2>
				<p>{ email }</p>
			</div>
		)
	}
}

export default Card;