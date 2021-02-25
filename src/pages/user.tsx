import React from 'react';
import { useTranslation, withTranslation, WithTranslation } from "react-i18next";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Layout, Menu, Select, Form, Input, Button, Radio, DatePicker, PageHeader, Tabs, Alert, Descriptions, List, Typography, Divider } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { FormInstance } from 'antd/lib/form';

import { UserProfile, UserSettings } from '../models/user';
import { setLanguage, getLanguage } from '../services/configurations';
import { saveProfile } from '../services/user';


interface Props {

}

interface State {
   profile: UserProfile
}

const { Item } = Form;
const { TabPane } = Tabs;
const { Option } = Select;



class User extends React.Component<Props & RouteComponentProps & WithTranslation> {
   constructor(props: Props & RouteComponentProps & WithTranslation) {
      super(props)

      this.onSubmitSettingsForm = this.onSubmitSettingsForm.bind(this)
   }

   state: State = {
      profile: {} as UserProfile
   }

   private userProfileForm = React.createRef<FormInstance<UserProfile>>();
   private settingsForm = React.createRef<FormInstance<UserSettings>>();

   async onSubmitPersonalInfoForm(profile: UserProfile) {
      // console.log(this.userProfileForm)
      // await saveProfile(userProfile);
   }

   async onSubmitSettingsForm(settings: UserSettings) {
      if (this.settingsForm.current) {
         const userSettings: UserSettings = this.settingsForm.current.getFieldsValue()
         setLanguage(userSettings.language, true)
      }

   }

   componentDidMount() {
      this.settingsForm.current?.setFieldsValue({ language: 'fa' })
   }

   render() {
      const { t } = this.props
      return (
         <Layout className="page user">
            <PageHeader
               className="site-page-header-responsive"
               onBack={() => window.history.back()}
               title={t('User')}
               subTitle={t('Student informations')}
               style={{ backgroundColor: '#fff' }}
            />

            <Content style={{
               padding: '8px 24px',
               margin: '16px',
               backgroundColor: '#fff',
               minHeight: 280,
            }}>
               <Tabs defaultActiveKey="1">
                  <TabPane tab={t('Personal Informations')} key="1" >
                     <Form
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 8 }}
                        onFinish={this.onSubmitPersonalInfoForm}
                        ref={this.userProfileForm}
                     >

                        <Alert message={t(`Please fill informations correctly`) + '.'} closable type="info" showIcon style={{ marginBottom: '20px' }} />

                        <Item
                           label={t('First Name')}
                           name="firstName"
                           rules={[{ required: true }]}
                        >
                           <Input type="text" />
                        </Item>

                        <Item
                           label={t('Surname')}
                           name="surname"
                           rules={[{ required: true }]}
                        >
                           <Input type="text" />
                        </Item>

                        <Item
                           label={t('Email')}
                           name="email"
                           rules={[{ required: true }]}
                        >
                           <Input type="email" />
                        </Item>

                        <Form.Item name="birthdate" label={t('Birthdate')} rules={[{ required: true }]}>
                           <DatePicker />
                        </Form.Item>

                        <Form.Item name="sex" label={t('Sex')} rules={[{ required: true }]}>
                           <Radio.Group>
                              <Radio value="female">{t('Female')}</Radio>
                              <Radio value="male">{t('Male')}</Radio>
                           </Radio.Group>
                        </Form.Item>

                        <Item
                           label={t('Job title')}
                           name="jobTitle"
                           rules={[{ required: true }]}
                        >
                           <Input type="text" />
                        </Item>

                        <Item
                           label={t('Introduced By')}
                           name="introducedBy"
                           rules={[{ required: true }]}
                        >
                           <Input type="text" />
                        </Item>

                        <Item
                           label={t('Second Phone Number')}
                           name="secondPhone"
                           rules={[{ required: true }]}
                        >
                           <Input type="text" />
                        </Item>

                        <Item
                           label={t('Education')}
                           name="education"
                           rules={[{ required: true }]}
                        >
                           <Input type="text" />
                        </Item>

                        <Item
                           label={t('Country')}
                           name="country"
                           rules={[{ required: true }]}
                        >
                           <Input type="text" />
                        </Item>

                        <Item
                           label={t('City')}
                           name="city"
                           rules={[{ required: true }]}
                        >
                           <Input type="text" />
                        </Item>

                        <Item
                           label={t('Address')}
                           name="address"
                           rules={[{ required: true }]}
                        >
                           <Input.TextArea rows={4} />
                        </Item>
                        <Item wrapperCol={{ offset: 8, span: 16 }}>
                           <Button type="primary" htmlType="submit">Save</Button>
                        </Item>
                     </Form>
                  </TabPane>
                  <TabPane tab={t('Settings')} key="2" >
                     <Form
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 8 }}
                        onFinish={this.onSubmitSettingsForm}
                        ref={this.settingsForm}
                     >
                        <Item
                           label={t('Language')}
                           name="language"
                           rules={[{ required: true }]}
                        >
                           <Select>
                              <Option key="1" value="en">English</Option>
                              <Option key="2" value="fa">فارسی</Option>
                           </Select>
                        </Item>
                        <Item wrapperCol={{ offset: 8, span: 16 }}>
                           <Button type="primary" htmlType="submit">{t('Save')}</Button>
                        </Item>
                     </Form>
                  </TabPane>
               </Tabs>
            </Content>
         </Layout>
      )
   }
}

export default withTranslation()(withRouter(User))

