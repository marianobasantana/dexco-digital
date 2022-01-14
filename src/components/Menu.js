import { Menu } from 'antd';
import {
  FileTextOutlined,
  UploadOutlined,
} from '@ant-design/icons';

function SidebarMenu() {

  const { SubMenu } = Menu;

  return (
    <>
      <div className="logo" style={{ height: '32px', margin: '16px', background: 'rgba(255, 255, 255, 0.3)' }} />
      
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<FileTextOutlined />}>
          <a href="#section-01">Seção 1</a>
        </Menu.Item>
        <Menu.Item key="2" icon={<FileTextOutlined />}>
          <a href="#section-02">Seção 2</a>
        </Menu.Item>
        <SubMenu key="sub1" title="Seção 3" icon={<FileTextOutlined />}>
          <Menu.Item key="3">Opção A</Menu.Item>
          <Menu.Item key="4">Opção B</Menu.Item>
          <Menu.Item key="5">Opção C</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title="Seção 4" icon={<FileTextOutlined />}>
          <Menu.Item key="6">Opção A</Menu.Item>
          <Menu.Item key="8">Opção B</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<UploadOutlined />}>
          <a href="#section-05">Seção 5</a>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default SidebarMenu;
