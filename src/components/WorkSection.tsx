import React, { useMemo } from "react";
import { ArrowUpRight, Brain, Workflow, BarChart3, ShoppingCart, Plug, Cloud, Lock } from "lucide-react";
import { useTranslation } from "react-i18next";
import technologiesEn from "@/data/technologies.en.json";
import technologiesPt from "@/data/technologies.pt.json";
import projectsEn from "@/data/projects.en.json";
import projectsPt from "@/data/projects.pt.json";

// Icon mapping for technologies
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Workflow,
  BarChart3,
  ShoppingCart,
  Plug,
  Cloud,
};

const WorkSection = () => {
  const { t, i18n } = useTranslation();
  
  // Load data based on current language
  const technologiesData = i18n.language === 'pt' ? technologiesPt : technologiesEn;
  const projectsData = i18n.language === 'pt' ? projectsPt : projectsEn;
  
  const technologies = useMemo(() => 
    technologiesData.map((tech: any) => ({
      ...tech,
      icon: iconMap[tech.icon] || Brain,
    })), [technologiesData]
  );
  
  const projects = useMemo(() => projectsData, [projectsData]);
  
  return (
    <section id="work" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            {t("work.overline")}
          </p>
          <h2 className="text-headline mb-6">
            {t("work.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("work.description")}
          </p>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h3 className="text-sm font-medium text-muted-foreground mb-8 tracking-wide uppercase">
            {t("work.technologiesTitle")}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className="premium-card p-6 text-center group hover:border-primary/30 transition-all duration-300"
              >
                <tech.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <p className="font-semibold mb-1">{tech.name}</p>
                <p className="text-xs text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mb-12">
          <h3 className="text-sm font-medium text-muted-foreground mb-8 tracking-wide uppercase">
            {t("work.projectsTitle")}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project: any, i) => {
              const isActive = project.status === "active";
              const hasImage = project.image;
              
              return (
                <div
                  key={i}
                  className={`premium-card overflow-hidden transition-all duration-300 ${
                    isActive
                      ? "hover:border-primary/30 cursor-pointer group"
                      : "opacity-75 cursor-not-allowed"
                  }`}
                  onClick={(e) => {
                    if (!isActive) {
                      e.preventDefault();
                      return;
                    }
                    // Handle "See More" functionality for active projects
                    // You can add navigation or modal here
                    console.log("View project:", project.title);
                  }}
                >
                  {/* Project Image */}
                  <div className="relative w-full h-48 bg-secondary overflow-hidden">
                    {hasImage ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`w-full h-full object-cover transition-transform duration-300 ${
                            isActive ? "group-hover:scale-105" : "opacity-50"
                          }`}
                          onError={(e) => {
                            // Fallback if image doesn't exist
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                        {!isActive && (
                          <div className="absolute inset-0 bg-background/70 flex items-center justify-center backdrop-blur-sm">
                            <div className="text-center">
                              <Lock className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                              <p className="text-xs text-muted-foreground font-medium">Unavailable</p>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center ${
                        !isActive ? "opacity-50" : ""
                      }`}>
                        <div className="text-center">
                          {!isActive && <Lock className="w-8 h-8 text-muted-foreground mx-auto mb-2" />}
                          <p className="text-sm text-muted-foreground">{project.title}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        {!isActive && (
                          <div className="mb-2">
                            <span className="px-2 py-0.5 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                              Unavailable
                            </span>
                          </div>
                        )}
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {project.client}
                        </h3>
                      </div>
                      {isActive && (
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 flex-shrink-0" />
                      )}
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm">
                        <span className="text-muted-foreground">{t("work.result")}: </span>
                        <span className="font-semibold text-foreground">{project.results}</span>
                      </p>
                      {isActive && (
                        <button className="mt-4 text-sm font-medium text-primary hover:underline">
                          See More →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;