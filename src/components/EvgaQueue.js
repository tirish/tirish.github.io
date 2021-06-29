import { Component } from 'react';
import * as storage from '../helpers/storage';
import './EvgaQueue.css';

const apiUrl = 'https://e35-queue-tracker-api.herokuapp.com/product/?sortBy=sku:desc';

const pad = (num) => num < 10 ? '0' + num : num.toString();

const formatDate = (dateStr, isPt) => {

    if(!dateStr) return '';

    const date = new Date(dateStr);
    // isPt -> server kicks back date as UTC but the value is actually a PT date
    return isPt ? date.toLocaleString('en-US', { timeZone: 'UTC'}): date.toLocaleString('en-US');
}

export default class EvgaQueue extends Component {

    constructor(props){
        super(props);

        this.state = {
            loading: true,
            showHidden: false
        };
    }

    refreshData = () => {
        const self = this;
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                data = data.map(d => ({
                    sku: d.sku,
                    name: d.name,
                    productLink: 'https://www.evga.com/products/product.aspx?pn=' + d.sku,
                    timestamp: formatDate(d.timestampNA, true),
                    updated: formatDate(d.updatedAt),
                    hide: !!(storage.get(d.sku) || {}).hide || !d.timestampNA
                }));
                self.setState({ data: data, error: false, lastRefresh: formatDate(new Date()) });
            })
            .catch(() => self.setState({ error: true }))
            .finally(() => self.setState({ loading: false }));
    }

    componentDidMount = () => {
        this.refreshData();
    };


    toggleShowHidden = () => {
        this.setState(prev => ({ showHidden: !prev.showHidden }));
    }

    toggleSku = (sku) => {
        const cur = (storage.get(sku) || {});
        cur.hide = !cur.hide;
        storage.set(sku, cur);
        const data = this.state.data.map(d => {
            if(d.sku === sku){
                return {
                    ...d,
                    hide: cur.hide
                };
            }
            return d;
        });
        this.setState({ data: data });
    }
    
    render = () => {

        if(this.state.loading){
            return (<span>Loading...</span>);
        }
        if(this.state.error){
            return (<span>Encountered error</span>);
        }

        const renderData = this.state.data;

        return (
            <div className="EvgaQueue-container">
                <table className="EvgaQueue-table">
                    <thead>
                        <tr>
                            <th>
                                Part Number
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Queue Timestamp (PT)
                            </th>
                            <th>
                                Last Update (Local)
                            </th>
                            <th>
                                Toggle
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        renderData.map(d => (
                            (!d.hide || this.state.showHidden) && (<tr key={d.sku}>
                                <td>
                                    <a href={d.productLink} target="_blank" rel="noreferrer">{d.sku}</a>
                                </td>
                                <td>
                                    {d.name}
                                </td>
                                <td>
                                    {d.timestamp}
                                </td>
                                <td>
                                    {d.updated}
                                </td>
                                <td>
                                    <a href="#" onClick={() => this.toggleSku(d.sku)}>{d.hide ? 'Show' : 'Hide'}</a>
                                </td>
                            </tr>)
                        ))
                    }
                    </tbody>
                </table>
                <div className="EvgaQueue-showhidden-toggle-container">
                    <a href="#" class="EvgaQueue-showhidden-toggle" onClick={() => this.toggleShowHidden()}>{this.state.showHidden ? 'Hide hidden items' : 'Show hidden items'}</a>
                </div>
                <div className="EvgaQueue-footer">
                    <div className="EvgaQueue-footer-datasource">
                        <small>Data source: <a href="https://www.element35gaming.com/" target="_blank" rel="noreferrer">https://www.element35gaming.com/</a></small>
                    </div>
                    <div className="EvgaQueue-footer-timer">
                        <small>Last refresh: {this.state.lastRefresh}</small>
                    </div>
                </div>
            </div>
        );
    };

}
