import { RootState } from "../../types/redux/store";

export const appIsLoadingSelector = ({ appData }: RootState) => appData.isLoading

export const sidebarNavigationSelector = ({ appData }: RootState) => appData.nav.sideBar

export const messagesChatIdSelector = ({ appData }: RootState) => appData.nav.messages.chatId
