// Write your solution in this file!
const employee = {
    name: "Generic",
    streetAddress: "Generic Address Street"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee}
    newEmployee[key] = value
    console.log(newEmployee)
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    console.log(employee)
    delete employee[key]
    console.log(employee)
    return employee
}