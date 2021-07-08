import { Component } from 'react';
import ButtonLink from './ButtonLink';

export default class QueueTextbox extends Component {

    constructor(props){
        super(props);

        this.state = {
            rawValue: '',
            isEditMode: false
        };
    }

    onChange = (e) => {
        const value = (e?.currentTarget?.value || '');
        this.setState({ rawValue: value });
    };

    onSave = () => {
        const value = (this.state.rawValue || '').trim();
        this.props.onSave?.(value);
        this.setState({ isEditMode: false });
    };

    setEditMode = (isEditMode) => {

        if(isEditMode){
            this.setState({ rawValue: this.props.rawValue || '', isEditMode: true });
        } else {
            this.setState({ isEditMode: false })
        }

    };

    render = () => {

        if(this.state.isEditMode){
            return (
                <div className="QueueTextbox-editmode">
                    <input className="QueueTextbox-textbox" type="text" value={this.state.rawValue} onChange={(e) => this.onChange(e)} placeholder={this.props.placeholder} />
                    <span className="QueueTextbox-buttonbar">
                        <ButtonLink onClick={() => this.onSave()}>Save</ButtonLink> | <ButtonLink onClick={() => this.setEditMode(false)}>Cancel</ButtonLink>
                    </span>
                </div>
            )
        }

        return (
            <div className="QueueTextbox-displaymode">
                <span className="QueueTextbox-display">{this.props.display || ''}</span>
                <ButtonLink className="QueueTextbox-editlink" onClick={() => this.setEditMode(true)}>{this.props.display ? 'Edit' : 'Set'}</ButtonLink>
            </div>
        );
    };

}