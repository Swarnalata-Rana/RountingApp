import React,{Component} from 'react';
class Employee extends Component{
    employee=[
        {"EmpID":"p100","Name":"Runu","Age":"23","Location":"Odiasha"},
        {"EmpID":"p200","Name":"Naaz","Age":"21","Location":"Odiasha"},
        {"EmpID":"p300","Name":"Pinky","Age":"22","Location":"Odiasha"},
        {"EmpID":"p400","Name":"Abhi","Age":"23","Location":"Odiasha"},
        {"EmpID":"p500","Name":"Barsha","Age":"22","Location":"Odiasha"}
    ]

    render(){
        return(
            <div>
                <h1 style={{color:"yellow"}}>Hello Employee Component</h1>
                <ul>
                    {this.employee.map((valuse)=>(
                    <div>
                        <li>{valuse.EmpID}</li>

                        <li>{valuse.Name}</li>

                        <li>{valuse.Age}</li>

                        <li>{valuse.Location}</li>

                    </div>
                ))}
                </ul>
                <table>
                    <thead>
                        <th>EmployeeID</th> &nbsp;&nbsp;
                        <th>EmployeeName</th> &nbsp;&nbsp;
                        <th>EmployeeAge</th> &nbsp;&nbsp;
                        <th>EmployeeLocation</th> &nbsp;&nbsp;
                    </thead>
                    <tbody>
                    {this.employee.map((valuse,key)=>{
                        return(
                            <tr key={key}>
                            <td>{valuse.EmpID}</td>&nbsp;&nbsp;
                            <td>{valuse.Name}</td>&nbsp;&nbsp;
                            <td>{valuse.Age}</td>&nbsp;&nbsp;
                            <td>{valuse.Location}</td>&nbsp;&nbsp;
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Employee;