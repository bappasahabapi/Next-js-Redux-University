"use client"

import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { Layout } from "antd";

type TDashboardLayoutProps={
    children:React.ReactNode
}

const DashboardLayout = ({children}:TDashboardLayoutProps) => {
    return (
        <Layout hasSider>
            <Sidebar/>
            {/* {children} */}
            <Contents>{children}</Contents>
        </Layout>
    );
};

export default DashboardLayout;
