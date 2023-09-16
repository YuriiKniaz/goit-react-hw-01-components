import { FriendListItem } from './FriendListItem';
import list from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={list.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};
