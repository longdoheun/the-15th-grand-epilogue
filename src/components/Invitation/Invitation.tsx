import "@/styles/Invitation/Invitation.css";
import AppLayout from "@/Layout/AppLayout";
import { UNDERGRADUATE } from "@/assets/lib/InvitationText";
import Logo from "@/assets/svg/logo.svg";

export default function Invitation() {
  return (
    <>
      <div className="invitation-con">
        <AppLayout.Theme>
          <div className="invitation-title">Invitation</div>
          <section className="invitation-left">{UNDERGRADUATE}</section>
          <section className="invitation-right">
            <div className="inv-info">
              The 15th Global Economics Student Council
            </div>
            <Logo />
          </section>
        </AppLayout.Theme>
      </div>
    </>
  );
}
