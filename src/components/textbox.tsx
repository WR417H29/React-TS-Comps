import React, { Component } from 'react';
import '../assets/styles.css';
import '../assets/boxes.css';

type textProps = {
    body: any;
};

export default class Textbox extends Component<textProps> {
    render() {
        return (
            <div className="text-container">
                <p>{this.props.body}</p>
            </div>
        );
    };
};