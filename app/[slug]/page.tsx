import { getPage } from "app/lib/strapi/getPage";
import { getAllRoutes } from "app/lib/strapi/getAllRoutes";
import { mapPage } from "app/lib/mappers/mapPage";
import { renderBlock } from "@/sections/Registry";

export const revalidate = 60; // ISR: обновление каждые 60 сек

type Params = { site: string; slug: string };

// 👇 Это важно: SSG stage
export async function generateStaticParams() {
  const routes = await getAllRoutes();
  return routes.map((r) => ({
    slug: r.slug,
  }));
}

export default async function Page({ params }: { params: Params }) {
  const { slug, site } = await params;

  const entry = await getPage(slug, site);
  const page = mapPage(entry);

  if (!page) return <main className="p-10">Not found</main>;
  
  return (
    <div className="w-full">
      {page.sections?.map((b, i) => renderBlock(b, i))}
      {page.title && <h1>{page.title}</h1>}
    </div>
  );
}
