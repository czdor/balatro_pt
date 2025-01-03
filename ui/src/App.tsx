import { Navigation } from "./components/Navigation";
import "./App.css";
import { MainLayout } from "./layouts/Main";
import { Footer } from "./components/Footer";
import { lazy, Suspense, useEffect, useState } from "react";
import { Tabs } from "./types";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import { PageTransition } from "./components/PageTransition";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Jokers = lazy(() => import("./components/Jokers"));
const Modifiers = lazy(() => import("./components/modifiers/Modifiers"));
const Consumables = lazy(() => import("./components/consumables/Consumables"));
const Tags = lazy(() => import("./components/Tags"));

function App() {
  const { t } = useTranslation();
  const defaultActiveTab = 0;
  let [activeTab, setActiveTab] = useState<Tabs>(defaultActiveTab);
  const tabs = [
    { title: t("jokers"), path: "/jokers" },
    { title: t("modifiers"), path: "/modifiers" },
    { title: t("consumables"), path: "/consumables" },
    { title: t("tags"), path: "/tags" },
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
    <Router>
      <MainLayout>
        <Navigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={updateActiveTab}
        />
        <div className="min-h-screen relative">
          <Suspense fallback={<div>Loading...</div>}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route
                  path="/jokers"
                  element={
                    <PageTransition>
                      <Jokers />
                    </PageTransition>
                  }
                />
                <Route
                  path="/modifiers"
                  element={
                    <PageTransition>
                      <Modifiers />
                    </PageTransition>
                  }
                />
                <Route
                  path="/consumables"
                  element={
                    <PageTransition>
                      <Consumables />
                    </PageTransition>
                  }
                />
                <Route
                  path="/tags"
                  element={
                    <PageTransition>
                      <Tags />
                    </PageTransition>
                  }
                />
                <Route path="/" element={<Navigate replace to="/jokers" />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </div>
        <Footer />
      </MainLayout>
    </Router>
  );
}

export default App;
