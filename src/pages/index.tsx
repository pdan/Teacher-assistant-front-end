import React from 'react';
import { useTranslation, withTranslation, WithTranslation } from "react-i18next";
import { withRouter, RouteComponentProps, Link, useHistory } from 'react-router-dom';

interface Props {

}

interface State {
   
}

class Index extends React.Component<Props & RouteComponentProps & WithTranslation> {
    render() {
        return (
            <div className="index">This is index page</div>
        )
    }
}

export default withTranslation()(withRouter(Index))