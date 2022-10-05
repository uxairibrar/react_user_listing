import React, { useState, useEffect } from 'react';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import _ from 'lodash';

const PAGE_SIZE = 10;

const getUsersState = (state) => state.userReducer.users;
const getUsers = createSelector([getUsersState], (users) => {
  return users;
});

const Users = ({ searchItem = '' }) => {
  const users = useSelector(getUsers);

  const [paginatedUsers, setPaginatedUsers] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [filterUserList, setFilterUserList] = useState();

  useEffect(() => {
    setCurrentPage(1);
    setFilterUserList(
      users?.filter((user) => {
        const fullName =
          user.name.title + ' ' + user.name.first + ' ' + user.name.last;
        if (fullName.toLowerCase().includes(searchItem.toLowerCase())) {
          return user;
        }
      })
    );
  }, [searchItem, users]);

  // ---------- Pagination /*
  const pageCount = filterUserList
    ? Math.ceil(filterUserList.length / PAGE_SIZE)
    : 0;

  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNo) => {
    const startIndex = (pageNo - 1) * PAGE_SIZE;
    const paginatedUsers = _(filterUserList)
      .slice(startIndex)
      .take(PAGE_SIZE)
      .value();
    setPaginatedUsers(paginatedUsers);
    setCurrentPage(pageNo);
  };

  useEffect(() => {
    pagination(currentPage);
  }, [filterUserList]);

  if (pageCount === 0)
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: ' center',
        }}
      >
        <h4>No Data Found</h4>
      </div>
    );

  // ---------- Pagination */

  return (
    <div style={{ padding: '50px' }}>
      {!paginatedUsers ? (
        'No Data Found'
      ) : (
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Registration Date</th>
            </tr>
          </thead>

          <tbody>
            {paginatedUsers.map((user, index) => (
              <tr key={index}>
                <td>
                  <Link to={`details/${user.id.value}`}>
                    {user.name.title +
                      ' ' +
                      user.name.first +
                      ' ' +
                      user.name.last}{' '}
                  </Link>
                </td>
                <td>{user.email}</td>
                <td>{user.location.country}</td>
                <td>{user.registered.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? 'page-item active' : 'page-item'
              }
            >
              <p className="page-link" onClick={() => pagination(page)}>
                {page}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Users;
