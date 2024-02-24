
import LocomotiveScroll from "locomotive-scroll";
import { create } from "zustand";

export interface NavState {
    open: boolean;
    setOpen: () => void;
    setClose: () => void;
    setSideOpen: () => void;
    setSideClose: () => void;
    sideBar: boolean;
    scroller: LocomotiveScroll | null;
    setScroller: (scroll: LocomotiveScroll) => void;
}

const useToggleSideBar = create<NavState>((set) => {
    return {
        open: true,
        sideBar: false,
        setSideOpen: () => set(() => ({ sideBar: true })),
        setSideClose: () => set(() => ({ sideBar: false })),
        setOpen: () => set(() => ({ open: true })),
        setClose: () => set(() => ({ open: false })),
        scroller: null,
        setScroller: (scroll: LocomotiveScroll) => set(() => ({ scroller: scroll })),
    };
});

export default useToggleSideBar;