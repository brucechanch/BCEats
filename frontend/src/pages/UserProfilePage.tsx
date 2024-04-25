import UserProfileForm from '@/form/user-profile-form/UserProfileForm'

import { useGetMyUser, useUpdateMyUser } from '@/api/MyUserApi'

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser()
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser()

  if (isGetLoading) {
    return <span>Loading...</span>
  }

  return <UserProfileForm onSave={updateUser} isLoading={isUpdateLoading} />
}

export default UserProfilePage
