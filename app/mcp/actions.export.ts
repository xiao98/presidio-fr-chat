// Stand-in for app/mcp/actions.ts in the static export (Tauri) build.
// The real module is a Next.js server-action module ("use server"), which static export refuses;
// the desktop app has no server anyway, so MCP is simply reported as disabled. Aliased in next.config.mjs.
import type { ServerConfig } from "./types";

export async function getClientsStatus(): Promise<Record<string, any>> {
  return {};
}
export async function getClientTools(_clientId: string) {
  return null;
}
export async function getAvailableClientsCount() {
  return 0;
}
export async function getAllTools() {
  return [];
}
export async function initializeMcpSystem() {
  return undefined;
}
export async function addMcpServer(_clientId: string, _config: ServerConfig) {
  return undefined as any;
}
export async function pauseMcpServer(_clientId: string) {
  return undefined as any;
}
export async function resumeMcpServer(_clientId: string): Promise<void> {
  return;
}
export async function removeMcpServer(_clientId: string) {
  return undefined as any;
}
export async function restartAllClients() {
  return undefined as any;
}
export async function executeMcpAction(_clientId: string, _request: any) {
  return undefined as any;
}
export async function getMcpConfigFromFile(): Promise<any> {
  return { mcpServers: {} };
}
export async function isMcpEnabled() {
  return false;
}
