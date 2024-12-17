import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <div style={{ display: "flex", height: "100vh" }}>
        <AppSidebar /> {/* Sidebar */}
        <main style={{ flex: 1, overflow: "auto" }}>
          <SidebarTrigger /> {/* Sidebar toggle */}
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
