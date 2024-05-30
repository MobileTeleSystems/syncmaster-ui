import UserListElement from "@widgets/users/ui/list/userListElement";
import UsersBaseList from "@widgets/users/ui/list/usersBaseList";

const UserList = ({ group_id }: { group_id: number }) => {
    return (
        <UsersBaseList
            type={"users"}
            element={<UserListElement />}
            group_id={group_id}
        />
    );
};
export default UserList;
