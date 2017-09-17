import React from 'react';
import ReactDOM from 'react-dom';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index.js';
import PCNewsDetails from './components/pc_news_details.js';
import MobileNewsDetails from './components/mobile_news_details.js';
import PCUserCenter from './components/pc_usercenter.js';
import MobileUserCenter from './components/mobile_usercenter.js';
import MediaQuery from 'react-responsive';
import 'antd/dist/antd.css';
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';


export default class Root extends React.Component {
	render() {
		return (
			<div>
			<MediaQuery query='(min-device-width:1224px)'>
				<BrowserRouter>
				<Switch>
					<Route exact path="/" component={PCIndex} />
					<Route path="/details/:uniquekey" component={PCNewsDetails} />
					<Route path="/usercenter" component={PCUserCenter} />
				</Switch>
				</BrowserRouter>
			</MediaQuery>
			<MediaQuery query='(max-device-width:1224px)'>
				<BrowserRouter>
				<Switch>
					<Route exact path="/" component={MobileIndex} />
					<Route path="/details/:uniquekey" component={MobileNewsDetails} />
					<Route path="/usercenter" component={MobileUserCenter} />
				</Switch>
				</BrowserRouter>
			</MediaQuery>
			</div>
		);
	};
}
ReactDOM.render(
	<Root/>, document.getElementById('mainContainer'));