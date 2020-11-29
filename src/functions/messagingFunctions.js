import React from 'react';
import ReactDOM from 'react-dom';
import SystemMessage from '../components/SystemMessage';

var messagesFactory = null;

class MessagesFactory {
    constructor(portalDOM) {
        this.portalDOM = portalDOM;
    }

    _createMessage(type, content, header) {
        if(!this.portalDOM) return null;

        var key = `message-${new Date().toISOString()}`;

        var element = React.createElement(
            SystemMessage,
            {
                [type]: true,
                size: 'small',
                header,
                content,
                key
            }
        );
        
        return ReactDOM.createPortal(element, this.portalDOM, key);
    }

    createErrorMessage(content) {
        return this._createMessage('error', content, 'Error!');
    }

    createSuccessMessage(content) {
        return this._createMessage('success', content, 'Success!');
    }

}

export var getMessagesFactory = (portalDOM=null) => {
    if(!messagesFactory) messagesFactory = new MessagesFactory(portalDOM);
    return messagesFactory
}