import { CurrentUserState } from '../../types/redux/reducers/currentUserState'
import type { RootState } from '../../types/redux/store'

export const currentUserSelector = ({ currentUser }: RootState): CurrentUserState => currentUser
