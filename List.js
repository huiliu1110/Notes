import React from 'react';

function keywordFilter(strArray, keyword) {
  return keyword === undefined || keyword === '' ||
  strArray.findIndex(str => (
    (str + '').toLowerCase().includes(keyword.toLowerCase())
  )) !== -1;
}

class TopicsListHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onChange('topic');
  }

  render() {
    return (
      <tr className="noselect">
        <th className="sorting" onClick={this.onClick}>Topics</th>
        <th className="sorting">Events</th>
        <th className="sorting">Documents</th>
      </tr>
    );
  }
}

function TopicsListRow(props) {
  return keywordFilter([props.data.topic, props.data.events, props.data.documents], props.keyword) ? (
    <tr>
      <td>{props.data.topic}</td>
      <td>{props.data.events}</td>
      <td>{props.data.documents}</td>
    </tr>
  ) : null;
}

function PeopleListHeader(props) {
  return (
    <tr className="noselect">
      <th className="sorting">Name</th>
      <th className="sorting">Documents Mentioned In</th>
      <th className="sorting">Most Recent</th>
      <th className="sorting">First Mention</th>
    </tr>
  );
}

function PeopleListRow(props) {
  return keywordFilter([props.data.name, props.data.documents, props.data.mostRecent, props.data.firstMention], props.keyword) ? (
    <tr>
      <td>{props.data.name}</td>
      <td>{props.data.documents}</td>
      <td>{props.data.mostRecent.slice(0, 10)}</td>
      <td>{props.data.firstMention.slice(0, 10)}</td>
    </tr>
  ) : null;
}

function LocationsListHeader(props) {
  return (
    <tr className="noselect">
      <th className="sorting">Country</th>
      <th className="sorting">Location</th>
      <th className="sorting"># of Documents</th>
    </tr>
  );
}

function LocationsListRow(props) {
  return keywordFilter([props.data.country, props.data.location, props.data.documents], props.keyword) ? (
    <tr>
      <td>{props.data.country}</td>
      <td>{props.data.location}</td>
      <td>{props.data.documents}</td>
    </tr>
  ) : null;
}

function SendersListHeader(props) {
  return (
    <tr className="noselect">
      <th className="sorting">Name</th>
      <th className="sorting">From</th>
      <th className="sorting">To</th>
    </tr>
  );
}

function SendersListRow(props) {
  return keywordFilter([props.data.name, props.data.from, props.data.to], props.keyword) ? (
    <tr>
      <td>{props.data.name}</td>
      <td>{props.data.from}</td>
      <td>{props.data.to}</td>
    </tr>
  ) : null;
}

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: '',
      sortOrder: 'desc'
    };

    this.onChange = this.onChange.bind(this);
    console.log(this.state.sortBy, this.state.sortOrder)
  }

  onChange(sortBy) {
    // console.log(this.state.sortBy, this.state.sortOrder)
    this.setState({
      sortBy: sortBy,
      sortOrder: this.state.sortOrder === 'desc' ? 'asc' : 'desc'
    });
    console.log(this.state.sortBy, this.state.sortOrder)
  }

  render() {
    const props = this.props;

    if(this.state.sortBy !== '') {
      props.rows.sort((a, b) => (
        this.state.sortOrder === 'desc' ? a[this.state.sortBy].localeCompare(b[this.state.sortBy]) : b[this.state.sortBy].localeCompare(a[this.state.sortBy])
      ))
    }
    return (
      <div className="List">
        <table className="table table-bordered table-hover dataTable">
          <thead>
            {props.topicsList && <TopicsListHeader onChange={this.onChange} />}
            {props.peopleList && <PeopleListHeader />}
            {props.locationsList && <LocationsListHeader />}
            {props.senderList && <SendersListHeader />}
          </thead>
          <tbody>
            {
              props.senderList &&
              props.rows.map(row => (
                <SendersListRow key={row.key} data={row} keyword={props.keyword}/>
              ))
            }
            {
              props.peopleList &&
              props.rows.map(row => (
                <PeopleListRow key={row.key} data={row} keyword={props.keyword}/>
              ))
            }
            {
              props.locationsList &&
              props.rows.map(row => (
                <LocationsListRow key={row.key} data={row} keyword={props.keyword}/>
              ))
            }
            {
              props.topicsList &&
              props.rows.map(row => (
                <TopicsListRow key={row.key} data={row} keyword={props.keyword}/>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
