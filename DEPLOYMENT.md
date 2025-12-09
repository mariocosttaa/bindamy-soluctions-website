# Docker Deployment Guide

This project is configured for deployment using Docker.

## Quick Start

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
2. **Select Docker** as the build method
3. **Set the port** to `3000` (or use PORT environment variable)
4. **Deploy!**

Coolify will automatically:
- Build the Docker image from the Dockerfile
- Run the container with the correct port mapping
- Handle environment variables

## Environment Variables

- `PORT` - Server port (defaults to 3000)
- `HOST` - Server host (defaults to 0.0.0.0)
- `NODE_ENV` - Set to `production` by default

## Dockerfile Structure

- **Build stage**: Installs dependencies and builds the static site
- **Production stage**: Serves the built files using Vite preview server
- **Multi-stage build**: Keeps the final image small

## Testing Locally

```bash
# Build
docker build -t bindamy-website:test .

# Run
docker run -d -p 3000:3000 --name bindamy-test bindamy-website:test

# Test
curl http://localhost:3000

# Stop and remove
docker stop bindamy-test && docker rm bindamy-test
```

## Notes

- The build output is in the `dist/` folder
- The start script automatically uses the PORT environment variable
- The image uses Node.js 20 Alpine for a smaller footprint
- All dependencies are installed with `legacy-peer-deps` to handle React 19 compatibility

