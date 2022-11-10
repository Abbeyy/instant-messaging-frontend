import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../../types/redux/store"
import { User } from "../../types/user"

export const usersSelector = ({ users }: RootState) => users.users

export const userByIdSelector = (id: string) => createSelector(usersSelector, (allUsers) => allUsers.find((user) => user._id === id))

export const usersByPartiesOfIdsSelector = (partyIds: string[][]) => createSelector(usersSelector, (allUsers) => {
    const matchingUsers: User[][] = []

    partyIds.forEach((recipientIds) => {
        const matches: User[] = []
        recipientIds.forEach((currentId) => matches.push(allUsers.find((currentUser) => currentUser._id === currentId)))
        matchingUsers.push(matches)
    })

    return matchingUsers
})

export const usersByIdsSelector = (partyIds: string[]) => createSelector(usersSelector, (allUsers) => {
    const matchingUsers: User[] = []

    partyIds.forEach((recipientId) => matchingUsers.push(allUsers.find((currentUser) => currentUser._id === recipientId)))

    return matchingUsers
})