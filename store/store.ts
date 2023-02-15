import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Tab } from "../typings";

interface TabsState {
  tabs: Tab[];
  setActiveTab: (activeTab: string) => void;
}

const useTabsStore = create<TabsState>()(
  persist(
    (set) => ({
      tabs: [
        {
          name: "All Posts",
          active: false,
        },
        {
          name: "Featured Articles",
          active: false,
        },
        {
          name: "Opinion",
          active: false,
        },
        {
          name: "Quick Updates",
          active: false,
        },
        {
          name: "Post-Match Reviews",
          active: false,
        },
      ],
      setActiveTab: (selectedTab) => {
        set((state) => ({
          tabs: state.tabs.reduce((arr: Tab[], tab) => {
            tab.active = false;
            if (selectedTab === tab.name) {
              tab.active = true;
            }
            arr.push(tab);
            return arr;
          }, []),
        }));
      },
    }),
    {
      name: "tabs-store", // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export const useTabs = () => useTabsStore((state) => state.tabs);
export const useSetActiveTab = () =>
  useTabsStore((state) => state.setActiveTab);
