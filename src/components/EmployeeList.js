import React, { Component } from 'react';
import { ListView } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    // as soon as the component is going to be rendered get the emps
    componentWillMount() {
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    // gets called WITH the new set of props (next props)
    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props the component
        // will be rendered with and this.props are old set
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {        
        // list view usage needs a data source object
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <ListItem employee={employee} />;
    }

    render() {
        // will show two logs before and after rendering the list of emps console.log(this.props);
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />            
        );
    }
}

const mapStateToProps = state => {
    /*
    state.employees is an object containing many key = value pairs
    for each k=v pair by .map run the fat arrow function
    val is the user model (name, shift, phone) create a new obj
    push in all the values from the user model and also throw the id in
    { shift: monday, phone: '444-444-4444', id: 'sdafsdf435' ...}
    */
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
