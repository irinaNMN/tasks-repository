const employees = new Map();
employees.set('John Doe', 'Manager');
employees.set('Jane Smith', 'Developer');
employees.set('Bob Johnson', 'Developer');
console.log(employees);
const skills = new Set();
skills.add('JavaScript');
skills.add('HTML');
skills.add('CSS');
skills.add('JavaScript');
console.log(skills);
/////////////////////////
console.log('----------the 1-st task--------');
console.log(employees.size);

console.log('----------the 2-nd task--------');
console.log(employees.get('John Doe'));

console.log('----------the 3-th task--------');
console.log(employees.has('Bob Johnson'));

console.log('----------the 4-th task--------');
console.log(employees.delete('Jane Smith'));
console.log(employees);

console.log('----------the 5-th task--------');
employees.clear();
console.log(employees);

console.log('----------the 6-th task--------');
console.log(skills.size);

console.log('----------the 7-th task--------');
console.log(skills.has('JavaScript'));

console.log('----------the 8-th task--------');
skills.delete('CSS');
console.log(skills);

console.log('----------the 9-th task--------');
skills.forEach((value, key) =>{
    console.log(`${key} = ${value}`);
});