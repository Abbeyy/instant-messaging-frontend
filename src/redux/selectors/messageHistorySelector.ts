import { createSelector } from '@reduxjs/toolkit'
import { MessageHistory } from '../../types/messageHistory'
import type { RootState } from '../../types/redux/store'
import { User } from '../../types/user'
import { usersSelector } from './usersSelector'

export const messageHistorySelector = ({ messageHistory }: RootState) => messageHistory.messageHistory

export const messageHistoryByUserIdSelector = (id: string) => createSelector(messageHistorySelector, (allMessageHistories) => allMessageHistories.filter((messageHistory) => messageHistory.parties.includes(id)))

export const messageHistoryByChatIdSelector = (id: string) => createSelector(messageHistorySelector, (allMessageHistories) => allMessageHistories.find((messageHistory) => messageHistory._id === id))

export const recipientPartyGroupsOfUserIdSelector = (id: string) => createSelector(messageHistorySelector, usersSelector, (allMessageHistories: MessageHistory[], allUsers: User[]) => {
    const historiesBySender = allMessageHistories.filter((messageHistory) => messageHistory.parties?.includes(id))
    const allRecipientIds = historiesBySender.map((messageHistory) => messageHistory.parties?.filter((party) => party !== id))

    const recipientUsers: User[][] = []
    allRecipientIds.forEach((recipientsIds) => {
        const users = recipientsIds.map((id) => allUsers.find((user) => user._id === id))
        recipientUsers.push(users)
    })

    return recipientUsers
})

export const messagesByUserIdSelector = (id: string) => createSelector(messageHistorySelector, (allMessageHistories) => allMessageHistories.filter((messageHistory) => messageHistory.parties.includes(id)).map((messageHistory) => messageHistory.messageList))