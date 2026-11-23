"use client";
import { useState } from "react";
import Link from "next/link";
export function Navbar() {
  const [open,setOpen]=useState(false);
  return <header className="lab-header"><a className="skip-link" href="#main-content">Skip to content</a><nav aria-label="Main navigation"><Link href="/" className="lab-brand" onClick={()=>setOpen(false)}><span className="brand-mark" aria-hidden="true">dp<span>↗</span></span><span>David Pereira<small>Independent experiments in software & hardware</small></span></Link><button className="menu-toggle lab-button" type="button" aria-label={open?"Close navigation":"Open navigation"} aria-controls="lab-navigation" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?"Close":"Menu"} <span aria-hidden="true">{open?"×":"☰"}</span></button><div id="lab-navigation" className={open?"lab-navigation is-open":"lab-navigation"}>{[{name:"Projects",href:"/#projects"},{name:"About",href:"/#about"},{name:"Education",href:"/#experience"},{name:"Connect",href:"/#contact"}].map(item=><Link key={item.name} href={item.href} onClick={()=>setOpen(false)}>{item.name}</Link>)}</div></nav></header>;
}
