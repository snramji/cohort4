import React from 'react';
import logo from './logo.svg';
import logo1 from './Fraser-Spiral-Illusion.svg';
import logo2 from './Excited-Smiley-Face.svg';
// import { ReacComponent as YourSvg } from './Fraser-Spiral-Illusion.svg';

class MyHeader extends React.Component {

	render(props) {
		return (
			<div>
				<h1>Hello World from MyHeader.js</h1>
                <img src={logo} className="MyHeader-logo" alt="logo" value='logo' onClick={e => console.log(e.target.alt)}/>
                <img src={logo1} className="MyHeader-logo" alt="spiral" value='spiral' onClick={e => console.log(e.target.alt)}/>
                <img src={logo2} className="MyHeader-logo" alt="smiley" value='smiley' onClick={e => console.log(e.target.alt)}/>
			</div>
		)
	}
}

export default MyHeader;