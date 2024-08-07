import { Section } from "./Section";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <h2
        id="contact"
        className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      >
        Contactez moi !
      </h2>

      <div className="flex flex-col w-full gap-2">
        <a
          href="https://www.linkedin.com/in/mathilde-besse-bb620223b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactCard
            image="/images/mathilde.webp"
            mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgV3rvl_AvDgG9o7p9b_b1sb1ZVChFrvuNQ&s"
            name="Mathilde Besse"
            description="Rejoins-moi sur LinkedIn!"
          />
        </a>
        <a
          href="https://github.com/Mathilde0712?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactCard
            image="/images/mathilde.webp"
            mediumImage="/images/Octicons-mark-github.svg"
            name="Mathilde Besse"
            description="Rejoins-moi sur GitHub!"
          />
        </a>

        <a href="mailto:mathildebesse07@gmail.com">
          <ContactCard
            image="/images/mathilde.webp"
            mediumImage="/images/google_mail_gmail_logo_icon_159346.webp"
            name="mathildebesdev@gmail.com"
            description="Je serais ravie de travailler avec toi!"
          />
        </a>
      </div>
    </Section>
  );
};
