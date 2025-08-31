import React from "react";
export default function EmbedLayout({children, title}:{children:React.ReactNode; title?:string}){
  return (<div style={{fontFamily:"Inter, system-ui, Arial",background:"#f7f7f9",minHeight:"100vh",padding:"16px"}}>
    {title && <h2 style={{margin:"0 0 12px 0"}}>{title}</h2>}
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"16px"}}>{children}</div>
  </div>);
}