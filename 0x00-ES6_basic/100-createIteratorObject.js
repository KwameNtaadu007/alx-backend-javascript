/* eslint-disable no-unused-vars */

export default function createIteratorObject(report) {
  const employees = [];
  for (const [dept, employee] of Object.entries(report.allEmployees)) {
    for (const employ of employee) {
      employees.push(employ);
    }
  }

  return employees;
}

