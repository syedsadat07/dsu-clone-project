import { Users, Award, Building2, Globe } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { icon: Users, value: "15,000+", label: "Students" },
    { icon: Building2, value: "50+", label: "Academic Programs" },
    { icon: Award, value: "95%", label: "Placement Rate" },
    { icon: Globe, value: "40+", label: "International Partnerships" },
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary-foreground/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon size={36} />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary">
                {stat.value}
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
