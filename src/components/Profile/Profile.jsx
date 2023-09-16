import profile from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={profile.profile}>
      <div className={profile.description}>
        <img className={profile.avatar} src={avatar} alt={tag} />
        <p className={profile.name}>{username}</p>
        <p className={profile.tag}>{tag}</p>
        <p className={profile.location}>{location}</p>
      </div>

      <ul className={profile.stats}>
        <li>
          <span className={profile.label}>Followers</span>
          <span className={profile.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={profile.label}>Views</span>
          <span className={profile.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={profile.label}>Likes</span>
          <span className={profile.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
