
import { create } from "zustand";

export interface NavState {
    open: boolean;
    setOpen: () => void;
    setClose: () => void;
    setSideOpen: () => void;
    setSideClose: () => void;
    sideBar: boolean;
}

const useToggleSideBar = create<NavState>((set) => {
    return {
        open: true,
        sideBar: false,
        setSideOpen: () => set(() => ({ sideBar: true })),
        setSideClose: () => set(() => ({ sideBar: false })),
        setOpen: () => set(() => ({ open: true })),
        setClose: () => set(() => ({ open: false })),
    };
});

export default useToggleSideBar;