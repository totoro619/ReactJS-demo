import React from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	Link
} from 'react-router-dom';
import {
	Row,
	Col
} from 'antd';
import {
	Menu,
	Icon,
	Tabs,
	message,
	Form,
	Input,
	Button,
	Checkbox,
	Modal
} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;

class PCHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 'top',
			modalVisible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userid: 0
		};
		this.handleClick = this.handleClick.bind(this);
		this.callback = this.callback.bind(this);
		this.logout = this.logout.bind(this);
	};

	componentWillMount() {
		if (localStorage.userid != '') {
			this.setState({
				hasLogined: true,
				userid: localStorage.userid,
				userNickName: localStorage.userNickName
			})
		}
	};

	handleClick(e) {
		if (e.key == 'register') {
			this.setState({
				current: 'register',
				modalVisible: true
			})
		} else {
			this.setState({
				current: e.key,
			});
		}
	};

	callback(key) {
		if (key == 1) {
			this.setState({
				action: 'login'
			})
		} else if (key == 2) {
			this.setState({
				action: 'register'
			})
		}
	};

	logout() {
		localStorage.userid = '';
		localStorage.userNickName = '';
		this.setState({
			hasLogined: false
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		var myFetchOptions = {
			method: 'GET',
		};
		var formData = this.props.form.getFieldsValue();
		console.log(formData);
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action + "&username=" + formData.username + "&password=" + formData.password + "&r_userName=" + formData.r_userName + "&r_password=" + formData.r_password + "&r_confirmPassword=" + formData.r_confirmPassword, myFetchOptions)
			.then(response => {
				return response.json()
			})
			.then(json => {
				this.setState({
					userNickName: json.NickUserName,
					userid: json.UserId
				});
				localStorage.userid = json.UserId;
				localStorage.userNickName = json.NickUserName;
				console.log(localStorage.userid, localStorage.userNickName);
			});

		message.success("请求成功！");
		if (this.state.action == "login") {
			this.setState({
				hasLogined: true
			})
		};
		this.setState({
			modalVisible: false
		});
	};

	render() {
		let {
			getFieldDecorator
		} = this.props.form;
		const userShow = this.state.hasLogined ?
			<Menu.Item className="register" key="logout">
				<Button type="primary" htmlType="button">{this.state.userNickName}</Button>
				&nbsp;&nbsp;
				<Link target="_blank" to={`/usercenter`}>
					<Button type="primary" htmlType="button">个人中心</Button>
				</Link>
				&nbsp;&nbsp;
				<Button type="primary" htmlType="button" onClick={this.logout}>退出</Button>
			</Menu.Item> :
			<Menu.Item key="register" className="register">
				<Icon type="user"/>登录/注册
			</Menu.Item>;


		return (
			<header>
				<Row>
					<Col span={2}></Col>
					<Col span={4}>
						<a href="/" class="logo">
							<img src="/src/images/logo.png" alt="logo"/>
							<span>ReactNews</span>
						</a>
					</Col>
					<Col span={16}>
						<Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
							<Menu.Item key="top">
								<Icon type="appstore"/>头条
							</Menu.Item>
							<Menu.Item key="shehui">
								<Icon type="appstore"/>社会
							</Menu.Item>
							<Menu.Item key="guonei">
								<Icon type="appstore"/>国内
							</Menu.Item>
							<Menu.Item key="guoji">
								<Icon type="appstore"/>国际
							</Menu.Item>
							<Menu.Item key="yule">
								<Icon type="appstore"/>娱乐
							</Menu.Item>
							<Menu.Item key="tiyu">
								<Icon type="appstore"/>体育
							</Menu.Item>
							<Menu.Item key="keji">
								<Icon type="appstore"/>科技
							</Menu.Item>
							{userShow}

				<Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={()=>this.setState({modalVisible:false})} onOk={()=>this.setState({modalVisible:false})} okText="关闭">

				<Tabs type="card" onChange={this.callback}>
					<TabPane tab="登录" key="1">
						<Form layout='horizontal' onSubmit={this.handleSubmit.bind(this)}>
							<FormItem label="账户">
								{getFieldDecorator('username')(
									<Input placeholder="请输入您的账户名" prefix={<Icon type="user" />}/> 
								)
								}
							</FormItem>
							<FormItem label="密码">
								{getFieldDecorator('password')(
									<Input type="password" placeholder="请输入您的密码" prefix={<Icon type="lock" />}/>
								)
								}
							</FormItem>
							<Button type="primary" htmlType="submit">登录</Button>
						</Form>
					</TabPane>

					<TabPane tab="注册" key="2">
						<Form layout='horizontal' onSubmit={this.handleSubmit.bind(this)}>
							<FormItem label="账户">
								{getFieldDecorator('r_username')(
									<Input placeholder="请输入您的账户名" prefix={<Icon type="user" />}/> 
								)
								}
							</FormItem>
							<FormItem label="密码">
								{getFieldDecorator('r_password')(
									<Input type="password" placeholder="请输入您的密码" prefix={<Icon type="lock" />}/>
								)
								}
							</FormItem>
							<FormItem label="确认密码">
								{getFieldDecorator('r_confirmedPassword')(
									<Input type="password" placeholder="请再次输入您的账密码" prefix={<Icon type="lock" />}/>
								)
								}
							</FormItem>
							<Button type="primary" htmlType="submit">注册</Button>
						</Form>
					</TabPane>
				</Tabs>

				</Modal>
						</Menu>
					</Col>
					<Col span={2}></Col>
				</Row>
			</header>
		);
	};
}


export default PCHeader = Form.create({})(PCHeader);