import React, { Component } from 'react';
import '../assets/styles.css';

type footerProps = {
    pageNames: string[];
}

export default class Footer extends Component<footerProps> {
    render() {

        const links = [
            this.props.pageNames.map(pageRef => <a href={"/#" + pageRef}>{ pageRef }</a>)
        ];

        return(
            <div className="footer">
                <div className="links">
                    { links }
                </div>
            </div>
        );
    };
};