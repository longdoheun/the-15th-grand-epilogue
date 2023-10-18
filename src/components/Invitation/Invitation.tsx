import "@/styles/Invitation/Invitation.css";
import AppLayout from "@/Layout/AppLayout";

export default function Invitation() {
  const TEXT = `안녕하세요, 어느덧 다사다난한 한 해가 가고 2024년이 다가오고 있습니다.\n글로벌경제학과도 올해로 15주년을 맞이하여 이번 게필로그에 우리 학과를 빛내주고 계시는 졸업생 선배님들 그리고 학업을 성실히 이어나가는 재학생 학우분들, 그리고 항상 은혜로운 가르침을 주시는 교수님들을 게필로그에 모시고자 합니다.\n글로벌경제학과의 발전한 모습과 함께 오랜만에 선후배 동기들을 만나는 시간을 가지며 한 해를 따뜻하게 마무리하고자 글로벌경제학과 가족들을 모십니다.`;

  return (
    <div className="invitation-con">
      <AppLayout.Main>
        <div className="invitation-title">Invitation</div>
        <section className="invitation-left">{TEXT}</section>
        <section className="invitation-right">
          The 15th Global Economics Student Council GE:nie
        </section>
      </AppLayout.Main>
      {/* <div className="invitation-container"></div> */}
    </div>
  );
}
