type Props = {
  title: string;
  paragraph: string
}

export const Paragraph = ({ title, paragraph }: Props) => {
  return (
    <div className="mb-4">
      <h1 className="text-base font-bold">{title}</h1>
      <p className="text-sm">{paragraph}</p>
    </div>
  );
}