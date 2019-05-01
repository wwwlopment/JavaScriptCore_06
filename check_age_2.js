function otherCheckAge(age) {
    return (age > 18) || confirm('Do You have permission?');
}

otherCheckAge(prompt('Your age?'));
