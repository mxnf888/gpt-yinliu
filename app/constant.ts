export const OWNER = "0";
export const REPO = "0";
export const REPO_URL = `http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=pqn_6ZFzXAppBV21f1Ij3bUsnUXsr13k&authKey=UUMvGmbA03t9o4AhRUVAD1CNrEH2CCIR4gLmK%2FzQJ2m1XqR%2BgttfPqJTJqoUuHPe&noverify=0&group_code=836763958`;
export const ISSUE_URL = `http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=pqn_6ZFzXAppBV21f1Ij3bUsnUXsr13k&authKey=UUMvGmbA03t9o4AhRUVAD1CNrEH2CCIR4gLmK%2FzQJ2m1XqR%2BgttfPqJTJqoUuHPe&noverify=0&group_code=836763958`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=pqn_6ZFzXAppBV21f1Ij3bUsnUXsr13k&authKey=UUMvGmbA03t9o4AhRUVAD1CNrEH2CCIR4gLmK%2FzQJ2m1XqR%2BgttfPqJTJqoUuHPe&noverify=0&group_code=836763958`;
export const FETCH_TAG_URL = `http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=pqn_6ZFzXAppBV21f1Ij3bUsnUXsr13k&authKey=UUMvGmbA03t9o4AhRUVAD1CNrEH2CCIR4gLmK%2FzQJ2m1XqR%2BgttfPqJTJqoUuHPe&noverify=0&group_code=836763958`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";
export const DEFAULT_API_HOST = "https://chatgpt1.nextweb.fun/api/proxy";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Auth = "/auth",
}

export enum SlotID {
  AppBody = "app-body",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "ak-";

export const LAST_INPUT_KEY = "last-input";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang
export const DEFAULT_SYSTEM_TEMPLATE = `
You are ChatGPT, a large language model trained by OpenAI.
Knowledge cutoff: 2021-09

Current model: {{model}}
Current time: {{time}}`;

export const DEFAULT_MODELS = [
  {
    name: "gpt-4",
    available: true,
  },
  {
    name: "gpt-4-32k",
    available: true,
  },
  {
    name: "gpt-3.5-turbo",
    available: true,
  },
 
  {
    name: "gpt-3.5-turbo-0613",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-16k",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-16k-0613",
    available: true,
  },
 
 
  {
    name: "chatglm", // chatglm-6b
    available: false,
  },
] as const;
