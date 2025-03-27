/****************************************************
 Listeners
 ****************************************************/

listeners.defaultWebhookAlchemer = {
    label: 'Catch HTTP Alchemer events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/alchemer',
        }
    },
    callback: function(event) {
        sys.logs.info('[alchemer] Received Alchemer webhook. Processing and triggering a package event.', event);
        sys.events.triggerEvent('alchemer:webhook', event.data);
    }
};
