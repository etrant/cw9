import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "All"
    };
  }

  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  onFilter = (type) => {
    this.setState({type});
  }

  //TODO (FilteredList): Change filterItem to take into account the "type" state variable when filtering
  filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().search(this.state.search) !== -1;
    const matchesType = this.state.type === "All" || item.type === this.state.type;
    return matchesSearch && matchesType;
  }

  render(){
    return (
        <div className = "filter-list">
         <h2>Your shopping list</h2>
         <div>
           <label htmlFor="">Search filter</label>
            <input type = "text" placeholder = "Start typing item name" onChange = {this.onSearch} />
         </div>
          <List items = {this.props.items.filter(this.filterItem)} />
            <label htmlFor="">Category filter</label>
            <Dropdown onSelect={this.onFilter}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item className="menuItem" eventKey="All">All</Dropdown.Item>
              <Dropdown.Item className="menuItem" eventKey="Fruit">Fruit</Dropdown.Item>
              <Dropdown.Item className="menuItem" eventKey="Vegetable">Vegetable</Dropdown.Item>
            </Dropdown.Menu>

          </Dropdown>
        </div>
    );
  }
}

export default FilteredList;
