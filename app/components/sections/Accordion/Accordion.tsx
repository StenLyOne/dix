import { ContentContainer } from "@/ui/ContentContainer/ContentContainer";
import { AccordionUI } from "@types-content";

export function Accordion({ data }: { data: AccordionUI }) {
  const { cards, content, type, ctas, heading, subHeading } = data;

  return (
    <section>
      <div className="container">
        <ContentContainer
          data={data}
          classContainer="flex flex-col items-center justify-center text-center"
        />
      </div>
    </section>
  );
}
