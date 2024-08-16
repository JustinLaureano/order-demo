import { createContext } from "react";

const UIContext = createContext({
    navigationDrawerOpen: true,

    setNavigationDrawerOpen: () => {}
});

export default UIContext;