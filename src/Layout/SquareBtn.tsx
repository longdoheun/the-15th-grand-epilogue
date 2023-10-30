import "@/styles/Layout/Btn.css";

export type btnProps = {
  context: string;
  onClickEvent: React.MouseEventHandler;
};

export default function SquareBtn({ context, onClickEvent }: btnProps) {
  return (
    <div className="sb-con" onClick={onClickEvent}>
      <p className="sb-context">{context}</p>
    </div>
  );
}
