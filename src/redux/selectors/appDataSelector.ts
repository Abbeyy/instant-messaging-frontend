import { RootState } from "../../types/redux/store";

export const appIsLoadingSelector = ({ appData }: RootState) => appData.isLoading
