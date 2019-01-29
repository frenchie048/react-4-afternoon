import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super();

    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(response => {
        this.setState({
          students: response.data
        });
      });
  }

  render() {
    const students = this.state.students.map((student, i) => (
      <Link to={`/student/${student.id}`} key={i}>
        <h3>{student.first_name} {student.last_name}</h3>
      </Link>
    ));

    return (
      <div>
        <div className='subnav'>
          <Link to='/' className='subnav_links'>
            <h3>Back</h3>
          </Link>
        </div>

        <div className="box">
          <h1>{this.props.match.params.class}</h1>
          <h2>ClassList:</h2>
          {students}
        </div>
      </div>
    )
  }
}