# Docker Deployment Guide

This project is configured for deployment using Docker and Docker Compose.

## Quick Start with Docker Compose

### Start the service:
```bash
docker-compose up -d
```

### Stop the service:
```bash
docker-compose down
```

### View logs:
```bash
docker-compose logs -f web
```

### Rebuild after changes:
```bash
docker-compose build
docker-compose up -d
```

## Manual Docker Commands

### Build the Docker image:
```bash
docker build -t bindamy-website:latest .
```

### Run the container:
```bash
docker run -d -p 3000:3000 --name bindamy-website bindamy-website:latest
```

### With custom port:
```bash
docker run -d -p 8080:8080 -e PORT=8080 --name bindamy-website bindamy-website:latest
```

## Coolify Deployment

1. **Connect your Git repository** to Coolify
2. **Select Docker** as the build method (or use docker-compose.yml)
3. **Set the port** to `3000` (or use PORT environment variable)
4. **Deploy!**

Coolify will automatically:
- Build the Docker image from the Dockerfile
- Run the container with the correct port mapping
- Handle environment variables

## Environment Variables

- `PORT` - Server port (defaults to 3000)
- `NODE_ENV` - Set to `production` by default

## Dockerfile Structure

- **Build stage**: Installs dependencies and builds the static site
- **Production stage**: Serves the built files using `serve` (simple static file server)
- **Multi-stage build**: Keeps the final image small (~150MB)

## Testing Locally

```bash
# Using Docker Compose (recommended)
docker-compose up -d
curl http://localhost:3000
docker-compose down

# Or using Docker directly
docker build -t bindamy-website:test .
docker run -d -p 3000:3000 --name bindamy-test bindamy-website:test
curl http://localhost:3000
docker stop bindamy-test && docker rm bindamy-test
```

## Notes

- The build output is in the `dist/` folder
- Uses `serve` package for simple, reliable static file serving
- The image uses Node.js 20 Alpine for a smaller footprint (~150MB)
- All dependencies are installed with `legacy-peer-deps` to handle React 19 compatibility
- No configuration files needed in production - just serves static files

