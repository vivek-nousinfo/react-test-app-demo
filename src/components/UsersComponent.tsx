import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/users';
import Card from './CardComponent';
import { RootState } from '../redux/reducers/index';

const Users: React.FC = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.users.users);
    const loading = useSelector((state: RootState) => state.users.loading);
    const error = useSelector((state: RootState) => state.users.error);

    useEffect(() => {
      dispatch(getUsers());
    }, [dispatch])
  
    return (
      <>
        {users.loading && <p>Loading...</p>}
        {users.length === 0 && !loading && <p>No users available!</p>}
        {error && !loading && <p>{error}</p>}
        {users.length > 0 && users.map((user: any) => (
          <Card key={user.id} user={user} />
        ))}
      </>
    )
  }
export default Users;