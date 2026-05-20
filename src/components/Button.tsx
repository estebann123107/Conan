type Props = {
  linkButton: string;
  contenido: string;
};

export default function ButtonLink({ linkButton, contenido }: Props) {
  return (
    <button onClick={() => window.open(linkButton, "_blank")} id="delux">
      {contenido}
    </button>
  );
}
