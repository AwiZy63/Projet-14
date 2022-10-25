import React from 'react'
import { Link } from 'react-router-dom'
import EmployeeForm from '../components/EmployeeForm/EmployeeForm.component'

export default function Homepage() {
    return (
        <>
            <div className="container">
                <Link to={'/employees'}>View Current Employees</Link>
                <EmployeeForm />
            </div>
            <div id="confirmation" className="modal">Employee Created!</div>
        </>
    )
}