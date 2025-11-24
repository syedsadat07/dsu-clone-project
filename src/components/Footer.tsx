import { Facebook, Instagram, Linkedin, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";
import universityLogo from "@/assets/university-logo.png";

const Footer = () => {
  const quickLinks = [
    "About Us", "Admissions", "Academics", "Campus Life", 
    "Research", "Placements", "News & Events", "Alumni"
  ];

  const programs = [
    "Engineering", "Management", "Computer Applications", 
    "Applied Sciences", "Health Sciences", "Law", "Design", "Arts"
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={universityLogo} alt="University Logo" className="h-12 w-12" />
              <div>
                <h3 className="font-bold text-lg">EXCELLENCE UNIVERSITY</h3>
                <p className="text-sm opacity-80">Empowering Future Leaders</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              A premier institution committed to academic excellence, innovation, and holistic development of students.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-primary hover:bg-primary-light text-primary-foreground p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-primary hover:bg-primary-light text-primary-foreground p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-primary hover:bg-primary-light text-primary-foreground p-2 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-primary hover:bg-primary-light text-primary-foreground p-2 rounded-full transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="bg-primary hover:bg-primary-light text-primary-foreground p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-secondary">Programs</h4>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-secondary">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-secondary mt-1 flex-shrink-0" />
                <p className="text-sm opacity-80">
                  University Campus, Knowledge Park,<br />
                  Bangalore - 560078, Karnataka, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-secondary flex-shrink-0" />
                <div className="text-sm opacity-80">
                  <p>+91 98765 43210</p>
                  <p>080-12345678</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-secondary flex-shrink-0" />
                <a href="mailto:info@university.edu" className="text-sm opacity-80 hover:text-secondary transition-colors">
                  info@university.edu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>© 2025 Excellence University. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-secondary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
