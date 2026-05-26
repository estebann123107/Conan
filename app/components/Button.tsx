"use client";

type Props = {
  linkButton: string;
  contenido: string;
};

export default function ButtonLink({ linkButton, contenido }: Props) {
  return (
    <button
      onClick={() => window.open(linkButton, "_blank")}
      className="cursor-pointer rounded-[25px] border-none bg-brand px-5 py-2.5 text-lg text-white transition-colors duration-300 hover:bg-brand-dark"
    >
      {contenido}
    </button>
  );
}
