export type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return <div className="layout-container">{children}</div>;
}

function scene({ children }: AppLayoutProps) {
  return <div className="scene">{children}</div>;
}

function main({ children }: AppLayoutProps) {
  return <div className="layout-container -main">{children}</div>;
}

AppLayout.Main = main;
AppLayout.Scene = scene;
