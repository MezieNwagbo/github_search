import React from 'react';
import { createContext, useContext, useState } from 'react';
import axios from '../axios';

const queryContext = createContext();

export default function QueryProvider({ children }) {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userRepos, setUserRepos] = useState([]);
  const [userOrgs, setUserOrgs] = useState([]);

  const handleQueryInput = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/search/users?q=${query}`);
      setUsers(response.data.items);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchUsers = async (e) => {
    e.preventDefault();
    await fetchUsers();
  };

  const fetchUserRepos = async (user) => {
    try {
      const userRepos = await axios.get(`/users/${user}/repos`);
      setUserRepos(userRepos);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUserOrgs = async (user) => {
    try {
      const userOrgs = await axios.get(`/users/${user}/orgs`);
      setUserOrgs(userOrgs);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleUserDetails = async (user) => {
  //   await fetchUserDetails(user);
  // };

  const queryContextData = {
    query: query,
    setQuery: setQuery,
    loading: loading,
    setLoading: setLoading,
    users: users,
    setUser: setUsers,
    handleQueryInput: handleQueryInput,
    fetchUsers: fetchUsers,
    handleSearchUsers: handleSearchUsers,
    fetchUserRepos: fetchUserRepos,
    fetchUserOrgs: fetchUserOrgs,
    userRepos: userRepos,
    setUserRepos: setUserRepos,
    userOrgs: userOrgs,
    setUserOrgs: setUserOrgs,
    // handleUserDetails: handleUserDetails,
  };

  return (
    <queryContext.Provider value={queryContextData}>
      {children}
    </queryContext.Provider>
  );
}

export const useQuery = () => useContext(queryContext);
