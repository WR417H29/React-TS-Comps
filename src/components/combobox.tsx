import React, { Component } from 'react';

type ComboBoxProps = typeof ComboBox.defaultProps & {
    comboName: string;
    options: string[];
    disabled?: boolean;
};

export default class ComboBox extends Component<ComboBoxProps> {
    static defaultProps = {
        disabled: false
    }
    
    render() {
        
        const options = [
            this.props.options.map(opt => <option value={opt}> {opt} </option>)
        ]

        if (this.props.disabled) {
        return (
            <>
            </>
        );
        } else {
            return (
                <div className="combo">
                    <select name={this.props.comboName} id={this.props.comboName}>
                        { options }
                    </select>
                </div>
            )};
    };
};