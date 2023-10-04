import { childrenProps } from "@/types/childrenProps";

export default function Scene({ children }: childrenProps) {
  return <div className="scene">{children}</div>;
}
