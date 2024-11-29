import { ReactNode } from "react";
import { NavLink } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { routes } from "./routes";
import { BaseRouteObject } from "@/types/router";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <SideBar />
      <div className="flex flex-col w-full">
        <header className="h-[var(--header-height)] bg-slate-200">
          Ini header
        </header>
        <main>
          <ScrollArea className="h-[calc(100dvh-var(--header-height))]">
            <div className="m-6">{children}</div>
          </ScrollArea>
        </main>
      </div>
    </SidebarProvider>
  );
}

function SideBar() {
  const listRoutes = routes.routes.find((route) => route.id === "root")
    ?.children as BaseRouteObject[];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <Accordion type="single" collapsible className="border-b-0">
                {listRoutes?.map((route) =>
                  route.children &&
                  route.children.filter((route) => !!route.handle?.subMenu)
                    .length > 1 ? (
                    <AccordionItem
                      key={route.id as string}
                      className="border-b-0"
                      value={route.id as string}
                    >
                      <AccordionTrigger className="px-2">
                        {route.handle?.menu}
                      </AccordionTrigger>
                      <AccordionContent className="pb-0">
                        {route.children.map((child) => {
                          const relativePath = `${route.path}/${child.path}`;
                          return (
                            <SidebarMenuSub key={child.id}>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild>
                                  <NavLink
                                    className="aria-[current=page]:bg-[#E81255]"
                                    key={child.id}
                                    to={relativePath}
                                  >
                                    {child.handle?.subMenu}
                                  </NavLink>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            </SidebarMenuSub>
                          );
                        })}
                      </AccordionContent>
                    </AccordionItem>
                  ) : (
                    <SidebarMenuItem key={route.id}>
                      <SidebarMenuButton asChild>
                        <NavLink
                          to={
                            route.path ?? (route.children?.[0].path as string)
                          }
                          className="aria-[current=page]:bg-[#E81255]"
                        >
                          {route.handle?.menu}
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ),
                )}
              </Accordion>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
