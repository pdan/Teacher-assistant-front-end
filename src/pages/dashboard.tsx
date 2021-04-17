import React from 'react';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { useTranslation, withTranslation, WithTranslation } from "react-i18next";
import { withRouter, RouteComponentProps, Link, useHistory } from 'react-router-dom';
import { ProfileTwoTone, ContactsTwoTone } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

interface Props {

}

interface State {

}

class Dashboard extends React.Component<Props & RouteComponentProps & WithTranslation> {
    render() {
        const { t } = this.props
        return (
            <Layout>
                <Content style={{padding: '50px 0px', display: 'flex', justifyContent:'center'}}>
                    <Button onClick={() => window.location.href = '/teacher/students'} size="large" ><ContactsTwoTone twoToneColor="red" />{t('Students')}</Button>
                    <span style={{width: '20px'}}></span>
                    <Button onClick={() => window.location.href = '/user/profile'} size="large" ><ProfileTwoTone />{t('My profile')}</Button>
                </Content>
            </Layout>
        )
    }
}

export default withTranslation()(withRouter(Dashboard))