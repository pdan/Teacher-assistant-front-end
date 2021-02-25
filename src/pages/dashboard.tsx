import React from 'react';
import { useTranslation, withTranslation, WithTranslation } from "react-i18next";
import { withRouter, RouteComponentProps, Link, useHistory } from 'react-router-dom';

interface Props {

}

interface State {
   
}

class Dashboard extends React.Component<Props & RouteComponentProps & WithTranslation> {
    render() {
        return (
            <div className="dashboard">This is dashboard page</div>
        )
    }
}

export default withTranslation()(withRouter(Dashboard))