import { Component } from 'react';
import PigGameSetup from './PigGameSetup';
import RadioButtonGroup from './RadioButtonGroup';
import * as storage from '../helpers/storage';

class PigGame extends Component {

    constructor(props){
        super(props);

        this.state = {
            stage: 'setup',
            game: null
        };
    }

    onSetupComplete = (config) => {
        const game = {
            playTo: config.playTo,
            players: config.names.map(n => ({
                name: n,
                score: 0
            })),
            currentPlayer: 0,
            roundPlays: [],
            mode: storage.get('pig_scoring_mode') || 'basic',
            endOfTurn: false
        };
        this.setState({
            game,
            stage: 'normal_play'
        });
        storage.set('pig_players', config.names);
    };

    onModeChange = ({ value }) => {
        this.setState(prev => (
            { 
                ...prev, 
                game: { 
                    ...prev.game, 
                    mode: value 
                }
            }
            ));
        storage.set('pig_scoring_mode', value);
    };

    addRoundScore = (num, endOfTurn) => {
        this.setState(prev => ({
            ...prev,
            game: {
                ...prev.game,
                endOfTurn,
                roundPlays: [...prev.game.roundPlays].concat([num])
            }
        }))
    };

    undo = () => {
        if(this.state.game.roundPlays.length > 0){
            this.setState(prev => ({
                ...prev,
                game: {
                    ...prev.game,
                    roundPlays: prev.game.roundPlays.slice(0, -1),
                    endOfTurn: false
                }
            }));
        }
    };

    getRoundScore = () => this.state.game.roundPlays.length > 0 ? this.state.game.roundPlays.reduce( (n, total) => n + total, 0) : 0;

    onOinkerOrPigOut = (isOinker) => {
        const currentPlayer = this.state.game.players[this.state.game.currentPlayer];
        const roundScore = this.getRoundScore();
        let currentScore = (isOinker ? currentPlayer.score : 0) + roundScore;

        // deduct all points
        this.addRoundScore(-1 * currentScore, true);
    };

    onTurnComplete = () => {
        const roundScore = this.getRoundScore();
        this.setState(prev => {

            let enterWinningRound = false;
            const newState = {
                ...prev,
                game: {
                    ...prev.game,
                    roundPlays: [],
                    endOfTurn: false,
                    players: prev.game.players.map((p, idx) => {
                        if(prev.game.currentPlayer === idx){
                            // update current player's global score
                            const newScore = p.score + roundScore;
                            let isFinalScore = prev.stage === 'final_round';
                            if(newScore >= prev.game.playTo){
                                enterWinningRound = true;
                                isFinalScore = true;
                            }
                            return {
                                ...p,
                                score: newScore,
                                isFinalScore,
                                finalRoundStarter: enterWinningRound && prev.stage !== 'final_round'
                            };
                        }
                        return p;
                    })
                }
            };

            // goto next player
            newState.game.currentPlayer = (newState.game.currentPlayer+1) % newState.game.players.length;

            if(enterWinningRound){
                newState.stage = 'final_round';
            }

            const nextPlayer = newState.game.players[newState.game.currentPlayer];
            if(nextPlayer.finalRoundStarter){
                newState.stage = 'game_over';

                let winnerIdx = 0;
                let winnerScore = -1;
                for(let i = 0; i < newState.game.players.length; i++){
                    const player = newState.game.players[i];
                    if(player.score > winnerScore){
                        winnerScore = player.score;
                        winnerIdx = i;
                    }
                }
                
                newState.game.winnerIdx = winnerIdx;
            }

            return newState;
        });
    };

    onNewGame = () => {
        this.setState({
            game: null,
            stage: 'setup'
        })
    };

    renderAdvancedScoring = () => {
        
        const renderAddButton = (num) => (
            <div className="col">
                <button type="button" className="btn btn-lg btn-dark w-100" onClick={() => this.addRoundScore(num)} disabled={this.state.game.endOfTurn}>{`+${num}`}</button>
            </div>
        )

        return (
            <>
            <div className="row mb-3">
                {renderAddButton(1)}
                {renderAddButton(5)}
                {renderAddButton(10)}
            </div>
            <div className="row mb-3">
                {renderAddButton(15)}
                {renderAddButton(20)}
                {renderAddButton(25)}
            </div>
            <div className="row mb-3">
                {renderAddButton(40)}
                {renderAddButton(60)}
            </div>
            <div className="row mb-3">
                <div className="col">
                    <button type="button" className="btn btn-lg btn-warning w-100" onClick={() => this.onOinkerOrPigOut(false)} disabled={this.state.game.endOfTurn}>Pig Out (Reset Round)</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-lg btn-danger w-100" onClick={() => this.onOinkerOrPigOut(true)} disabled={this.state.game.endOfTurn}>Oinker (Reset Total Score)</button>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <button type="button" className="btn btn-lg btn-success w-100" onClick={() => this.onTurnComplete()}>End Turn</button>
                </div>
            </div>
        </>
        );
    };

    render = () => {
        const { stage, game } = this.state;
        if(stage === 'setup'){
            const initialNames = storage.get('pig_players');
            return (<PigGameSetup onSetupComplete={this.onSetupComplete} initialNames={initialNames} />);
        }

        const scoreboard = this.renderScoreboard();
        const currentPlayer = game.players[game.currentPlayer];
        const roundScore = this.getRoundScore();
        const scoringModes = [
            {
                label: 'Beginner',
                value: 'basic'
            },
            {
                label: 'Advanced',
                value: 'adv'
            }            
        ];

        const winner = stage === 'game_over' ? game.players[game.winnerIdx] : null;

        return (
            <div>
                {stage !== 'game_over' && (
                    <>                        
                        <h3>Scoring Mode</h3>
                        <RadioButtonGroup options={scoringModes} selected={this.state.game.mode} onSelect={this.onModeChange} />
                        <div className="mt-3">
                            {this.state.game.mode === 'adv' && (this.renderAdvancedScoring())}
                            {this.state.game.mode === 'basic' && (<span>Coming soon! Until then, use Advanced scoring.</span>)}
                        </div>
                        <div className="mt-4">
                            <h1>Current Player: {currentPlayer.name}{stage === 'final_round' ? ' (Final Round)' : ''}</h1>
                            <p>{currentPlayer.name} has <strong>{roundScore}</strong> so far for this round. {game.roundPlays.length > 0 && (<span>After this round, total score will be <em>{roundScore + currentPlayer.score}</em></span>)}</p>
                            {game.roundPlays.length > 0 && (
                                <>
                                    <ol>
                                        {game.roundPlays.map((n, idx) => (
                                            <li key={idx}>{n}</li>
                                        ))}
                                    </ol>
                                    <button type="button" className="btn btn-secondary" onClick={this.undo}>Undo</button> 
                                </>
                            )}
                        </div>
                    </>
                )}
                { !!(stage === 'game_over' && winner) && (
                    <>
                        <h1>Winner! {winner.name}</h1>
                        <p>Score: <strong>{winner.score}</strong></p>
                    </>
                )}
                <hr />
                <h3>Scores</h3>
                {scoreboard}
                <div className="mt-4">
                    <button type="button" className="btn btn-outline-warning" onClick={this.onNewGame}>New Game</button>
                </div>
            </div>
        );
    };

    renderScoreboard = () => {
        return (
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.game.players.map((p, idx) => (
                        <tr key={idx}>
                            <th scope="row">{idx+1}</th>
                            <td>{p.name}</td>
                            <td>{p.score}{p.isFinalScore ? ' (Final)' : ''}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };
}


export default PigGame;