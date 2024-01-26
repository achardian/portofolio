import { create } from "zustand";

type TSetObserver = ({
  name,
  state,
}: {
  name: "about" | "skills" | "projects";
  state: boolean;
}) => void;

interface TObserver {
  about: boolean;
  skills: boolean;
  projects: boolean;
  setObserver: TSetObserver;
}

const useObserverStore = create<TObserver>((set) => ({
  about: false,
  skills: false,
  projects: false,
  setObserver: (state) =>
    set((prev) => ({ ...prev, [state.name]: state.state })),
}));

export default useObserverStore;
