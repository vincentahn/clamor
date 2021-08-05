import * as PrivateChannelApiUtil from "../util/private_channel_api_utils";

export const fetchChannels = (currentUserId = 1) => {
  PrivateChannelApiUtil.fetchPrivateChannels(currentUserId)
    .then(data => {
      console.log(data);
    });
}