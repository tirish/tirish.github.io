import { Component } from 'react';
import RadioButtonGroup from './RadioButtonGroup';

class PigGameSetup extends Component {
    constructor(props){
        super(props);
        const names = props.initialNames || [];
        this.state = {
            players: names.length,
            names: names,
            playTo: 100,
            more: false,
            moreValue: 5,
            stage: names.length > 0 ? 'confirm' : 'players'
        };
    }

    onPlayerCountSelect = (opt) => {
        if(!opt?.value) return;

        const viaRadio = !!opt.label;

        if(opt.value === 'more'){
            this.setState(prev => ({ players: prev.moreValue, more: true}));
        } else {
            this.setState({ players: Number(opt.value), more: !viaRadio });
        }

    };

    onSetupComplete = () => {
        this.props.onSetupComplete?.({ names: this.state.names , playTo: this.state.playTo });
    }

    onMoreUpdate = (val) => {
        const num = val ? Number(val) : 0;
        this.setState({ moreValue: val, players: num });
    };

    onNameUpdate = (val, idx) => {
        this.setState(prev => ({
            names: prev.names.map((v, i) => {
                if(i === idx){
                    return val;
                }
                return v;
            })
        }));
    };

    gotoNextStep = () => {
        const cur = this.state.stage;
        if(cur === 'players'){
            if(this.state.players > 0 && this.state.players <= 20) {
                this.setState(prev => {
                    const names = new Array(this.state.players).fill('');
                    for(let i = 0; i < names.length && prev.names.length; i++){
                        names[i] = prev.names[i] || '';
                    }
                    return { stage: 'names', names }
                });
            }
        } else if(cur === 'names'){
            if(!this.state.names.some(n => !(n || '').trim())){
                this.setState({ stage: 'confirm' });
            }
        }
    };

    gotoPrevStep = () => {
        const cur = this.state.stage;

        if(cur === 'names'){
            this.setState({ stage: 'players' });
        }
        
        if(cur === 'confirm'){
            this.setState({ stage: 'names' });
        }
    }

    render = () => {
        if(this.state.stage === 'players') {
            return this.renderPlayerSelection();
        }

        if(this.state.stage === 'names'){
            return this.renderNameSelection();
        }
        // confirm
        const s = this.state.players > 1 ? 's' : '';
        return (
            <div>
                <h3>Confirm</h3>
                <p>{this.state.players} player{s}</p>
                <h4>Player Name{s}</h4>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.names.map((n, idx) => (
                            <tr key={idx}>
                                <th scope="row">{idx+1}</th>
                                <td>{n}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4 input-group">
                    <button type="button" className="btn btn-dark" onClick={this.gotoPrevStep}>Back</button>
                    <button type="button" className="btn btn-warning" onClick={this.onSetupComplete}>Confirm</button>
                </div>               
            </div>
        )
    };
    
    renderNameSelection = () => {

        const names = this.state.names;
        const missingNames = names.some(n => !(n || '').trim());

        return (
            <div>
                <h3>Player Names ({this.state.players})</h3>
                {names.map( (n, idx) => (
                    <div className="input-group mb-3" key={idx}>
                        <span className="input-group-text">{idx+1}</span>
                        <input type="text" className="form-control" value={n} onChange={(e) => this.onNameUpdate(e.currentTarget.value, idx)} />
                    </div>
                ))}
                <div className="mt-4 input-group">
                    <button type="button" className="btn btn-dark" onClick={this.gotoPrevStep}>Back</button>
                    <button type="button" className="btn btn-dark" disabled={missingNames} onClick={this.gotoNextStep}>Next</button>
                </div>
            </div>
        );
    };

    renderPlayerSelection = () => {

        const options = [
            {
                label: 'One (1)',
                value: 1
            },
            {
                label: 'Two (2)',
                value: 2
            },
            {
                label: 'Three (3)',
                value: 3
            },
            {
                label: 'Four (4)',
                value: 4
            },
            {
                label: 'More?',
                value: 'more'
            }
        ];

        const radioValue = this.state.more ? 'more' : this.state.players;

        return (
            <div>
                <h3>Number of Players</h3>
                <RadioButtonGroup options={options} selected={radioValue} onSelect={this.onPlayerCountSelect} />
                { this.state.more ? (
                    <div class="mt-3">
                        <label for="morePlayers" class="form-label">More Players</label>
                        <input type="number" class="form-control" id="morePlayers" value={this.state.moreValue} onChange={(e) => this.onMoreUpdate(e.currentTarget.value)} />
                        { this.state.players <= 0 || this.state.players > 20 ? (<small>Must be between 1 and 20 (inclusive)</small>) : null }
                    </div>
                    ) : null
                }
                <div className="mt-4">
                    <button type="button" className="btn btn-dark" disabled={this.state.players <= 0 || this.state.players > 20} onClick={this.gotoNextStep}>Next</button>
                </div>
            </div>
        );
    };
}

export default PigGameSetup;