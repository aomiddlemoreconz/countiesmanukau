import { useEffect, useState } from 'react';
import './App.css';
import { Patient } from './Patient';
import { GetPatients } from './Fetch';

function App() {
    const [patients, setPatients] = useState<Patient[] | undefined>([]);

    useEffect(() => {
        const getPatientsData = async () => {
            const data = await GetPatients()
            setPatients(data || []);
        };
        getPatientsData();
    }, []);

    const contents = patients === undefined
        ? <p><em>Loading... </em></p>
        : <div>
            <input type="text" placeholder="Search name"/><button>Search</button>
            <table className="table table-striped" aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(patient =>
                        <tr key={patient.patientId}>
                            <td>{patient.patientId}</td>
                            <td>{patient.firstName}</td>
                            <td>{patient.lastName}</td>
                            <td>{patient.age}</td>
                            <td><button>Delete</button></td>
                        </tr>
                    )}
                    <tr key={'new record'}>
                        <td>&nbsp;</td>
                        <td><input type="text" placeholder="Enter first name"/></td>
                        <td><input type="text" placeholder="Enter last name" /></td>
                        <td><input type="text" placeholder="Enter Age" /></td>
                        <td><button>Add</button></td>
                    </tr>
                </tbody>
            </table>
        </div>;

    return (
        <div>
            <h1 id="tabelLabel">Patient Application</h1>
            {contents}
        </div>
    );
}

export default App;