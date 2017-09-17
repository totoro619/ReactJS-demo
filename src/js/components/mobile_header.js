import React from 'react';
import {
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


class MobileHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 'top',
			modalVisible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userId: 0
		};
		this.login = this.login.bind(this);
		this.callback = this.callback.bind(this);
	};

	componentWillMount() {
		if (localStorage.userId != '') {
			this.setState({
				hasLogined: true,
				userId: localStorage.userId,
				userNickName: localStorage.userNickName
			})
		}
	};

	login() {
		this.setState({
			modalVisible: true
		});
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

	handleSubmit(e) {
		e.preventDefault();
		var myFetchOptions = {
			method: 'GET',
		};
		var formData = this.props.form.getFieldsValue();
		console.log(formData);
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action + "&username=" + formData.username + "&password=" + formData.password + "&r_userName=" + formData.r_userName + "&r_password=" + formData.r_password + "&r_confirmPassword=" + formData.r_confirmPassword, myFetchOptions)
			.then(response => response.json())
			.then(json => {
				this.setState({
					userNickName: json.NickUserName,
					userId: json.UserId
				})
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
			<Link to={`/usercenter`}>	
				<Icon type="smile"/>
			</Link> :
			<Icon type="user" onClick={this.login}/>;

		return (
			<div id="mobile">
			<header>
				<img src="/src/images/logo.png" alt="logo"/>
				<span>ReactNews</span>
				{userShow}
			</header>

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
			</div>
		)
	}
};

export default MobileHeader = Form.create({})(MobileHeader);