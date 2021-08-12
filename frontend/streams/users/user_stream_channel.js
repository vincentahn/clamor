export const createStream = (currentUserId, props) => {
  return App.cable.subscriptions.create(
    {
      channel: 'UserStreamChannel',
      id: currentUserId
    },
    {
      received: data => {
        switch(data.type){
          case 'receivePrivateChannelNotification':
            props.receiveNotification(data.private_channel);
            break;

          default:
            break;
        }
      }
    }
  )
}