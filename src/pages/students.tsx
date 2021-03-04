import React from 'react';
import { useTranslation, withTranslation, WithTranslation } from "react-i18next";
import { withRouter, RouteComponentProps, Link, useHistory } from 'react-router-dom';
import { getStudentsList } from '../services/student';

interface Props {

}

interface State {

}

class Students extends React.Component<Props & RouteComponentProps & WithTranslation> {

    componentDidMount() {
        console.log(getStudentsList())
    }
    render() {
        return (
            <div className="students">This is students page</div>
        )
    }
}

export default withTranslation()(withRouter(Students))