type CardProps = {
  id: string;
  name: string;
  year: number;
  comment: string;
  date: string;
  // bgUrl: string;
};

export default function BookCard({ id, name, year, comment, date }: CardProps) {
  return (
    <div className="bookcard">
      <p className="bc-number">{year}</p>
      <p className="bc-content">{comment}</p>
      <section className="bc-info">
        <div className="bc-name">{name}</div>
        <div className="bc-date">{date}</div>
      </section>
    </div>
  );
}
