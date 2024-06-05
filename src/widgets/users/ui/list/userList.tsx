import UserListElement from "@widgets/users/ui/list/userListElement";
import UsersBaseList from "@widgets/users/ui/list/usersBaseList";

const UserList = ({group}: {group: string}) => {
    return <UsersBaseList element={<UserListElement group={group}/>} />;
};
export default UserList;
