declare module '*.less' {
    const content: Record<string, string>;
    export default content;
}

interface Window {
    env?: {
      API_URL: string;
    };
}