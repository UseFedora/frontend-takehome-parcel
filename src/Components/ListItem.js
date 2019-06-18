import React from 'react';

import '../Style/listItem.css';

class ListItem extends React.Component {
    handleClick = () => {
        this.props.action(this.props.data);
    }

    render () {
        const { name, downloads, documentation_uri, authors } = this.props.data;
        return (
            <div className="list-item-wrap">
                <div className="list-item-action" onClick={this.handleClick}>{this.props.actionText}</div>
                <h3 className="list-item-name">{name}</h3>
                <h5 className="list-item-authors">Authors: {authors}</h5>
                <a href={documentation_uri} className="list-item-docs" target="_blank">
                    <h4>
                        Docs
                    </h4>
                </a>
                <h5 className="list-item-downloads">Downloads: {downloads}</h5>
            </div>
        );
    }
};

export default ListItem;