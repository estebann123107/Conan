type Props = {
  linkButton: string;
};

export default function ButtonLink({ linkButton }: Props) {
  return (
    <button onClick={() => window.open(linkButton, "_blank")} id="delux">
      Listen Now
    </button>
  );
}
