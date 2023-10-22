type CardProps = {
  id: string;
  name: string;
  year: number;
  comment: string;
  date: string;
  // bgUrl: string;
};

export default function BookCard({ id, name, year, comment, date }: CardProps) {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis mi sit amet scelerisque placerat. Suspendisse viverra lacus aliquam lacus porta viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere ante a nisi faucibus, at rutrum felis laoreet. Sed sed fringilla ante, et fermentum massa. Nam porttitor mauris ex, et pharetra sem ullamcorper nec. Sed vitae massa elementum, tempus ipsum molestie, egestas felis.";
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
