
import React from "react";

function Results(props) {
    return (
        <tbody>
            {/* Creates table row for each employee */}
            {props.results.map((employee, index) => (
                <tr key={index}>
                    {/* <th scope="row">1</th> */}
                    <td><img src={employee.image} alt={employee.name}></img></td>
                    <td>{employee.firstName} {employee.lastName}</td>
                    <td>{employee.phone}</td>
                    <td><a href={employee.email}>{employee.email}</a></td>
                    <td>{employee.dob.split('T')[0]}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default Results;