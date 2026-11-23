"use client";

import { useEffect, useState } from "react";

const modes = ["Control", "Perception", "Reasoning"] as const;
export function Instrument() {
  const [mode, setMode] = useState<typeof modes[number]>("Control");
  const [tilt, setTilt] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (!running) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRunning(false);
      return;
    }
    let tick = 0;
    const timer = window.setInterval(() => { tick += 0.09; setTilt(Math.round(Math.sin(tick) * 35)); }, 70);
    return () => window.clearInterval(timer);
  }, [running]);
  return (
    <section className="instrument window" aria-label="Interactive robotics illustration">
      <div className="window-bar"><span className="window-dot" /><span>Interaction bench</span><span className="window-code">Illustrative demo</span></div>
      <div className="instrument-tabs" role="group" aria-label="Experiment mode">
        {modes.map(item => <button key={item} aria-pressed={mode === item} onClick={() => setMode(item)}>{item}</button>)}
      </div>
      <div className="scope">
        <div className="scope-label"><span>{mode === "Control" ? "IMU → flight response" : mode === "Perception" ? "Camera → world model" : "World model → decision"}</span><span className="scope-cross">+</span></div>
        <svg viewBox="0 0 520 290" role="img" aria-label={mode + " diagram. Drone roll is " + tilt + " degrees."}>
          <defs><pattern id="scope-grid" width="26" height="26" patternUnits="userSpaceOnUse"><path d="M26 0H0V26" fill="none" stroke="#9ba5b4" strokeWidth=".5" opacity=".25" /></pattern></defs>
          <rect width="520" height="290" fill="url(#scope-grid)" />
          <path d="M260 24v242M28 145h464" stroke="#b5bbc5" strokeDasharray="3 7" opacity=".5" />
          <circle cx="260" cy="145" r="100" fill="none" stroke="#a0aec0" opacity=".3" />
          <circle cx="260" cy="145" r="63" fill="none" stroke="#a0aec0" opacity=".3" />
          {mode === "Perception" && <g fill="none" stroke="#ace78d" strokeWidth="2"><path d="M153 80v-18h25m164 0h25v18M153 209v18h25m164 0h25v-18"/><text x="162" y="53" fill="#ace78d" fontSize="13" stroke="none">drone / tracked object</text></g>}
          {mode === "Reasoning" && <g fontSize="13" fill="#cbd8ed"><rect x="22" y="106" width="108" height="64" rx="2" fill="#243b5d" stroke="#94a6c2"/><text x="34" y="130">observe object</text><text x="34" y="150" fill="#ace78d">→ inspect</text><path d="M132 138h43" stroke="#ace78d" strokeDasharray="4 4"/><rect x="390" y="106" width="108" height="64" rx="2" fill="#243b5d" stroke="#94a6c2"/><text x="404" y="130">action queue</text><text x="404" y="150" fill="#ace78d">observe</text></g>}
          <g transform={"translate(260 145) rotate(" + tilt + ")"} stroke="#edf2f5" strokeWidth="2" fill="none">
            <path d="M-56-40 56 40M56-40-56 40" strokeWidth="7" stroke="#7587a0"/>
            {[[-63,-45],[63,-45],[-63,45],[63,45]].map(([x,y],i)=><g key={i}><ellipse cx={x} cy={y} rx="35" ry="15" fill="#182b46"/><path d={"M" + (x-28) + " " + y + "h56"} stroke="#ace78d"/><circle cx={x} cy={y} r="4" fill="#edf2f5"/></g>)}
            <rect x="-28" y="-24" width="56" height="48" rx="9" fill="#e8ece9" />
            <path d="M-13-8h26M-13 1h26" stroke="#233a5b"/>
            <circle cx="0" cy="13" r="3" fill="#294cb5" stroke="none"/>
          </g>
          <g stroke="#b5c2d6" fill="none"><path d="M34 26h16m-8-8v16M470 264h16m-8-8v16"/></g>
        </svg>
        <div className="scope-readouts"><span>Roll <b>{tilt > 0 ? "+" : ""}{tilt}°</b></span><span>Input <b>{running ? "Sweep" : "Manual"}</b></span><span>Output <b>{Math.abs(tilt) < 5 ? "Hover" : tilt > 0 ? "Bank right" : "Bank left"}</b></span></div>
      </div>
      <div className="instrument-controls">
        <label htmlFor="roll-control">Tilt the sensor <span>−35° / +35°</span></label>
        <input id="roll-control" type="range" min="-35" max="35" value={tilt} onChange={e => {setRunning(false);setTilt(Number(e.target.value));}} />
        <div className="control-actions"><button className="lab-button" aria-pressed={running} onClick={() => setRunning(!running)}>{running ? "Stop sweep" : "Run sweep"} <span aria-hidden="true">{running ? "■" : "▷"}</span></button><button className="text-button" onClick={() => {setRunning(false);setTilt(0);}}>Reset</button><span className="instrument-note">No hardware connected.</span></div>
      </div>
    </section>
  );
}
