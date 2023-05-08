
const name1 = prompt('Enter name');
const age = prompt('Enter age');

if (age < 18) {
    alert ('You are not allowed to visit this website');
} else if (age >= 18 && age <= 22){
    const access = confirm('Are you sure you want to continue?');
    if(access){
        alert(`Welcome ${name1}`);
    }
    else{
        alert('You are not allowed to visit this website')
    } 
} else if(age > 18){
    alert(`Welcome ${name1}`);
}