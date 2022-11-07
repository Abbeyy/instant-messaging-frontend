import type { RootState } from '../../types/redux/store'

export const currentUserSelector = ({ currentUser }: RootState) => currentUser.user

export const currentUserErrorSelector = ({ currentUser }: RootState) => currentUser.error

export const currentUserFetchingSelector = ({ currentUser }: RootState) => currentUser.fetching
