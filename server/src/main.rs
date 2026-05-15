use std::net::SocketAddr;

use axum::{routing::get, Json, Router};
use serde::Serialize;
use tower_http::{cors::CorsLayer, services::ServeDir, trace::TraceLayer};

#[derive(Serialize)]
struct Health {
    status: &'static str,
}

#[derive(Serialize)]
struct Hello {
    message: String,
}

async fn health() -> Json<Health> {
    Json(Health { status: "ok" })
}

async fn hello() -> Json<Hello> {
    Json(Hello {
        message: "Hello from the Rust backend!".to_string(),
    })
}

fn api_router() -> Router {
    Router::new()
        .route("/health", get(health))
        .route("/hello", get(hello))
}

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt()
        .with_env_filter(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| "info,tower_http=debug".into()),
        )
        .init();

    let static_dir = std::env::var("STATIC_DIR").unwrap_or_else(|_| "frontend/dist".to_string());

    let app = Router::new()
        .nest("/api", api_router())
        .fallback_service(ServeDir::new(&static_dir))
        .layer(CorsLayer::permissive())
        .layer(TraceLayer::new_for_http());

    let port: u16 = std::env::var("PORT")
        .ok()
        .and_then(|p| p.parse().ok())
        .unwrap_or(3000);
    let addr = SocketAddr::from(([0, 0, 0, 0], port));

    tracing::info!("listening on http://{addr} (static dir: {static_dir})");
    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
