import React from 'react';

import ListItem from './ListItem.js';

import '../Style/list.css';

class List extends React.Component {
    render () {
        const { title, items, throttle, action, actionText } = this.props;
        if (throttle && !items.length) return (<div></div>);
        return (
            <div className="list-wrap">
                <h3>{title}</h3>
                {
                    items.map(item => <ListItem data={item} key={item.sha} action={action} actionText={actionText} />)
                }
            </div>
        );
    }
};

export default List;