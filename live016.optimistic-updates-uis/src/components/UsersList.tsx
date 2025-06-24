import { useUpdateUser } from '@/app/hooks/useUpdateUser';
import { useUsers } from '@/app/hooks/useUsers';
import { IUser } from '@/app/types/IUser';
import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar';
import { Skeleton } from './ui/Skeleton';
import { Switch } from './ui/Switch';

export const UsersList = () => {
  const { users, isLoading } = useUsers();
  const { updateUser } = useUpdateUser();

  const handleBlockedChange = async (id: string, blocked: boolean) => {
    await updateUser({ id, blocked });
  };

  return (
    <div className="space-y-4" data-users-list-container>
      {isLoading && (
        <>
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} className="h-16 rounded-lg" />
          ))}
        </>
      )}

      {users?.map((user: IUser) => (
        <div
          key={user.id}
          data-user-list-item
          className="flex items-center gap-4 space-x-3 border p-4 rounded-lg justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <Avatar>
                <AvatarImage src={`https://github.com/${user.username}.png`} />
                <AvatarFallback>
                  {user?.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="flex flex-col">
              <strong className="font-semibold block leading-5">
                {user.name}
              </strong>
              <small className="text-muted-foreground">@{user.username}</small>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Switch
              checked={user.blocked}
              onCheckedChange={(checked) =>
                handleBlockedChange(user.id, checked)
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};
