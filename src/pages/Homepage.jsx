import React from 'react'
import EmployeeForm from '../components/EmployeeForm/EmployeeForm.component'

export default function Homepage() {
    return (
        <>
            <div class="container">
                <a href="employee-list.html">View Current Employees</a>
                <EmployeeForm />
            </div>
            <div id="confirmation" className="modal">Employee Created!</div>
        </>
    )
}
