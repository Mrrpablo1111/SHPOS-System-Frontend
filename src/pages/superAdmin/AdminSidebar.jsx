import { Button } from '@/components/ui/button';
import { Clock, FileText, LayoutDashboard, LogOut, Settings, Store } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  sidebarVariants,
  itemVariants,
  logoVariants,
  activePillVariants,
  activeDotVariants,
  iconTapVariants,
} from '@/lib/sidebarVariantsMotion';

const navLinks = [
  { name: "Dashboard", path: "/super-admin/dashboard", icon: LayoutDashboard },
  { name: "Stores", path: "/super-admin/stores", icon: Store },
  { name: "Subscription Plans", path: "/super-admin/subscriptions", icon: FileText },
  { name: "Pending Requests", path: "/super-admin/requests", icon: Clock },
  { name: "Settings", path: "/super-admin/settings", icon: Settings },
];

const AdminSidebar = () => {
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState(null);

  return (
    <motion.aside
      className="h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col py-6 px-4 shadow-sm overflow-hidden"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex items-center mb-8 gap-3 "
        variants={logoVariants}
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
          <Store className="w-7 h-7 text-primary" />
        </div>
        <div>
          <span className="font-extrabold text-xl tracking-tight text-sidebar-foreground leading-none">
            SH-POS Admin
          </span>
        </div>
      </motion.div>

      <nav className="flex-1 overflow-y-auto -mx-1 px-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-sidebar-foreground/30 px-3 mb-3">
          Navigation
        </p>
        <ul className="space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname.startsWith(link.path);
            const isHovered = hoveredPath === link.path;

            return (
              <motion.li key={link.name} variants={itemVariants}>
                <Link
                  to={link.path}
                  onMouseEnter={() => setHoveredPath(link.path)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className="relative flex items-center px-3 py-2.5 rounded-xl transition-colors text-base font-medium gap-3 group outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  {/* Active / hover pill background */}
                  <AnimatePresence>
                    {(isActive || isHovered) && (
                      <motion.span
                        layoutId={isActive ? "active-pill" : undefined}
                        className={`absolute inset-0 rounded-xl ${
                          isActive ? "bg-sidebar-accent" : "bg-sidebar-accent/50"
                        }`}
                        {...activePillVariants}
                      />
                    )}
                  </AnimatePresence>

    
                  <motion.span
                    className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm shadow-primary/30"
                        : "bg-sidebar-foreground/5 text-sidebar-foreground/50 group-hover:text-sidebar-primary"
                    }`}
                    {...iconTapVariants}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.span>

             
                  <span
                    className={`relative z-10 transition-colors ${
                      isActive
                        ? "text-sidebar-accent-foreground font-semibold"
                        : "text-sidebar-foreground/60 group-hover:text-sidebar-primary"
                    }`}
                  >
                    {link.name}
                  </span>

                  {/* Active dot */}
                  {isActive && (
                    <motion.span
                      layoutId="active-dot"
                      className="relative z-10 ml-auto w-1.5 h-1.5 rounded-full bg-primary"
                      {...activeDotVariants}
                    />
                  )}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>


      <motion.div
        className="my-4 h-px bg-sidebar-border"
        variants={itemVariants}
      />

    
      <motion.div variants={itemVariants}>
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 rounded-xl text-sm font-medium text-sidebar-foreground/60 hover:text-destructive hover:bg-destructive/10 transition-colors group px-3 py-2.5 h-auto"
          onClick={() => {/* handle logout */}}
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-sidebar-foreground/5 group-hover:bg-destructive/10 transition-colors">
            <LogOut className="w-4 h-4" />
          </span>
          Logout
        </Button>
      </motion.div>
    </motion.aside>
  );
};

export default AdminSidebar;