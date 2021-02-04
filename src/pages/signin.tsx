import React from 'react';
import { Layout, Menu, Breadcrumb, Form, Input, Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { Item } = Form;
class UserSignin extends React.Component {
   onSignin(values: any) {
      console.log(values.username)
   }

   render() {
      return (
         <Layout className="page signin">
            <div className="plate">
               <Form onFinish={this.onSignin}>
                  <Item
                     label="Username"
                     name="username"
                     rules={[{ required: true, message: 'Please enter username!' }]}
                     labelCol={{ span: 8 }}
                     wrapperCol={{ span: 16 }}
                  >
                     <Input type="text" />
                  </Item>
                  <Item
                     label="Password"
                     name="password"
                     rules={[{ required: true, message: 'Please enter password!' }]}
                     labelCol={{ span: 8 }}
                     wrapperCol={{ span: 16 }}
                  >
                     <Input type="text" />
                  </Item>

                  <Item
                     wrapperCol={{ offset: 8, span: 16 }}
                  >
                     
                     <Button type="primary" htmlType="submit">Sign In</Button>
                  </Item>
               </Form>
            </div>
         </Layout>
      )
   }
}

export default UserSignin