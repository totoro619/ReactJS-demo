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
	Modal,
	Card,
	notification
} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;

class CommonComments extends React.Component {
	constructor() {
		super();
		this.state = {
			comments: ''
		};
	};

	componentDidMount() {
		let myFetchOptions = {
			method: 'GET'
		};

		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions)
			.then(response => response.json())
			.then(json => this.setState({
				comments: json
			}));
	};

	handleSubmit(e) {
		e.preventDefault();

		if (localStorage.userid == '') {

			notification.warning({
				message: 'React News提醒！',
				description: '您未登录！请先登录！'
			});

		} else {

			let myFetchOptions = {
				method: 'GET'
			};

			let formdata = this.props.form.getFieldsValue();

			fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions)
				.then(response => response.json())
				.then(json => {
					this.componentDidMount();
				});

		}


	};

	addUserCollection(e) {

		if (localStorage.userid == '') {

			notification.warning({
				message: 'React News提醒！',
				description: '您未登录！请先登录！'
			});

		} else {

			let myFetchOptions = {
				method: 'GET'
			};

			fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey, myFetchOptions)
				.then(response => response.json())
				.then(json => {
					notification.success({
						message: 'React News提醒！',
						description: '收藏该文章成功！'
					})
				});
		};
	};



	render() {
		const {
			getFieldDecorator
		} = this.props.form;

		const {
			comments
		} = this.state;
		const commentList = comments.length ?
			comments.map((comment, index) => (
				<Card key={index} title={comment.UserName} extra={<a href = "#"> 发布于 {comment.datetime} </a>}>
								<p>{comment.Comments}</p>
				</Card>
			)) : '没有评论';

		return (
			<div>
				<Row>
					<Col span={24}>
						<Form onSubmit={this.handleSubmit.bind(this)}>
							<FormItem label="您的评论">
								{getFieldDecorator('remark')(
									<Input type="textarea" placeholder="随便写" />
								)}
							</FormItem>
							<Button type="primary" htmlType="submit">提交评论</Button>
							&nbsp;&nbsp;
							<Button type="primary" htmlType="button" icon="star-o" onClick={this.addUserCollection.bind(this)}>收藏该文章</Button>
						</Form>
						{commentList}
					</Col>
				</Row>
			</div>
		)
	}
};

export default CommonComments = Form.create({})(CommonComments)