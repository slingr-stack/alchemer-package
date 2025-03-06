/****************************************************
 Listeners
 ****************************************************/

 listeners.defaultWebhookGoogleDrive = {
    label: 'Catch HTTP alchemer events',
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
        sys.logs.info('[alchemer] Triggering alchemer event [webhook]');
        sys.events.triggerEvent('alchemer:webhook', event.data);
    }
};