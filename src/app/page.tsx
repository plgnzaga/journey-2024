"use client"
import AppContext from "@/common/AppContext";
import Credentials from "@/components/Credentials";
import Home from "@/components/Home";
import Stories from "@/components/Stories";
import { useState } from "react";


export default function Main() {
  const [currentTab,setCurrentTab] = useState<number>(1);

  return (
    <AppContext.Provider value={{currentTab,setCurrentTab}}>
      <main className="flex flex-col items-center justify-between p-4" style={{background:'#282828'}}>
        <Home />
        <Stories />
        <Credentials />
      </main>
    </AppContext.Provider>
  );
}
