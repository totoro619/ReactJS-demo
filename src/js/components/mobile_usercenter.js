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
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer.js';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;

export default class MobileUserCenter extends React.Component {
	constructor() {
		super();
		this.state = {
			usercomments: '',
			usercollection: '',
			previewVisible: false,
			previewImage: ''
		};
	};

	componentDidMount() {
		let myFetchOptions = {
			method: 'GET'
		};

		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userId, myFetchOptions)
			.then(response => response.json())
			.then(json => this.setState({
				usercollection: json
			}));

		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userid, myFetchOptions)
			.then(response => response.json())
			.then(json => {
				this.setState({
					usercomments: json
				});
			});

	};


	render() {

		const props = {
			action: 'http://newsapi.gugujiankong.com/handler.ashx',
			listType: 'picture-card',
			defaultFileList: [{
				uid: -1,
				name: 'xxx.png',
				state: 'done',
				url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
				thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
			}],
			onPreview: (file) => {
				this.setState({
					previewVisible: true,
					previewImage: file.url
				})
			}
		};

		const {
			usercollection,
			usercomments
		} = this.state;


		const collectionList = usercollection.length ?
			usercollection.map((uc, index) => {
				<Card key={index} title={uc.uniquekey} extra={<a target="_blank" href={`/#/details/${uc.uniquekey}`}>查看</a>}>
					<p>{uc.Title}</p>
				</Card>
			}) : '您还没有收藏任何新闻，快去收藏一些吧！';

		const usercommentsList = usercomments.length ?
			usercomments.map((comment, index) => (
				<Card key={index} title={`于 ${comment.datetime} 评论了文章 ${comment.uniquekey}`} extra={<a target="_blank" href={`/#/details/${comment.uniquekey}`}>查看</a>}>
					<p>{comment.Comments}</p>
				</Card>
			)) :
			'您还没有发表过任何评论。';



		return (
			<div>
				<MobileHeader/>
				<Row>
					<Col span={24}>
						<Tabs>
						<TabPane tab="我的收藏列表" key="1">
							<div class="comment">
									<Row>
										<Col span={24}>
											{collectionList}
										</Col>
									</Row>
								</div>
						</TabPane>
						<TabPane tab="我的评论列表" key="2">
							<div class="comment">
								<Row>
									<Col span={24}>
										{usercommentsList}
									</Col>
								</Row>
							</div>
						</TabPane>
						<TabPane tab="头像设置" key="3">
							<div class="clearfix">
									<Upload {...props}>
										<Icon type="plus"/>
										<div className="ant-upload-text">上传照片</div>
									</Upload>
									<Modal visible ={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
										<img alt="预览" src={this.state.previewImage}/>
									</Modal>
								</div>
						</TabPane>
					</Tabs>
					</Col>
				</Row>
				<MobileFooter/>
			</div>
		)
	};
}