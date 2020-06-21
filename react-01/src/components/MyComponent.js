import React from 'react';

class MyComponent extends React.Component {

	render(props) {
		return (
			<div>
				<h1>Hello World from MyComponent.js</h1>
				<h1>{this.props.whatToSay}</h1>
				<button onClick={this.props.onPushMe}>
					Push Me (from MyComponent.js)
				</button>
			</div>
		)
	}
}

export default MyComponent;