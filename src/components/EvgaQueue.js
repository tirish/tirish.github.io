import { Component } from 'react';
import * as storage from '../helpers/storage';
import './EvgaQueue.css';
import ButtonLink from './ButtonLink';

const apiUrl = 'https://e35-queue-tracker-api.herokuapp.com/product/?sortBy=sku:desc';

const fixDateStr = (dateStr) => {
    // date is coming in with odd offset, fix to be UTC
    let d = new Date(dateStr);
    d.setHours(d.getHours() + 2);
    return d.toISOString();
};

const formatDate = (dateStr, isPt) => {

    if(!dateStr) return '';

    const date = new Date(dateStr);
    // isPt -> server kicks back date as UTC but the value is actually a PT date
    return isPt ? date.toLocaleString('en-US', { timeZone: 'UTC'}): date.toLocaleString('en-US');
};

//substrings -- order matters since this is the order the substring matching is run
const categories = [
    '3090',
    '3080 Ti',
    '3080',
    '3070 Ti',
    '3070',    
    '3060 Ti',
    '3060',
    'Misc'
];
    
const getCategory = (item) => {
    for(let i = 0; i < categories.length; i++){
        if(item.name.indexOf(categories[i]) >= 0){
            return categories[i];
        }
    }
    return 'Misc';
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
                    updated: formatDate(fixDateStr(d.updatedAt)),
                    hide: !!(storage.get(d.sku) || {}).hide || !d.timestampNA,
                    category: getCategory(d)
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
    
    renderCategoryRows = (category) => {

        const renderData = this.state.data.filter(d => d.category === category).map(d => ({
            ...d,
            show: !d.hide || this.state.showHidden
        }));

        if(!renderData.some(d => d.show)){
            return (<></>);
        }

        return (
            <>
                <tr className="EvgaQueue-table-category-row">
                    <th colSpan={5}>
                        {category}
                    </th>
                </tr>
                {
                    renderData.map(d => (
                        d.show && (<tr key={d.sku}>
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
                                <ButtonLink onClick={() => this.toggleSku(d.sku)}>{d.hide ? 'Show' : 'Hide'}</ButtonLink>
                            </td>
                        </tr>)
                    ))
                }
            </>              
        );
    }

    render = () => {

        if(this.state.loading){
            return (<span>Loading...</span>);
        }
        if(this.state.error){
            return (<span>Encountered error</span>);
        }

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
                        { categories.map(c => this.renderCategoryRows(c))}                    
                    </tbody>
                </table>
                <div className="EvgaQueue-showhidden-toggle-container">
                    <ButtonLink className="EvgaQueue-showhidden-toggle" onClick={() => this.toggleShowHidden()}>{this.state.showHidden ? 'Hide hidden items' : 'Show hidden items'}</ButtonLink>
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
