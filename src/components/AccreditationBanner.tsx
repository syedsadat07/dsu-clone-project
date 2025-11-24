import { Award, Shield, Star } from "lucide-react";

const AccreditationBanner = () => {
  const accreditations = [
    { icon: Award, text: "NAAC A++ Accredited" },
    { icon: Shield, text: "UGC Approved" },
    { icon: Star, text: "NIRF Ranked" },
    { icon: Award, text: "NBA Accredited" },
    { icon: Star, text: "QS Rated" },
  ];

  return (
    <section className="bg-muted py-8 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {accreditations.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-foreground">
              <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <item.icon size={24} />
              </div>
              <span className="font-semibold text-sm md:text-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccreditationBanner;
