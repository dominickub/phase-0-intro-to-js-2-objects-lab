const employee = {
    firstName: "john",
    streetAddress: "street"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value
    };

}
updateEmployeeWithKeyAndValue(
    employees,
    "firstName",
    "Larry"
)

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    delete employee[key]
    obj[key] = value
    return obj
}

function deleteFromEmployeeByKey(obj, key) {
    const copyOfEmployee = { ...obj }
    delete copyOfEmployee[key]
    return copyOfEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}

