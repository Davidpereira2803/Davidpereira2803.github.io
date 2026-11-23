"use client";
import { useState } from "react";
const parts = [
  {name:"Hardware",title:"A second life for old hardware.",text:"An HP ProDesk and a repurposed laptop form the two-node lab. The laptop lives in a custom enclosure built with 3D-printed components.",label:"2 nodes",detail:"Repurposed & assembled"},
  {name:"Workloads",title:"Small lab, real orchestration.",text:"Ubuntu Server and MicroK8s provide the platform for containerized services. A place to learn deployment, networking, and how systems behave together.",label:"MicroK8s",detail:"Container orchestration"},
  {name:"Observability",title:"Look beneath the surface.",text:"The documented monitoring stack brings together Prometheus, Grafana, Loki, and Tempo for metrics, dashboards, logs, and traces.",label:"4 tools",detail:"Metrics / logs / traces"},
  {name:"Access",title:"A deliberate route in.",text:"Cloudflare Tunnel provides external access without router port forwarding. This diagram describes the architecture; it does not show live server health.",label:"Tunnel",detail:"External access"},
];
export function Homelab() {
  const [part,setPart]=useState(0);
  return <section className="lab-section homelab-section"><div className="section-heading"><div><span className="section-kicker">Under the desk</span><h2>The lab behind the lab.</h2></div><p>Built, repurposed, connected.<br/>Select a component to follow the system.</p></div><div className="homelab-console"><div className="homelab-diagram" role="group" aria-label="Homelab components">{parts.map((p,i)=><button key={p.name} aria-pressed={part===i} onClick={()=>setPart(i)}><span className="rack-glyph" aria-hidden="true">{i===0?"▤":i===1?"▦":i===2?"▥":"⇄"}</span><strong>{p.name}</strong><small>{p.label}</small><i className="rack-light"/></button>)}</div><article className="homelab-explanation" aria-live="polite"><span className="section-kicker">{parts[part].detail}</span><h3>{parts[part].title}</h3><p>{parts[part].text}</p><a href="/projects/homelab-microk8s/" className="text-button">Open the build notes <span aria-hidden="true">↗</span></a></article></div></section>;
}
