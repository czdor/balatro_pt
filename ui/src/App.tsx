import { Navigation } from "./components/Navigation";
import "./App.css";
import { MainLayout } from "./layouts/Main";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { Tabs } from "./types";

import { Jokers } from "./components/Jokers";
import { Modifiers } from "./components/Modifiers";
import { Consumables } from "./components/Consumables";
import { Tags } from "./components/Tags";

function App() {
  const defaultActiveTab = 0;
  let [activeTab, setActiveTab] = useState<Tabs>(defaultActiveTab);
  let tabs = [
    {
      title: "jokers",
      content: () => <Jokers />,
    },
    {
      title: "modifiers",
      content: () => <Modifiers />,
    },
    {
      title: "consumables",
      content: () => <Consumables />,
    },
    {
      title: "tags",
      content: () => <Tags />,
    },
  ];

  const updateActiveTab = (tab: Tabs) => {
    localStorage.setItem("activeTab", tab.toString());
    setActiveTab(tab);
  };

  useEffect(() => {
    const savedActiveTab = localStorage.getItem("activeTab");
    if (savedActiveTab) {
      setActiveTab(Number(savedActiveTab) as Tabs);
      return;
    }

    localStorage.setItem("activeTab", defaultActiveTab.toString());
  }, []);

  return (
    <MainLayout>
      <Navigation
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={updateActiveTab}
      />
      {tabs[activeTab].content()}
      <Footer />
    </MainLayout>
  );
}

export default App;
