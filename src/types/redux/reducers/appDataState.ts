export type AppDataState = {
    isLoading: boolean
    nav: {
        sideBar: SIDEBAR_MENU_OPTION
        messages: {
            chatRecipientId: string
        }
    }
}

export enum SIDEBAR_MENU_OPTION {
    MESSAGES = 'Messages',
    HOME = 'Home'
}