type person {
    name: string;
    age: number;  
    address: string;
    isEmployed: boolean;
}

function greet(person: person): string {
    return `Hello, ${person.name}! You are ${person.age} years old and live at ${person.address}.`;
}

const john: person = {
    name: "John Doe",
    age: 30,
    address: "123 Main St",
    isEmployed: true
};

console.log(greet(john));


type Employee = {
    id: number;
    name: string;
    department: string;
    salary: number;
}

function calculateAnnualSalary(employee: Employee): number {
    return employee.salary * 12;
}

const jane: Employee = {
    id: 1,
    name: "Jane Smith",
    department: "Engineering",
    salary: 5000
};

console.log(`Annual Salary of ${jane.name}: $${calculateAnnualSalary(jane)}`);