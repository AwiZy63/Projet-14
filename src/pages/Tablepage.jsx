import React from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useMemo } from 'react';
import { useState } from 'react';

const FilterComponent = ({ filterText, onFilter, onClear }) => {
    return (
        <>
            <input
                id="search"
                type='text'
                placeholder="Filter By Name"
                aria-label="Search Input"
                value={filterText}
                onChange={onFilter} />
            <button type="button" onClick={onClear}>X</button>
        </>
    )
}

function Tablepage({ employees }) {

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


    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = employees.filter((item) => 
    (item.firstName && item.lastName) && (item.firstName.toLowerCase().includes(filterText.toLowerCase()) || item.lastName.toLowerCase().includes(filterText.toLowerCase())),
	);

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);

    return (
        <div className="employees">
            <Link className='employees-link' to={'/'}>Return to home page</Link>
            <DataTable
                style={{ margin: '16px' }}
                title="Current Employees"
                columns={columns}
                data={filteredItems}
                pagination
                paginationResetDefaultPage={resetPaginationToggle}
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                selectableRows
                persistTableHead
            />
        </div>
    )
}

const employeesState = (state) => {
    return {
        employees: state.employees
    }
}

export default connect(employeesState)(Tablepage);