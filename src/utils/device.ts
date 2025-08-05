import { safeWindow } from "./common"
import getAgent, { AgentInfo } from '@egjs/agent'

let agent: AgentInfo | null = null;

export const getDeviceInfo = () => {
  if (!agent && safeWindow) {
    agent = getAgent(safeWindow.navigator.userAgent);
  }
  return agent;
}