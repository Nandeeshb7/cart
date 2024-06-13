import React from 'react';
import { Layout, Menu, Badge } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const { Header } = Layout;

const NavBar = () => {
    const cartProducts = useSelector((state) => state.cart || []);

    console.log('cartProducts:', cartProducts);

    return (
        <Layout>
            <Header className="header">
                <div className="logo">
                    <Link to="/" style={{ color: 'white', fontSize: '20px' }}>Redux Toolkit</Link>
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to="/e-cart">Product</Link>
                    </Menu.Item>
                    <Menu.Item key="2" style={{ marginLeft: 'auto' }}>
                        <Link to="/cart">
                            My Bag <Badge count={cartProducts?.length} showZero />
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </Layout>
    );
}

export default NavBar;
