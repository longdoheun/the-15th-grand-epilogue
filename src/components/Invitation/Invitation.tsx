import "@/styles/Invitation/Invitation.css";
import AppLayout from "@/Layout/AppLayout";
import { UNDERGRADUATE } from "@/assets/lib/InvitationText";

export default function Invitation() {
  return (
    <div className="invitation-con">
      <AppLayout.Main>
        {/* <div className="invitation-wrapper"> */}
        <div className="invitation-title">Invitation</div>

        <section className="invitation-left">{UNDERGRADUATE}</section>
        <section className="invitation-right">
          The 15th Global Economics Student Council GE:nie
        </section>
        {/* </div> */}
      </AppLayout.Main>
      {/* <div className="invitation-container"></div> */}
    </div>
  );
}
