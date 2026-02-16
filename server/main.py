"""FastAPI application for Instant Ordain Certificate Pro."""
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from contextlib import asynccontextmanager
import uvicorn

from server.config import settings
from server.database import init_db
from server.routes import auth, billing

@asynccontextmanager
async def lifespan(app: FastAPI):
    print(f"Starting {settings.APP_NAME}")
    print(f"Stripe Mode: {settings.STRIPE_MODE}")
    init_db()
    yield
    print(f"Shutting down {settings.APP_NAME}")

app = FastAPI(
    title="Instant Ordain Certificate Pro API",
    description="Certificate generation and management for ordained ministers",
    version="2.0.0",
    lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "app": settings.APP_NAME,
        "stripe_mode": settings.STRIPE_MODE,
        "version": "2.0.0"
    }

@app.get("/api/config")
async def get_public_config():
    return {
        "stripe_publishable_key": settings.STRIPE_PUBLISHABLE_KEY,
        "stripe_mode": settings.STRIPE_MODE,
        "app_name": settings.APP_NAME,
    }

# Include API routers
app.include_router(auth.router, prefix="/api/auth", tags=["Authentication"])
app.include_router(billing.router, prefix="/api/billing", tags=["Billing"])

# Serve static frontend files
static_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "static")
if os.path.exists(static_dir):
    assets_dir = os.path.join(static_dir, "assets")
    if os.path.exists(assets_dir):
        app.mount("/assets", StaticFiles(directory=assets_dir), name="assets")
    uploads_dir = os.path.join(static_dir, "lovable-uploads")
    if os.path.exists(uploads_dir):
        app.mount("/lovable-uploads", StaticFiles(directory=uploads_dir), name="uploads")

    @app.get("/{full_path:path}")
    async def serve_spa(full_path: str):
        file_path = os.path.join(static_dir, full_path)
        if os.path.isfile(file_path):
            return FileResponse(file_path)
        return FileResponse(os.path.join(static_dir, "index.html"))

if __name__ == "__main__":
    uvicorn.run("server.main:app", host="0.0.0.0", port=8080, reload=True)
