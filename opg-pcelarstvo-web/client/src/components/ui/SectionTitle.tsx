interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">

      {eyebrow && (
        <span
          className="
          inline-block
          rounded-full
          bg-honey/10
          px-4
          py-2
          text-sm
          font-semibold
          text-honey
          "
        >
          {eyebrow}
        </span>
      )}


      <h2
        className="
        mt-5
        font-heading
        text-4xl
        font-bold
        text-brown
        md:text-5xl
        "
      >
        {title}
      </h2>


      {description && (
        <p
          className="
          mt-5
          text-lg
          leading-relaxed
          text-brown-light
          "
        >
          {description}
        </p>
      )}

    </div>
  );
}