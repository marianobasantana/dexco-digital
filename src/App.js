import React, { useState } from "react";
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Row, Col, Divider } from 'antd';
import GraphicA from './components/GraphicA';
import GraphicB from './components/GraphicB';
import GraphicC from './components/GraphicC';
import GraphicD from './components/GraphicD';
import Menu from './components/Menu';

function App() {

  const { Content, Footer, Sider } = Layout;

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  const phraseA = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex mi, tincidunt et dignissim sit amet, laoreet et ipsum. Vivamus nec velit fermentum, suscipit nisl eget, vulputate elit. Cras convallis porttitor velit quis auctor. Aliquam arcu tellus, finibus in ligula sit amet, fermentum sagittis lectus. Cras ullamcorper felis id sapien luctus pulvinar. Morbi ut ipsum id leo accumsan hendrerit nec ac augue. Integer malesuada fringilla ornare.';
  const phraseB = 'Integer sapien lorem, fringilla ut scelerisque eget, consectetur a quam. Nunc vitae lectus non justo vestibulum scelerisque id non metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam vitae lectus a lacus dignissim sagittis non a purus. Phasellus auctor gravida nisl. Etiam sodales tristique lectus vel gravida. Sed blandit mi aliquam enim faucibus, vel pulvinar urna sollicitudin. Morbi a venenatis orci, egestas rhoncus tortor.';

  return (
    <Layout className="App" style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} className="mySidebar">
        <Menu />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: collapsed ? 96 : 200, transition: 'margin-left 0.3s ease' }}>
        <Content style={{ margin: '16px' }}>
          <div style={{ padding: 24, backgroundColor: '#fff' }}>
            <Row gutter={[16, 16]} align="middle">
              <Col className="gutter-row" span={24} style={{ background: '#001529' }}>
                <GraphicA />
              </Col>
            </Row>
          </div>

          <a href="section-01" name="section-01" id="section-01"> </a>
          <Divider orientation="left" orientationMargin={0}>Seção 1</Divider>
          <div style={{ padding: 24, minHeight: 360, backgroundColor: '#fff' }}>
            <Row gutter={[16, 16]} align="middle">
              <Col className="gutter-row" xs={24} sm={24} md={12}>
                <GraphicB />
              </Col>
              <Col className="gutter-row" xs={24} sm={24} md={12}>
                <div className="mycard-text">
                  <p>{phraseA}</p>
                  <p>{phraseB}</p>
                </div>
              </Col>
            </Row>
          </div>

          <Divider orientation="left" orientationMargin={0}>Seção 1.1</Divider>
          <Row gutter={[16, 16]} type="flex">
            <Col className="gutter-row" xs={24} sm={24} md={12}>
              <div className="mycard-text">
                <p>{phraseB}</p>
              </div>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={12}>
              <div className="mycard-graphic"><GraphicB /></div>
            </Col>
          </Row>

          <a href="section-02" name="section-02" id="section-02"> </a>
          <Divider orientation="left" orientationMargin={0}>Seção 2</Divider>
          <Row gutter={[16, 16]} type="flex">
            <Col className="gutter-row" xs={24} sm={24} md={12}>
              <div className="mycard-graphic"><GraphicB /></div>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={12}>
              <div className="mycard-text">
                <p>{phraseA}</p>
                <p>{phraseB}</p>
              </div>
            </Col>

            <Col className="gutter-row" xs={24} sm={24} md={12}>
              <div className="mycard-text">
                <p>{phraseB}</p>
              </div>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={12}>
              <div className="mycard-graphic"><GraphicB /></div>
            </Col>

            <Col className="gutter-row" xs={24} sm={24} md={12} lg={8}>
              <div className="mycard-text">
                <p>{phraseA}</p>
                <p>{phraseB}</p>
              </div>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={12} lg={8}>
              <div className="mycard-text">
                <p>{phraseB}</p>
              </div>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={12} lg={8}>
              <div className="mycard-graphic"><GraphicC /></div>
            </Col>
          </Row>

          <a href="section-05" name="section-05" id="section-05"> </a>
          <Divider orientation="left" orientationMargin={0}>Seção 5</Divider>
          <Row gutter={[16, 16]} type="flex">
            <Col className="gutter-row" xs={24} sm={24} md={12} lg={8}>
              <div className="mycard-graphic"><GraphicB /></div>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={12} lg={8}>
              <div className="mycard-text">
                <p>{phraseB}</p>
              </div>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={12} lg={8}>
              <div className="mycard-graphic"><GraphicC /></div>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={12}>
              <div className="mycard-graphic"><GraphicD /></div>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={12}>
              <div className="mycard-graphic"><GraphicB /></div>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Copyright ©2018 Created by ...</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
