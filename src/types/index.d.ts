declare module '*.less' {
    const content: Record<string, string>;
    export default content;
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

interface Window {
    env?: {
      API_URL: string;
    };
}