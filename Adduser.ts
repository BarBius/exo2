import { User } from './user1';

class AddUser {
private users: User[] = [];

addUser(newUser: User): void {
    const userExists = this.users.some((user) => user.id === newUser.id);
    if (userExists) {
throw new Error("L'utilisateur existe déjà.");
    }
    this.users.push(newUser);
}
listUsers(): User[] {
    return this.users;
}
}