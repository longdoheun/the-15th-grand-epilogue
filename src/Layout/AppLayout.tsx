export type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return <div className="layout-container">{children}</div>;
}

function scene({ children }: AppLayoutProps) {
  return <div className="scene">{children}</div>;
}

function book({ children }: AppLayoutProps) {
  return <div className="layout-container -bookcard">{children}</div>;
}

function main({ children }: AppLayoutProps) {
  return <div className="layout-container -main">{children}</div>;
}

function theme({ children }: AppLayoutProps) {
  return <div className="layout-container -theme">{children}</div>;
}

function overlay({ children }: AppLayoutProps) {
  return <div className="overlay-container">{children}</div>;
}

function invitation({ children }: AppLayoutProps) {
  return <div className="layout-container -invitation">{children}</div>;
}

AppLayout.Main = main;
AppLayout.Invitation = invitation;
AppLayout.Scene = scene;
AppLayout.Theme = theme;
AppLayout.Overlay = overlay;
AppLayout.Book = book;
