"use client";

import { useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";

const filters = ["All", "AI/ML", "Robotics", "Mobile", "Web", "Embedded", "Infrastructure"];
const tabs = ["Overview", "Build", "Results"] as const;
export function ProjectBrowser() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(PROJECTS[0].slug);
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("Overview");
  const visible = PROJECTS.filter(p => (category === "All" || p.category === category) && (p.title + " " + p.tags.join(" ")).toLowerCase().includes(search.toLowerCase()));
  const project = visible.find(p => p.slug === selected) ?? visible[0];
  function tabKeys(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = event.key === "ArrowRight" ? (index + 1) % tabs.length : event.key === "ArrowLeft" ? (index + tabs.length - 1) % tabs.length : event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : null;
    if(next !== null){event.preventDefault();setActiveTab(tabs[next]);document.getElementById("project-tab-" + next)?.focus();}
  }
  return (
    <section id="projects" className="lab-section">
      <div className="section-heading"><div><span className="section-kicker">The workbench</span><h2>Pick something apart.</h2></div><p>Apps, machines, and the ideas in between.<br />Select an experiment to look inside.</p></div>
      <div className="project-browser window">
        <div className="window-bar"><span className="window-dot"/><span>Experiment index</span><span className="window-code">{PROJECTS.length} projects</span></div>
        <div className="browser-toolbar"><div className="folder-filters" role="group" aria-label="Project categories">{filters.map(filter=><button key={filter} aria-pressed={category===filter} onClick={()=>{setCategory(filter);setActiveTab("Overview");}}>{filter}</button>)}</div><label className="search-label"><span className="sr-only">Search projects</span><span aria-hidden="true">⌕</span><input type="search" placeholder="Find an experiment…" value={search} onChange={e=>setSearch(e.target.value)} /></label></div>
        <div className="browser-body">
          <div className="experiment-list" role="group" aria-label="Projects"><div className="list-header"><span>Project</span><span>Discipline</span></div>{visible.map((p)=><button key={p.slug} className="experiment-row" aria-pressed={project?.slug === p.slug} onClick={()=>{setSelected(p.slug);setActiveTab("Overview");}}><span className="file-glyph" aria-hidden="true">{p.category==="Mobile"?"▣":p.category==="Robotics"?"✣":p.category==="AI/ML"?"⌘":"▤"}</span><span className="experiment-name">{p.title}<small>{p.status}</small></span><span className="experiment-category">{p.category}</span><span aria-hidden="true">↗</span></button>)}{visible.length===0&&<div className="empty-projects"><p>No experiments match that search.</p><button className="lab-button" onClick={()=>{setSearch("");setCategory("All");}}>Clear filters</button></div>}<span className="list-count" role="status">{visible.length} {visible.length === 1 ? "experiment" : "experiments"} found</span></div>
          {project ? <article className="experiment-preview" aria-label={project.title + " preview"}>
            <div className="preview-image">{project.image.endsWith(".mp4") ? <video key={project.image} src={project.image} controls muted playsInline preload="none" /> : <img key={project.image} src={project.image} alt={project.title + " project preview"} loading="lazy" />}<span className="preview-stamp">{project.category}</span></div>
            <div className="preview-content"><h3>{project.title}</h3><div className="dossier-tabs" role="tablist" aria-label="Project information">{tabs.map((tab,i)=><button id={"project-tab-" + i} key={tab} role="tab" aria-selected={tab===activeTab} aria-controls="project-panel" tabIndex={tab===activeTab?0:-1} onKeyDown={e=>tabKeys(e,i)} onClick={()=>setActiveTab(tab)}>{tab}</button>)}</div><div id="project-panel" role="tabpanel" tabIndex={0} aria-labelledby={"project-tab-" + tabs.indexOf(activeTab)}><p>{activeTab==="Overview"?project.description:activeTab==="Build"?(project.caseStudy?.approach??project.longDescription??project.description):(project.caseStudy?.outcome??project.description)}</p></div><div className="project-tags">{project.tags.slice(0,4).map(tag=><span key={tag}>{tag}</span>)}</div><Link className="lab-button primary" href={"/projects/" + project.slug + "/"}>Open case study <span aria-hidden="true">↗</span></Link></div>
          </article> : <div className="preview-empty">Choose another filter to explore the work.</div>}
        </div><div className="window-status"><span><i className="status-light"/> Browse at your own pace</span><span>No installations required</span></div>
      </div>
    </section>
  );
}
