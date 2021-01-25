import React, { Component } from 'react';
import '../assets/styles.css';

type navProps = {
    pageName: string;
    pageNames: string[];
}

export default class Navbar extends Component<navProps> {
    render() {

        const links = [
            this.props.pageNames.map(pageRef => <a href={ "/#" + pageRef }>{ pageRef }</a>)
        ]

        return (
            <div className="navbar">
                <div className="title">
                    {this.props.pageName}
                </div>
                <div className="nav">    
                    { links }
                </div>
            </div>
        );
    };
}