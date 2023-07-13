import NavBar from "@/components/navbar/navbar.component"
import Drawer from "@/components/sidebar/sidebar.component"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div>
                <NavBar/>
                <Drawer/>
                <main>
                    {children}
                </main>
            </div>
}