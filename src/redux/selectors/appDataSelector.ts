import { RootState } from "../../types/redux/store";

export const appIsLoadingSelector = ({ appData }: RootState) => appData.isLoading

export const sidebarNavigationSelector = ({ appData }: RootState) => appData.nav.sideBar

export const messagesChatRecipientUserIdSelector = ({ appData }: RootState) => appData.nav.messages.chatRecipientId
