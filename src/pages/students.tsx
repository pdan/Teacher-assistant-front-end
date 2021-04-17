import React from 'react';
import moment, { Moment } from 'moment';
import { useTranslation, withTranslation, WithTranslation } from "react-i18next";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Layout, Menu, Select, Form, Input, Button, Table, DatePicker, PageHeader, Tabs, Alert, Descriptions, List, Typography, Divider } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { FormInstance } from 'antd/lib/form';

import { User, UserProfile, UserSettings } from '../models/user';
import { setLanguage, getLanguage } from '../services/configurations';
import { saveProfile, getProfile } from '../services/user';

import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/fa_IR';
import { getStudentsList } from '../services/student';

const { Column } = Table;
const { TabPane } = Tabs;

interface Props {

}

interface State {
    students: User[]
}

class Students extends React.Component<Props & RouteComponentProps & WithTranslation> {

    state: State = {
        students: []
    } as State

    async componentDidMount() {
        const students = await getStudentsList()
        this.setState({ students })
    }

    render() {
        const { t } = this.props
        return (
            <Layout className="page users">
                <PageHeader
                    className="site-page-header-responsive"
                    onBack={() => window.history.back()}
                    title={t('Teacher')}
                    subTitle={t('Accessibility')}
                    style={{ backgroundColor: '#fff' }}
                />

                <Content style={{
                    padding: '8px 24px',
                    margin: '16px',
                    backgroundColor: '#fff',
                    minHeight: 280,
                }}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={t('Students')} key="1" >
                            <Table
                                dataSource={this.state.students?.map(student => ({ ...student, ...student.userProfile, key: student.id }))}
                                style={{ width: '100%' }}
                                expandRowByClick
                                expandable={{
                                    expandedRowRender: record => {
                                        return (
                                            <div className="table-list">
                                                <div className="table-list-item"><span className="label">{t('Phone number')} :</span> {record.phone}</div>
                                                <div className="table-list-item"><span className="label">{t('Email')} :</span> {record.email}</div>
                                                <div className="table-list-item"><span className="label">{t('Education')} :</span> {record.education}</div>
                                                <div className="table-list-item"><span className="label">{t('Second phone number')} :</span> {record.secondPhone}</div>
                                                <div className="table-list-item"><span className="label">{t('Sex')} :</span> {record.sex}</div>
                                                <div className="table-list-item"><span className="label">{t('Job title')} :</span> {record.jobTitle}</div>
                                                <div className="table-list-item"><span className="label">{t('Introduced By')} :</span> {record.introducedBy}</div>
                                                <div className="table-list-item"><span className="label">{t('Country')} :</span> {record.country}</div>
                                                <div className="table-list-item"><span className="label">{t('City')} :</span> {record.city}</div>
                                                <div className="table-list-item"><span className="label">{t('Address')} :</span> {record.address}</div>
                                            </div>
                                        )
                                    },
                                    rowExpandable: () => true
                                }}
                            >
                                <Column dataIndex="id" key="id" title={t('ID')} />
                                <Column dataIndex="firstname" key="phone" title={t('First Name')} />
                                <Column dataIndex="surname" key="language" title={t('Surname')} />
                                <Column dataIndex="phone" key="language" title={t('Phone Number')} />
                                <Column dataIndex="email" key="language" title={t('Email')} />
                            </Table>
                        </TabPane>
                        <TabPane tab={t('Courses')} key="2" >

                        </TabPane>
                    </Tabs>
                </Content>
            </Layout>
        )
    }
}

export default withTranslation()(withRouter(Students))