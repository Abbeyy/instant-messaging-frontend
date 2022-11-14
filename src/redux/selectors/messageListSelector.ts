
import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../../types/redux/store'

export const messageListsSelector = ({ messageLists }: RootState) => messageLists

export const messageListMessagesSelector = ({ messageLists }: RootState) => messageLists.messageLists

export const messageListMessagesBySenderIdSelector = (id: string) => createSelector(messageListMessagesSelector, (allMessageLists) => 
    allMessageLists.filter((msgList) => msgList.sender === id)
)

export const messageListMessagesBySenderIdsSelector = (ids: string[]) => createSelector(messageListMessagesSelector, (allMessageLists) => 
    allMessageLists.filter((msgList) => ids.includes(msgList.sender))
)


// export const messageListSenderSelector = ({ messageList }: RootState) => messageList.messageLists.sender

// export const messageListTimestampSelector = ({ messageList }: RootState) => messageList.messageLists.timeStamp

// export const messageListFetchingSelector = ({ messageList }: RootState) => messageList.fetching

// export const messageListAppendingSelector = ({ messageList }: RootState) => messageList.appendingMessages

// export const messageListErrorSelector = ({ messageList }: RootState) => messageList.error