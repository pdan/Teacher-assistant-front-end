import React from 'react';
import { Layout, Menu, Breadcrumb, Form, Input, Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { useTranslation, withTranslation, WithTranslation } from "react-i18next";
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { User } from '../models/user';
import { signup } from '../services/user';
import { setLanguage } from '../services/configurations';

interface Props {

}

const { Header, Content, Footer, Sider } = Layout;
const { Item } = Form;

class UserSignup extends React.Component<Props & RouteComponentProps & WithTranslation> {
   async onSignup(values: any) {
      if (values.password !== values.repeatPassword)
         alert('Passwords aren\'t match')
      const user: User = { phone: values.phone, password: values.password } as User;
      await signup(user, true)
   }

   render() {
      const {t} = this.props
      return (
         <Layout className="page signin">
            <div className="plate">
               <img src="/assets/img/personal-growth.png" alt="" />
               <Form className="form" onFinish={this.onSignup}>
                  <Item
                     label={t("Phone Number")}
                     name="phone"
                     rules={[{ required: true, message: 'Please enter phone number!' }]}
                     labelCol={{ span: 8 }}
                     wrapperCol={{ span: 16 }}
                  >
                     <Input type="text" placeholder="98912xxxxxxx" />
                  </Item>

                  <Item
                     label={t("Password")}
                     name="password"
                     rules={[{ required: true, message: t('Please enter password!') }]}
                     labelCol={{ span: 8 }}
                     wrapperCol={{ span: 16 }}
                  >
                     <Input type="password" />
                  </Item>

                  <Item
                     label={t("Re Password")}
                     name="repeatPassword"
                     rules={[{ required: true, message: t('Please enter repeat password!') }]}
                     labelCol={{ span: 8 }}
                     wrapperCol={{ span: 16 }}
                  >
                     <Input type="password" />
                  </Item>

                  <Item style={{textAlign: 'center'}}>
                     <Button type="primary" htmlType="submit" style={{ width: '100%', marginBottom: '20px' }}>{t('Sign Up')}</Button>
                     <Link to="/user/signin" >{t('or Signin')}</Link>
                  </Item>
               </Form>
            </div>
            <div className="languages">
               <a className="persian" onClick={() => setLanguage('fa', true)}>فارسی</a> |
               <a className="english" onClick={() => setLanguage('en', true)}>English</a>
            </div>
         </Layout>
      )
   }
}

export default withTranslation()(withRouter(UserSignup))