import { GraduationCap, Laptop, Briefcase, FlaskConical, Stethoscope, PenTool, Calculator, BookOpen } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const ProgramsSection = () => {
  const programs = [
    {
      icon: Laptop,
      title: "ENGINEERING",
      description: "CSE, AI & ML, ECE, Mechanical, Civil",
      color: "bg-program-engineering",
    },
    {
      icon: Calculator,
      title: "COMPUTER APPLICATIONS",
      description: "BCA, MCA, B.Sc CS, M.Sc CS",
      color: "bg-program-computer",
    },
    {
      icon: Briefcase,
      title: "COMMERCE & MANAGEMENT",
      description: "BBA, MBA, B.Com, M.Com",
      color: "bg-program-commerce",
    },
    {
      icon: FlaskConical,
      title: "APPLIED SCIENCES",
      description: "Physics, Chemistry, Mathematics",
      color: "bg-program-science",
    },
    {
      icon: Stethoscope,
      title: "HEALTH SCIENCES",
      description: "Nursing, Pharmacy, Paramedical",
      color: "bg-program-health",
    },
    {
      icon: PenTool,
      title: "DESIGN & HUMANITIES",
      description: "Fashion, Interior, Fine Arts",
      color: "bg-program-design",
    },
    {
      icon: GraduationCap,
      title: "EXECUTIVE EDUCATION",
      description: "Professional Development Programs",
      color: "bg-program-executive",
    },
    {
      icon: BookOpen,
      title: "SCHOOL OF LAW",
      description: "LLB, LLM, BA LLB Programs",
      color: "bg-program-law",
    },
  ];

  return (
    <section id="academics" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Academic Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of undergraduate and postgraduate programs designed to shape future leaders
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary"
            >
              <CardHeader className="text-center">
                <div className={`${program.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <program.icon className="text-white" size={32} />
                </div>
                <CardTitle className="text-lg font-bold text-primary mb-2">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {program.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
