import { useState } from "react";
import { Menu, X, Phone, Mail, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import universityLogo from "@/assets/university-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const menuItems = [
    { name: "HOME", href: "/" },
    { name: "UNIVERSITY", href: "#university" },
    { name: "ACADEMICS", href: "#academics" },
    { name: "ADMISSIONS", href: "#admissions" },
    { name: "RESEARCH", href: "#research" },
    { name: "PLACEMENTS", href: "#placements" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone size={16} />
                <span className="hidden sm:inline">+91 98765 43210</span>
              </a>
              <a href="mailto:info@university.edu" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail size={16} />
                <span className="hidden sm:inline">info@university.edu</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                size="sm" 
                variant="secondary"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
              >
                APPLY NOW
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src={universityLogo} alt="University Logo" className="h-14 w-14" />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-primary">EXCELLENCE UNIVERSITY</h1>
              <p className="text-xs text-muted-foreground">Empowering Future Leaders</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-foreground hover:text-primary"
            >
              <Search size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4 animate-in slide-in-from-top-2">
            <Input
              type="search"
              placeholder="Search courses, programs, faculty..."
              className="w-full max-w-2xl mx-auto"
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 animate-in slide-in-from-top-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
