import { createSelector } from "@reduxjs/toolkit"
import { messageHistoryByChatIdSelector } from "./messageHistorySelector"
import { usersSelector } from "./usersSelector"

export const userRecipientsOfChatSelector = (chatId: string, excludeUserId: string) => createSelector(usersSelector, messageHistoryByChatIdSelector(chatId), (allUsers, history) => {
    if (!chatId.length || !history) {
        return []
    }
    
    const recipientIds = history.parties.length ? history.parties.filter((party) => party !== excludeUserId) : []

    return recipientIds.map((recipientId) => allUsers.find((user) => user._id === recipientId))
})