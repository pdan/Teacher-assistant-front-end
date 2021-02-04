import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Form, Input, Button, Radio, DatePicker } from 'antd';

import { UserProfile } from '../models/user-profile';


interface Props {

}

interface State {

}

const { Item } = Form;

class Profile extends React.Component<Props & RouteComponentProps> {
    constructor(props: Props & RouteComponentProps) {
        super(props)
    }

    onSubmitForm(userProfile: UserProfile) {
        
    }

    onFaild() {

    }

    render() {
        return (
            <div className="page profile">
                <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={this.onSubmitForm}
                    onFinishFailed={this.onFaild}
                >
                    <Item
                        label="First Name"
                        name="firstName"
                        rules={[{ required: true }]}
                    >
                        <Input type="text" />
                    </Item>

                    <Item
                        label="Surname"
                        name="surname"
                        rules={[{ required: true }]}
                    >
                        <Input type="text" />
                    </Item>

                    <Item
                        label="Email"
                        name="email"
                        rules={[{ required: true }]}
                    >
                        <Input type="text" />
                    </Item>

                    <Form.Item name="birthdate" label="Birthdate" rules={[{ required: true }]}>
                        <DatePicker />
                    </Form.Item>

                    <Form.Item name="sex" label="Sex" rules={[{ required: true }]}>
                        <Radio.Group>
                            <Radio value="male">Male</Radio>
                            <Radio value="female">Female</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Item
                        label="Job title"
                        name="jobTitle"
                        rules={[{ required: true }]}
                    >
                        <Input type="text" />
                    </Item>

                    <Item
                        label="Introduced By"
                        name="introducedBy"
                        rules={[{ required: true }]}
                    >
                        <Input type="text" />
                    </Item>

                    <Item
                        label="Second Phone"
                        name="secondPhone"
                        rules={[{ required: true }]}
                    >
                        <Input type="text" />
                    </Item>

                    <Item
                        label="Education"
                        name="education"
                        rules={[{ required: true }]}
                    >
                        <Input type="text" />
                    </Item>

                    <Item
                        label="Country"
                        name="country"
                        rules={[{ required: true }]}
                    >
                        <Input type="text" />
                    </Item>

                    <Item
                        label="City"
                        name="city"
                        rules={[{ required: true }]}
                    >
                        <Input type="text" />
                    </Item>

                    <Item
                        label="Address"
                        name="address"
                        rules={[{ required: true }]}
                    >
                        <Input.TextArea rows={4} />
                    </Item>

                    <Item
                        wrapperCol={{ offset: 8, span: 16 }}
                    >

                        <Button type="primary" htmlType="submit">Save</Button>
                    </Item>
                </Form>
            </div>
        )
    }
}

export default withRouter(Profile);