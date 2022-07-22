import React, { Component } from "react";
import './hof.css';

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }

  renderDisplay = (userid, username, usertype) => {
    return (
      <p>
        <span>Id: {userid}</span>
        <span>Name : {username}</span>
        <span>User Type: {usertype}</span>
      </p>
    );
  };

  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => {
      return this.renderDisplay(item.id, item.name, item.user_type);
    });
    return mapRows;
  };

  filterUserType = () => {
    const data = this.state.userData;
    const filteredData = data
      .filter((item) => {
        var filteredItem = item.user_type === "Designer";
        return filteredItem;
      })
      .map((item) => {
        return this.renderDisplay(item.id, item.name, item.user_type);
      });
    return filteredData;
  };

  filterLetter = () => {
    const data = this.state.userData;
    const filteredData = data
      .filter((item) => {
        var filteredItem = item.name.indexOf("J") === 0;
        return filteredItem;
      })
      .map((item) => {
        return this.renderDisplay(item.id, item.name, item.user_type);
      });
    return filteredData;
  };

  filterAge = () => {
    const data = this.state.userData;
    const filteredData = data
      .filter((item) => {
        var filteredItem = item.age > 28 && item.age <= 50;
        return filteredItem;
      })
      .map((item) => {
        return this.renderDisplay(item.id, item.name, item.user_type);
      });
    return filteredData;
  };

  sumExperienceDesigners = () => {
    var totalAge = 0;
    const data = this.state.userData;
    data
      .filter((item) => {
        var filteredItem = item.user_type === "Designer";
        return filteredItem;
      })
      .map((item) => (totalAge += item.years));
    return totalAge;
  };

  render() {
    return (
      <div className="container">
        <h1>Display all items</h1>
        <div className="display-box">{this.renderItems()}</div>
        <h1>Display based on user type</h1>
        <div className="display-box">{this.filterUserType()}</div>
        <h1>Filter all data starting with J</h1>
        <div className="display-box">{this.filterLetter()}</div>
        <h1>
          Filter all data based on age greater thant 28 and age less than or
          equal to 50
        </h1>
        <div className="display-box">{this.filterAge()}</div>
        <h1>Find the total years of the designers</h1>
        <div className="display-box">{this.sumExperienceDesigners()}</div>
      </div>
    );
  }
}

export default HigherOrderComponent;
