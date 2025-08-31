import { useRouter } from "next/router";import EmbedLayout from "../../components/EmbedLayout";
function Tile({label, metric}:{label:string; metric:string}){
  return (<div style={{background:"#fff",padding:"18px",borderRadius:14,boxShadow:"0 1px 4px rgba(0,0,0,.06)"}}>
  <div style={{fontSize:12,color:"#666"}}>{label}</div>
  <div style={{fontSize:28,fontWeight:600,marginTop:6}}>{metric}</div></div>);
}
export default function EmbedWorkspace(){const {query}=useRouter();const view=(query.view as string)||"mission";const ws=(query.workspace as string)||"Workspace";
if(view==="roi"){return(<EmbedLayout title={`ROI — ${ws}`}><Tile label="Savings (12m)" metric="SAR 4.2M"/><Tile label="Frozen cash released" metric="SAR 1.1M"/><Tile label="Sales opportunity" metric="SAR 6.8M"/></EmbedLayout>);}
if(view==="actions"){return(<EmbedLayout title={`Actions (PACE) — ${ws}`}><Tile label="NOW (≤30d)" metric="18"/><Tile label="NEXT (60–90d)" metric="27"/><Tile label="LATER (>90d)" metric="14"/></EmbedLayout>);}
return(<EmbedLayout title={`Mission Control — ${ws}`}><Tile label="Champion product" metric="PR-102 Falcon Arm"/><Tile label="Takt vs CT bottleneck" metric="CT 1.9× takt"/><Tile label="FPY (last 30d)" metric="95.6%"/></EmbedLayout>);}