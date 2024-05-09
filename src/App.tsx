import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "./components/ThemeProvider";
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <div className="relative">
      <ThemeProvider defaultTheme="dark">
        <main className="relative flex w-full min-h-screen">
          <aside className=" hidden mob:block mob:w-fit  md:w-3/12 lg:w-1/5 h-[100vh] bg-card">
            <Sidebar />
          </aside>
          <div className="fixed inset-x-0 bottom-0 z-30 bg-card mob:hidden">
            <BottomBar />
          </div>
          <div className="w-full h-[100vh] bg-background">
            <Outlet />
          </div>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
