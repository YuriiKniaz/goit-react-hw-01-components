import list from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={list.item}>
      <span className={isOnline ? list.online : list.status}></span>
      <img className={list.avatar} src={avatar} alt={name} width="48" />
      <p className={list.name}>{name}</p>
    </li>
  );
};
