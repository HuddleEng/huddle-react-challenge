import React from 'react';

import './UserAvatar.scss';

const UserAvatar = ({ avatarUri }) => <img className='user-avatar' src={avatarUri} alt='Profile' />;

export default UserAvatar;