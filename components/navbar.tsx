"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

const aiTools = [
  {
    title: "AI Image Tools",
    href: "#features",
    description: "Access top AI image generators, editing plugins, and cloning tools.",
  },
  {
    title: "AI Video Tools",
    href: "#features",
    description: "Generate and edit cinematic videos, reels, ads, and visual effects.",
  },
  {
    title: "AI Audio Tools",
    href: "#features",
    description: "Create AI voiceovers, voice clones, sound effects, and music.",
  },
  {
    title: "AI Editing Plugins",
    href: "#features",
    description: "Access AI tools directly within your favorite editing software.",
  },
]

export function Navbar() {
  return (
    <header className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-50 duration-150">
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center">
          <img src="/logo-dark.png" alt="Prompt Edit Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList className={ "flex flex-1 justify-center gap-1"}>
              <NavigationMenuItem>
                <NavigationMenuTrigger>AI Tools</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {aiTools.map((tool) => (
                      <ListItem
                        key={tool.title}
                        title={tool.title}
                        href={tool.href}
                      >
                        {tool.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="#templates">
                    Templates Library
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="#pricing">
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="#" className="text-sm font-medium hover:text-foreground transition-colors">Sign In</Link>
          <Button asChild>
            <Link href="#">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col h-full gap-6 pt-10 px-6">
                <Link href="/" className="flex items-center">
                  <img src="/logo-dark.png" alt="Prompt Edit Logo" className="h-8 w-auto" />
                </Link>
                <div className="flex flex-col gap-4 text-base font-medium">
                  <div className="font-semibold text-foreground">AI Tools</div>
                  <div className="flex flex-col gap-4 pl-4 border-l border-border/50 ml-2">
                    {aiTools.map((tool) => (
                      <Link key={tool.title} href={tool.href} className="text-muted-foreground hover:text-foreground transition-colors">
                        {tool.title}
                      </Link>
                    ))}
                  </div>
                  <Link href="#templates" className="font-semibold hover:text-foreground mt-2">Templates Library</Link>
                  <Link href="#pricing" className="font-semibold hover:text-foreground mt-2">Pricing</Link>
                </div>
                <div className="flex flex-col gap-4 mt-auto pb-8 pt-4 border-t border-border/50">
                  <Link href="#" className="text-sm font-medium hover:text-foreground transition-colors text-center pb-2">Sign In</Link>
                  <Button asChild className="w-full">
                    <Link href="#">Get Started</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`flex flex-col items-start gap-1 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
