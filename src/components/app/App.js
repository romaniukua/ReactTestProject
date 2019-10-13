import React, { Component } from 'react';
import ReqresService from '../../services/reqres-service';
import CardList from '../card-list';
import Header from '../header';
import AuthorDetails from '../author-details';
import Modal from '../modal';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends Component {

  service = new ReqresService();

  state = {
    usersList: [],
    requaredItem: 0
  }


  componentDidMount() {
    this.service.getResource(`/users?page=1&per_page=100`).then(res => {
      return res.data;
    })
      .then((data => {
        this.setState({
          usersList: data
        });
      }));
  }

  onUserDelete = (id) => {
    this.setState(({usersList}) => {
      const idx = usersList.findIndex( el => el.id === id);
      const before = usersList.slice(0, idx);
      const after = usersList.slice(idx + 1);

      const newUsersList = [...before, ...after];

      return {
        usersList: newUsersList,
      };

    });
  }

  findUserProps = (id) => {
    const {usersList} = this.state
    const idx = usersList.findIndex((item) => item.id === id);
    this.setState({
      requaredItem: idx
    });
  }

  saveUserDetails = (user) => {
    const { requaredItem } = this.state;
    this.setState(({usersList}) => {
      const {id} = usersList[requaredItem];
      const newItem = {
        id,
        ...user
      };
      const newArray = [
        ...usersList.slice(0, requaredItem),
        newItem,
        ...usersList.slice(requaredItem + 1)
      ]

      return {
        usersList: newArray
      };
    });
  }

  render() {
    const { usersList, requaredItem } = this.state;
    return (
      <div className="App container d-flex flex-column bg-white">
        <Router>
          <Header />
          <main>
            <Route path="/"
                  render={() => <CardList usersList={usersList} onDeleted = {this.onUserDelete} onEdit = {this.findUserProps}/>}
                  exact/>
            <Route path="/author-details"
                  component = {AuthorDetails}/>
            <Modal userProps = {usersList[requaredItem]} onUserSave = {this.saveUserDetails}/>
          </main>
          
        </Router>

      </div>
    );
  }

}

export default App;
