import { getPage } from "app/lib/strapi/getPage";
import { mapPage } from "app/lib/mappers/mapPage";
import { renderBlock } from "@/sections/Registry";

export const dynamic = "force-dynamic";
export const revalidate = 60;

type Params = { site: string; slug: string };

export default async function Page({ params }: { params: Params }) {
  const { slug, site } = await params;
  const entry = await getPage(slug, site);
  const page = mapPage(entry);

  if (!page) return <main className="p-10">!!!</main>;

  return (
    <div className="w-full ">
      {page.sections && page.sections.map((b, i) => renderBlock(b, i))}
      {page.title && <h1 className="">{page.title}</h1>}
    </div>
  );
}
