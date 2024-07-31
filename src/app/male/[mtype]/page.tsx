import {
  oneProductType,
  responseType,
} from "@/components/utils/ProductsDataArrayAndType";
import CardAll from "@/components/views/CardAll";
import { FC } from "react";

async function fetchAllProductsData(): Promise<responseType> {
  const apiUrl = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-07-27/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+productTypes%5B1%5D+%3D%3D+%22Male%22%5D&perspective=published`;

  const res = await fetch(apiUrl, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    const errorDetails = await res.text();
    throw new Error(
      `Failed to fetch: ${res.status} ${res.statusText} - ${errorDetails}`
    );
  }

  return res.json();
}

const Male: FC<{ params: { ftype: string } }> = async ({ params }) => {
  let res: responseType;

  try {
    res = await fetchAllProductsData();
  } catch (error) {
    console.error("Error fetching products data:", error);
    return <div>Error loading products</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4">
      {res.result.map((items: oneProductType, index: number) => (
        <CardAll key={index} singleProductData={items} />
      ))}
    </div>
  );
};

export default Male;
