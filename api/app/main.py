import os, time
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from itsdangerous import URLSafeSerializer
app = FastAPI(title="Kafaa OE API")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])
@app.get("/healthz")
def healthz(): return {"status":"ok"}
SECRET = os.getenv("EMBED_SIGNING_KEY","dev-key"); serializer = URLSafeSerializer(SECRET, salt="kafaa-embed")
class EmbedReq(BaseModel): workspace:str; view:str; exp:int
@app.post("/embed/sign")
def sign_embed(req: EmbedReq): return {"token": serializer.dumps({"ws":req.workspace,"view":req.view,"exp":req.exp})}
@app.get("/embed/verify")
def verify(token:str):
    try:
        data = serializer.loads(token)
        if time.time() > data["exp"]: raise ValueError("expired")
        return {"ok":True,"data":data}
    except Exception as e:
        raise HTTPException(status_code=403, detail=str(e))
@app.get("/kpis/roi")
def roi(): return {"savings":4200000,"frozen_cash":1100000,"sales_opportunity":6800000}