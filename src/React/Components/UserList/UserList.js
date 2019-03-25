import React from 'react';
import PropTypes from 'prop-types';
import s from './UserList.module.css';

class UserList extends React.Component {
  static propTypes = {

  };

  render() {
    return (
      <ul>
        {
          this.props.users.map(user => (
            <li className={s.item} key={user.id}>
              <img src={user.avatar_url} className={s.image} />
              <span className={s.name}>{user.login}</span>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default UserList;