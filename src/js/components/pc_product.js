import React from 'react';
import {
	Card
} from 'antd';

export default class PCProduct extends React.Component {
	render() {
		return (
			<Card>
			<div className="mod_r_product" >
        <div className="cm_mod_tab cm_mod_tab1 mod_all_product">
          <div className="tab_main no_login_tabmain">
            {/* 网易新闻 */}
            <div className="cell clearfix cell_news">
              <a href="http://www.163.com/newsapp" className="logo">网易新闻</a>
              <div className="detail">
                <h3><a href="http://www.163.com/newsapp">网易新闻</a></h3>
                <div>
                  <a href="http://news.163.com/">新闻首页</a>
                  <a href="http://3g.163.com/ntes/special/00340QR4/app.html#download">ios下载</a>
                  <a href="http://3g.163.com/ntes/special/00340QR4/app.html#download">Android下载</a>
                </div>
              </div>
            </div>
            {/* 网易邮箱 */}
            <div className="cell clearfix cell_email">
              <a href="http://email.163.com/" className="logo">网易邮箱</a>
              <div className="detail">
                <h3><a href="http://email.163.com/#from=ntes_product">网易邮箱</a></h3>
                <div className="no_login">
                  <a href="http://email.163.com/#from=ntes_product">免费邮</a>
                  <a href="http://vipmail.163.com/#from=www">VIP邮箱</a>
                  <a href="http://qiye.163.com/">企业邮箱</a>
                  <a href="http://mail.163.com/client/dl.html?from=mail46">邮箱大师</a>
                </div>
              </div>
            </div>
            {/* 网易考拉 */}
            <div className="cell clearfix cell_kaola">
              <a href="http://rd.da.netease.com/redirect?t=phQvh57q8x&p=moiAt1&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2F%3Ftag%3Dbe3d8d027a530881037ef01d304eb505" className="logo">网易考拉</a>
              <div className="detail">
                <h3><a href="http://rd.da.netease.com/redirect?t=phQvh57q8x&p=moiAt1&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2F%3Ftag%3Dbe3d8d027a530881037ef01d304eb505">网易考拉</a></h3>
                {/* <p class="y_login">
					待发货:<a href="javascript:void(0);"  id="kaolafahuo" class="fontred mr20">0</a>
					待收货:<a href="javascript:void(0);"  id="kaolashouhuo" class="fontred">0</a>
					<a class="go_pro" href="javascript:void(0);" target="_blank">
						<span>查物流</span>&gt;</a>
				</p> */}
                <div>
                  <a href="http://rd.da.netease.com/redirect?t=5780b0758c433c80&p=e17af55c&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2Factivity%2Fdetail%2F30953.shtml%3Ftag%3Dbe3d8d027a530881037ef01d304eb505">新用户特价</a>
                  <a href="http://rd.da.netease.com/redirect?t=578e069c2e033c80&p=e17af55c&proId=1024&target=https%3A%2F%2Fwww.kaola.com%2Factivity%2Fdetail%2F32597.shtml%3Ftag%3Dbe3d8d027a530881037ef01d304eb505">领红包</a>
                  <a href="http://rd.da.netease.com/redirect?t=JRliBUaQHO&p=17XYDd&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2Factivity%2Fdetail%2F11835.shtml%3Ftag%3Dbe3d8d027a530881037ef01d304eb505">点卡9.8折</a>
                </div>
              </div>
            </div>
            {/* 网易音乐 */}
            {/* 客户端app */}
            <div className="cell cell_app">
              {/* 前三个位置随机，最后一个位置固定 */}
              <ul id="app_list">
                <li className="gongkaike_app"><a href="http://open.163.com/appdownload/mobile?news_other"><i /><span>公开课</span></a></li><li className="hongcai_app"><a href="https://hongcai.163.com/?from=pcsy-button"><i /><span>网易红彩</span></a></li><li className="bohe_app"><a href="http://live.ent.163.com/download?f=163.homeMyApp"><i /><span>网易薄荷</span></a></li></ul>
              <a href="http://you.163.com/?from=web_fc_menhu_xinrukou_2" className="yanxuan_app last_app"><i /><span>网易严选</span></a>
            </div>
            
              <div className="product_foot">
                <span  title="收起">收起</span>
              </div>
            </div>
          </div>
        </div>
        </Card>

		)
	}
}