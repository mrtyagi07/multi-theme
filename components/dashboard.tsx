'use client';

import React, { useState } from "react"
import { ChevronDown, Home, LayoutDashboard, Settings, User, Menu } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ThemePopOver } from "@/app/theme-popover"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

type IconProps = React.SVGProps<SVGSVGElement>

interface SidebarLinkProps {
  href: string
  icon: React.ElementType
  label: string
  active?: boolean
}

interface DashboardCardProps {
  title: string
  value: string
  change: string
  icon: React.ElementType
}

const Dashboard: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="flex flex-col h-screen bg-background lg:flex-row">
      {/* Sidebar for larger screens */}
      <aside className="hidden lg:block w-64 bg-card border-r border-border">
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-muted border-b border-border">
          <div className="flex items-center">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="lg:hidden p-0 mr-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <SidebarContent />
              </SheetContent>
            </Sheet>
            <h1 className="text-xl font-semibold text-foreground">Overview</h1>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" className="ml-2">
              <span className="hidden sm:inline">John Doe</span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <ThemePopOver/>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
          <div className="container mx-auto px-4 sm:px-6 py-8">
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <DashboardCard title="Total Revenue" value="$45,231.89" change="+20.1% from last month" icon={DollarSignIcon} />
              <DashboardCard title="Subscriptions" value="+2350" change="+180.1% from last month" icon={UsersIcon} />
              <DashboardCard title="Sales" value="+12,234" change="+19% from last month" icon={CreditCardIcon} />
              <DashboardCard title="Active Now" value="+573" change="+201 since last hour" icon={ActivityIcon} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

const SidebarContent: React.FC = () => {
  return (
    <>
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-foreground">Dashboard</h2>
      </div>
      <nav className="mt-4">
        <SidebarLink href="#" icon={Home} label="Home" />
        <SidebarLink href="#" icon={LayoutDashboard} label="Dashboard" active />
        <SidebarLink href="#" icon={User} label="Profile" />
        <SidebarLink href="#" icon={Settings} label="Settings" />
      </nav>
    </>
  )
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, icon: Icon, label, active }) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center px-4 py-2 text-muted-foreground hover:bg-accent",
        active && "text-foreground bg-accent"
      )}
    >
      <Icon className="w-5 h-5 mr-2" />
      {label}
    </Link>
  )
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, change, icon: Icon }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{change}</p>
      </CardContent>
    </Card>
  )
}

const DollarSignIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

const UsersIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

const CreditCardIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}

const ActivityIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}

export default Dashboard