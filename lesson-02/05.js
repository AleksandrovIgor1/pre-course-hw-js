let passport = {
	name: "Petr",
	surname: "Petrov",
};
clone = {};
Object.assign(clone, passport, {name: 'Ivan'})
console.log(passport);
console.log(clone);