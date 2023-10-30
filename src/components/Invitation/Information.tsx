import AppLayout from "@/Layout/AppLayout";
import "@/styles/Invitation/Invitation.css";
import "@/styles/Invitation/Information.css";

export type InfoProps = {
  title: string;
  context: string;
};

export default function Information({ title, context }: InfoProps) {
  return (
    <section className="info-con">
      <AppLayout.Theme>
        <div className="info-title">{title}</div>
        <section className="info-left">{context}</section>
      </AppLayout.Theme>
    </section>
  );
}
