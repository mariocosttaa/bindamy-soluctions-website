#!/usr/bin/env node

import { spawn } from 'child_process';
import { existsSync } from 'fs';

// Check if dist folder exists
if (!existsSync('./dist')) {
    console.error('Error: dist folder not found. Please run "npm run build" first.');
    process.exit(1);
}

// Get PORT from environment or default to 3000
const port = process.env.PORT || '3000';
const host = process.env.HOST || '0.0.0.0';

// Start vite preview server
// Allowed hosts are configured in vite.config.ts
console.log(`Starting server on ${host}:${port}...`);
const child = spawn('npx', [
    'vite',
    'preview',
    '--host', host,
    '--port', port
], {
    stdio: 'inherit',
    shell: true
});

child.on('error', (error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
});

process.on('SIGTERM', () => {
    child.kill();
    process.exit(0);
});