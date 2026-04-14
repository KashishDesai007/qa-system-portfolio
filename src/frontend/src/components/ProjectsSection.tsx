import { useState } from "react";
import type { Project } from "../types";

const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "E-Commerce Web Application",
    type: "WEB_APPLICATION",
    description:
      "Comprehensive QA testing of a full-scale e-commerce platform covering user flows, payment processing, and cart management with 300+ test cases.",
    responsibilities: [
      "Tested critical user flows: login, product search, cart, checkout, order confirmation",
      "Performed regression testing after each feature sprint — 95% coverage maintained",
      "Identified 28 critical bugs in payment module including XSS vulnerabilities",
      "Validated API endpoints for cart operations and order processing via Postman",
    ],
    tools: ["JIRA", "Postman", "SQL", "Agile"],
    status: "PASSED",
    bugsFound: 47,
  },
  {
    id: "p2",
    title: "User Management System (CRM)",
    type: "CRM_PLATFORM",
    description:
      "Functional and API validation testing for a CRM platform with role-based access control, CRUD operations, and multi-tenant architecture.",
    responsibilities: [
      "Tested CRUD operations across all user entity types and relationships",
      "Verified role-based access control: Admin, Manager, Agent, Read-Only roles",
      "Reported 19 UI defects and 12 functional defects with detailed reproducibility steps",
      "Validated REST API payloads and response codes for user management endpoints",
    ],
    tools: ["JIRA", "Postman", "SQL", "REST API"],
    status: "CRITICAL_BUG_FOUND",
    bugsFound: 31,
  },
  {
    id: "p3",
    title: "Mobile Banking Portal",
    type: "FINTECH_APP",
    description:
      "End-to-end testing of a mobile banking portal covering transaction flows, security validation, and cross-browser compatibility testing.",
    responsibilities: [
      "Designed 180 test cases covering account management and fund transfer flows",
      "Conducted smoke and sanity testing before each sprint release",
      "Performed security testing for session management and input validation",
      "Collaborated with devs to triage and prioritize 23 defects pre-release",
    ],
    tools: ["JIRA", "Postman", "SQL", "BrowserStack"],
    status: "PASSED",
    bugsFound: 23,
  },
];

const STATUS_COLORS: Record<Project["status"], string> = {
  PASSED: "status-passed",
  CRITICAL_BUG_FOUND: "neon-text border-accent/30 bg-accent/10",
  IN_PROGRESS: "status-in-progress",
};

interface ProjectCardProps {
  project: Project;
  index: number;
  expanded: boolean;
  onToggle: () => void;
}

function ProjectCard({ project, index, expanded, onToggle }: ProjectCardProps) {
  return (
    <div
      className={`glass neon-border rounded-lg overflow-hidden transition-smooth group ${expanded ? "glow-accent" : ""}`}
      data-ocid={`projects.item.${index + 1}`}
    >
      {/* Card header */}
      <div className="p-6 border-b border-border/30">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span
            className={`font-mono text-[9px] px-2 py-1 rounded border tracking-widest status-badge ${STATUS_COLORS[project.status]}`}
          >
            {project.status.replace(/_/g, " ")}
          </span>
          <span className="font-mono text-[9px] text-muted-foreground/50">
            {project.type}
          </span>
        </div>

        <h3 className="font-display font-bold text-foreground text-lg leading-snug">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Stats row */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-border/20">
        <div className="text-center">
          <p className="font-mono text-lg font-bold neon-text">
            {project.bugsFound}
          </p>
          <p className="font-mono text-[9px] text-muted-foreground tracking-widest">
            BUGS FOUND
          </p>
        </div>
        <div className="text-center">
          <p className="font-mono text-lg font-bold text-foreground">
            {project.responsibilities.length}
          </p>
          <p className="font-mono text-[9px] text-muted-foreground tracking-widest">
            TEST AREAS
          </p>
        </div>
        <div className="text-center">
          <p className="font-mono text-lg font-bold text-foreground">
            {project.tools.length}
          </p>
          <p className="font-mono text-[9px] text-muted-foreground tracking-widest">
            TOOLS USED
          </p>
        </div>
      </div>

      {/* Expanded details */}
      {expanded && (
        <div className="px-6 py-5 space-y-4 animate-slide-up">
          <p className="section-label">TEST_COVERAGE:</p>
          <ul className="space-y-2">
            {project.responsibilities.map((r) => (
              <li
                key={r}
                className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
              >
                <span className="neon-text font-mono shrink-0 mt-0.5">
                  &gt;
                </span>
                {r}
              </li>
            ))}
          </ul>

          <div>
            <p className="section-label mb-2">TOOLS_USED:</p>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="font-mono text-[10px] neon-text bg-accent/10 border border-accent/20 px-2 py-1 rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Toggle */}
      <div className="px-6 py-3 border-t border-border/20">
        <button
          type="button"
          onClick={onToggle}
          className="font-mono text-[10px] neon-text tracking-widest w-full text-left hover:opacity-80 transition-smooth"
          data-ocid={`projects.view_details_button.${index + 1}`}
        >
          {expanded ? "[ COLLAPSE REPORT ]" : "[ VIEW FULL REPORT ]"}
        </button>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState<string | null>("p1");

  return (
    <section
      id="projects"
      className="py-24 bg-background"
      aria-label="Projects"
      data-ocid="projects.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="section-label mb-2">{"// TEST_CASE_REPORTS"}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Project <span className="neon-text">Portfolio</span>
          </h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-accent to-transparent" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6" data-ocid="projects.list">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              expanded={expanded === project.id}
              onToggle={() =>
                setExpanded(expanded === project.id ? null : project.id)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
