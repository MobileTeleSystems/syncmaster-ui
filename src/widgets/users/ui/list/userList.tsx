import UserListElement from "@widgets/users/ui/list/userListElement";
import UsersBaseList from "@widgets/users/ui/list/usersBaseList";

const UserList = () => {
    return (
        <UsersBaseList
            element={<UserListElement/>}
        />
    );
};
export default UserList;
