import { Component } from 'react';

class RadioButtonGroup extends Component {

    onSelect = (opt) => {
        this.props.onSelect?.(opt);
    };

    render = () => {
        const { options, name, selected } = this.props;

        return (
            <>
                <div className="input-group input-group-lg">
                    {options.map(opt => (
                        <label key={opt.value} className={`btn btn-${selected === opt.value ? 'success' : 'outline-primary'}`} htmlFor={`${name}-${opt.value}`}>{opt.label}</label>
                    ))}
                </div>
                <div>
                    {options.map(opt => (
                        <input key={opt.value} type="radio" className="btn-check" name={name} id={`${name}-${opt.value}`} autoComplete="off" checked={selected === opt.value} onChange={() => this.onSelect(opt)} />
                    ))}
                </div>
            </>
        )
    };

}

export default RadioButtonGroup;