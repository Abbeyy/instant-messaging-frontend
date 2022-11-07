import { createSelector } from '@reduxjs/toolkit'
import { MessageHistoryState } from '../../types/redux/reducers/messageHistoryState'
import type { RootState } from '../../types/redux/store'

// export const messageHistorySelector = ({ messageHistory }: RootState): MessageHistoryState => messageHistory

// export const messageHistoryByTimeStampIdSelector = (timeStamp: Date) => createSelector(messageHistorySelector, (allMessageHistories) => allMessageHistories.filter((messageHistory) => messageHistory.timeStamp === timeStamp))

// export const messageHistoryBySenderSelector = (senderId: string) => createSelector(messageHistorySelector, (allMessageHistories) => allMessageHistories.filter((messageHistory) => messageHistory.sender._id === senderId))

// export const messageHistoryByRecipientSelector = (recipientId: string) => createSelector(messageHistorySelector, (allMessageHistories) => allMessageHistories.filter((messageHistory) => messageHistory.recipient._id === recipientId))

// export const messageHistoryBySBothPartiesSelector = (senderId: string, recipientId: string) => createSelector(messageHistorySelector, (allMessageHistories) => allMessageHistories.filter((messageHistory) => messageHistory.sender._id === senderId && messageHistory.recipient._id === recipientId))