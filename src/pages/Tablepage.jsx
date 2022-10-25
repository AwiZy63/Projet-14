import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Tablepage({ employees }) {
    useEffect(() => {
        setInterval(() => {
            console.log(employees);
        }, 2500);
    }, [employees])


    const columns = [
        {
            name: 'First Name',
            selector: row => row.firstName,
            sortable: true,
            allowOverflow: true,
        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
            sortable: true,
            allowOverflow: true,
        },
        {
            name: 'Start Date',
            selector: row => row.startDate,
            sortable: true,
            allowOverflow: true,
        },
        {
            name: 'Department',
            selector: row => row.department,
            sortable: true,
            allowOverflow: true,
        },
        {
            name: 'Date of Birth',
            selector: row => row.dateOfBirth,
            sortable: true,
            allowOverflow: true,
        },
        {
            name: 'Street',
            selector: row => row.street,
            sortable: true,
            allowOverflow: true,
        },
        {
            name: 'City',
            selector: row => row.city,
            sortable: true,
            allowOverflow: true,
        },
        {
            name: 'State',
            selector: row => row.state,
            sortable: true,
            allowOverflow: true,
        },
        {
            name: 'Zip Code',
            selector: row => row.zipCode,
            sortable: true,
            allowOverflow: true,
        },
    ];

    const data = [
        // {
        //     id: 1,
        //     firstName: 'John',
        //     lastName: 'Doe',
        //     startDate: new Date(Date.now()).toLocaleDateString(),
        //     department: 'Business',
        //     dateOfBirth: new Date(Date.now()).toLocaleDateString(),
        //     street: 'Road Street',
        //     city: 'Atlanta',
        //     state: 'East',
        //     zipCode: '54123'
        // },
        // {
        //     id: 2,
        //     firstName: 'Robert',
        //     lastName: 'Zeet',
        //     startDate: new Date(Date.now()).toLocaleDateString(),
        //     department: 'Business',
        //     dateOfBirth: new Date(Date.now()).toLocaleDateString(),
        //     street: 'Road Street',
        //     city: 'Atlanta',
        //     state: 'East',
        //     zipCode: '54123'
        // },
        // {
        //     id: 3,
        //     firstName: 'Alvin',
        //     lastName: 'Smith',
        //     startDate: new Date(Date.now()).toLocaleDateString(),
        //     department: 'Business',
        //     dateOfBirth: new Date(Date.now()).toLocaleDateString(),
        //     street: 'Road Street',
        //     city: 'Atlanta',
        //     state: 'East',
        //     zipCode: '54123'
        // },
    ]

    return (
        <div className="employees">
            <Link className='employees-link' to={'/'}>Return to home page</Link>
            <DataTable style={{ margin: '16px' }} title="Current Employees" columns={columns} data={employees} pagination />
        </div>
    )
}

const employeesState = (state) => {
    return {
        employees: state.employees
    }
}

export default connect(employeesState)(Tablepage);