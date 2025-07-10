import { v4 as uuidv4 } from 'uuid';

let users = [];

//all routes in here are starting with /users
export const getUser = (req, res) => {
    console.log(users);

    res.json(users);
}

export const createUser = (req, res) => {
    console.log('post request received');
    const user = req.body;

    const userWithId = { ...user, id: uuidv4() };

    users.push(userWithId);
    res.send(`user with the name ${user.firstName} added to the database`);
}

// /users/2 => req.params {id:2}
export const getUserById = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);
    // removes the elements for which the function returns false
    // as we have an unequality operator, and user.id is actually equal to id, it will remove the user with that id
    res.send(`user with the id ${id} deleted from the database`);
}

export const patchUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if (firstName)
        user.firstName = firstName;

    if (lastName)
        user.lastName = lastName;

    if (age)
        user.age = age;

    res.send(`user with Id ${id} has been updated`);
}