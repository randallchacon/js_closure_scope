const person = () => {
    var saveName = "Name";//private data, it can´t be re-assign
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

newPerson = person();
console.log(newPerson.getName());
newPerson.setName("Randall");
console.log(newPerson.getName());
