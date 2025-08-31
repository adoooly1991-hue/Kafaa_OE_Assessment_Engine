import Link from "next/link";
export default function Home(){return(<main style={{padding:"28px",fontFamily:"Inter, system-ui, Arial"}}>
<h1>Kafaa Operational Excellence Engine</h1>
<p style={{maxWidth:720}}>Mission Control for assessments: Sizing (savings target), Scope (focus), Map (value stream), Coach (AI), ROI (impact), Actions (PACE), Exports.</p>
<h3>Embed previews</h3>
<ul><li><Link href="/embed/SERB-Defense-2025?view=mission">Mission Control</Link></li>
<li><Link href="/embed/SERB-Defense-2025?view=roi">ROI View</Link></li>
<li><Link href="/embed/SERB-Defense-2025?view=actions">Actions View</Link></li></ul>
<p style={{marginTop:24,color:"#666"}}>Health: <a href="/healthz">/healthz</a></p></main>);}