import "@/styles/Layout/Input.css";
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...rest }: InputProps) {
  return (
    <div className={"input-container"}>
      <label className={"label-style"}>
        <input className={"input-style"} {...rest} />
      </label>
    </div>
  );
}
