import React from 'react';
import {
	Row,
	Col
} from 'antd';
import {
	Tabs,
	Carousel
} from 'antd';
import PCNewsBlock from './pc_news_block.js';
import PCNewsImageBlock from './pc_news_image_block.js';
import PCProduct from './pc_product.js';
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {

	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true
		}

		return (
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={20}>
						<div className="container">
							<div className="leftContainer">
								<div className="carousel">
									<Carousel  {...settings}>
										<div><img src="/src/images/carousel_1.jpg"/></div>
										<div><img src="/src/images/carousel_2.jpg"/></div>
										<div><img src="/src/images/carousel_3.jpg"/></div>
										<div><img src="/src/images/carousel_4.jpg"/></div>
									</Carousel>
								</div>
								<PCNewsImageBlock count={6} type="guoji" cardTitle="国际头条" width="400px" imageWidth="112px"/>
							</div>
							<Tabs className="tabs_news">
								<TabPane tab="头条" key="1">
									<PCNewsBlock count={20} type="top" bordered="false" width="100%"/>
								</TabPane>
								<TabPane tab="国际" key="2">
									<PCNewsBlock count={20} type="guoji" bordered="false" width="100%"/>
								</TabPane>
								<TabPane tab="娱乐" key="3">
									<PCNewsBlock count={20} type="yule" bordered="false" width="100%"/>
								</TabPane>
								<TabPane tab="社会" key="4">
									<PCNewsBlock count={20} type="shehui" bordered="false" width="100%"/>
								</TabPane>
							</Tabs>
							<Tabs className="tabs_product">
								<TabPane tab="产品" key="1">
									<PCProduct/>
								</TabPane>
							</Tabs>
							<div>
							<PCNewsImageBlock count={8} type="guonei" width="100%" cardTitle="国内新闻" imageWidth="132px"/>
							<PCNewsImageBlock count={16} type="yule" width="100%" cardTitle="娱乐新闻" imageWidth="132px"/>
						</div>
						</div>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		)
	};
}