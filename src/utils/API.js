import axios from "axios";

export default {
    getEmployees: function () {
        return axios.get(
            "https://randomuser.me/api/?results=100"
        ).then(res => {
            const employees = res.data.results;
            return employees.map(employee => {
                return {
                    image: employee.picture.thumbnail,
                    firstName: employee.name.first,
                    lastName: employee.name.last,
                    phone: employee.phone,
                    email: employee.email,
                    dob: employee.dob.date,
                }
            })
        });
    }
};