"use client";
import Sidebar from "../../components/sidebar";
import Header from "../../components/Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 ml-64 p-6">
        <Header />
        {children} {/* This will render the specific content of the page */}
      </div>
    </div>
  );
}
