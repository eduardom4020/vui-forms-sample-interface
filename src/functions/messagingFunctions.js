import React from 'react';
import ReactDOM from 'react-dom';
import SystemMessage from '../components/SystemMessage';

var messagesFactory = null;

class MessagesFactory {
    constructor(portalDOM) {
        this.portalDOM = portalDOM;
        this.messages = {};
    }

    _createMessage(type, content, header) {
        if(!this.portalDOM) return null;

        var key = `message-${new Date().toISOString()}`;

        var element = React.createElement(
            SystemMessage,
            {
                [type]: true,
                size: 'large',
                header,
                content,
                key,
                onClose: () => {
                    delete this.messages[key];
                }
            }
        );

        this.messages = {...this.messages, [key]: element};
        
        return Object.entries(this.messages).map(([Key, Message]) => ReactDOM.createPortal(Message, this.portalDOM, Key));
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