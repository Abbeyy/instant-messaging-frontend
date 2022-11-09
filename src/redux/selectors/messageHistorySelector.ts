import { createSelector } from '@reduxjs/toolkit'
import { MessageHistory } from '../../types/messageHistory'
import type { RootState } from '../../types/redux/store'
import { User } from '../../types/user'
import { usersSelector } from './UsersSelector'

export const messageHistorySelector = ({ messageHistory }: RootState) => messageHistory.messageHistory

// By Sender
export const messageHistoryBySenderSelector = (senderId: string) => createSelector(messageHistorySelector, (allMessageHistories) => allMessageHistories.filter((messageHistory) => messageHistory.sender === senderId))

export const messageHistoryRecipientsBySenderIdSelector = (senderId: string) => createSelector(messageHistorySelector, usersSelector, (allMessageHistories: MessageHistory[], allUsers: User[]) => {
    const historiesBySender = allMessageHistories.filter((messageHistory) => messageHistory.sender === senderId)
    const recipientIds = historiesBySender.map((messageHistory) => messageHistory.recipient)

    return allUsers.filter((user) => recipientIds.includes(user._id))
})

export const messagesBySenderSelector = (senderId: string) => createSelector(messageHistorySelector, (allMessageHistories) => allMessageHistories.filter((messageHistory) => messageHistory.sender === senderId).map((messageHistory) => messageHistory.messageList))

// By Recipient
export const messageHistoryByRecipientSelector = (recipientId: string) => createSelector(messageHistorySelector, (allMessageHistories) => allMessageHistories.filter((messageHistory) => messageHistory.recipient === recipientId))
