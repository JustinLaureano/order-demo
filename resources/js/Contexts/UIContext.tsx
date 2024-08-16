import { createContext } from "react";

export const defaultUIContext = {
    navigationDrawerOpen: true,
    setNavigationDrawerOpen: () => {},

    loginDialogOpen: false,
    setLoginDialogOpen: () => {},
}

const UIContext = createContext(defaultUIContext);

export default UIContext;