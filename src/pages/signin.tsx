import React from 'react';
import { Layout, Menu, Breadcrumb, Form, Input, PageHeader, Tabs, Button, Statistic, Descriptions } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { useTranslation, withTranslation, WithTranslation } from "react-i18next";
import { withRouter, RouteComponentProps, Link, useHistory , Redirect} from 'react-router-dom';
import { User } from '../models/user';
import { signin } from '../services/user';
import { setLanguage } from '../services/configurations';

interface Props {

}

const { Header, Content, Footer, Sider } = Layout;
const { Item } = Form;

class UserSignin extends React.Component<Props & RouteComponentProps & WithTranslation>{

   constructor(props:Props & RouteComponentProps & WithTranslation) {
      super(props)

      this.onSignin = this.onSignin.bind(this)
   }
   // static contextTypes = {
   //    router: () => true, // replace with PropTypes.object if you use them
   //  }

   async onSignin(values: any) {
      const user: User = { phone: values.phone, password: values.password } as User;
      await signin(user)
      this.props.history.push('/dashboard')
   }

   render() {
      const {t} = this.props
      return (
         <Layout className="page signin">
            <div className="plate">
               <img src="/assets/img/personal-growth.png" alt="" />
               <Form className="form" onFinish={this.onSignin}>
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
                     rules={[{ required: true, message: 'Please enter password!' }]}
                     labelCol={{ span: 8 }}
                     wrapperCol={{ span: 16 }}
                  >
                     <Input type="password" />
                  </Item>

                  <Item style={{textAlign: 'center'}}>
                     <Button type="primary" htmlType="submit" style={{ width: '100%', marginBottom: '20px' }}>{t('Signin')}</Button>
                     <Link to="/user/signup" >{t('or Signup')}</Link>
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

export default withTranslation()(withRouter(UserSignin))