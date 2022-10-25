import React, { useState } from 'react';
import './EmployeeForm.style.css';
import { states } from './States';
import Select from 'react-select';
import DatePicker, { registerLocale } from "react-datepicker";
import fr from 'date-fns/locale/fr';

import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { defineEmployeesAction } from '../../store/employees/employees.actions'

function EmployeeForm({ defineEmployee }) {
    registerLocale('fr', fr)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [department, setDepartment] = useState("");

    // console.log(states)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (firstName && lastName && (dateOfBirth && (dateOfBirth.toLocaleDateString() !== new Date().toLocaleDateString())) && (startDate && (startDate.toLocaleDateString() !== new Date().toLocaleDateString())) && street && city && state && zipCode && department) {
            console.log({
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: dateOfBirth.toLocaleDateString(),
                startDate: startDate.toLocaleDateString(),
                street: street,
                city: city,
                state: state,
                zipCode: zipCode,
                department: department
            });

            await defineEmployee({
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: dateOfBirth.toLocaleDateString(),
                startDate: startDate.toLocaleDateString(),
                street: street,
                city: city,
                state: state,
                zipCode: zipCode,
                department: department
            });
        } else {
            console.debug('Veuillez replir tous les champs requis.');
        }
    }

    return (
        <>
            <h2 className='employee-title'>Create Employee</h2>
            <form className='employee-form' onSubmit={(event) => handleSubmit(event)} action="#" id="create-employee">
                <label className='employee-form-label' htmlFor="first-name">First Name</label>
                <input placeholder='John' className='employee-form-input' value={firstName} onChange={(event) => setFirstName(event.currentTarget.value)} type="text" id="first-name" />

                <label className='employee-form-label' htmlFor="last-name">Last Name</label>
                <input placeholder='Doe' className='employee-form-input' value={lastName} onChange={(event) => setLastName(event.currentTarget.value)} type="text" id="last-name" />

                <label className='employee-form-label' htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker className='employee-form-input'
                    selected={dateOfBirth}
                    onChange={(date) => setDateOfBirth(date)}
                    dateFormat="P"
                    locale="fr"
                />

                <label className='employee-form-label' htmlFor="start-date">Start Date</label>
                <DatePicker className='employee-form-input'
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="P"
                    locale="fr"
                />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label className='employee-form-label' htmlFor="street">Street</label>
                    <input placeholder='2 Road Street' className='employee-form-input' value={street} onChange={(event) => setStreet(event.currentTarget.value)} id="street" type="text" />

                    <label className='employee-form-label' htmlFor="city">City</label>
                    <input placeholder='Washington' className='employee-form-input' value={city} onChange={(event) => setCity(event.currentTarget.value)} id="city" type="text" />

                    <label className='employee-form-label' htmlFor="state">State</label>
                    <Select options={states} onChange={(event) => setState(event.value)} />

                    <label className='employee-form-label' htmlFor="zip-code">Zip Code</label>
                    <input placeholder='55532' className='employee-form-input' value={zipCode} onChange={(event) => setZipCode(event.currentTarget.value)} id="zip-code" type="number" />
                </fieldset>

                <label className='employee-form-label' htmlFor="department">Department</label>
                <Select options={[
                    {
                        label: "Sales",
                        value: "sales"
                    },
                    {
                        label: "Marketing",
                        value: "marketing"
                    },
                    {
                        label: "Engineering",
                        value: "engineering"
                    },
                    {
                        label: "Human Resources",
                        value: "humanResources"
                    },
                    {
                        label: "Legal",
                        value: "legal"
                    }
                ]} onChange={(event) => setDepartment(event.value)} />
                <button className='employee-form-button' type='submit'>Save</button>
            </form>

        </>
    )
}

const employeeDispatch = (dispatch) => {
    return {
        defineEmployee: (employee) => dispatch(defineEmployeesAction(employee))
    }
}

export default connect(null, employeeDispatch)(EmployeeForm);