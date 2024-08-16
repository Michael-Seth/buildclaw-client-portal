import { useAppSelector } from '@/constants/redux/hooks';

export function useIsAuth() {
  const { token, userDetails } = useAppSelector((state) => state.auth);

  return !!token && !!userDetails;
}

export function useLoggedInUser() {
  const user = useAppSelector((state) => state.auth.userDetails);

  return user;
}
