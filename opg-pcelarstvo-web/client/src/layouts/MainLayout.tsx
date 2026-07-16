import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/layout/Footer/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}