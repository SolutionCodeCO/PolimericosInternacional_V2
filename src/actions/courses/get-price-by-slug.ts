// ./courses/get-price-by-slug.ts

'use server'

import prisma from "@/lib/prisma"
// import { sleep } from "@/utils/sleep";

export const getPriceBySlug = async (slug: string): Promise<number> => {
  try {

    // await sleep(1.5)

    const price = await prisma.course.findFirst({
      where: { slug },
      select: { price: true }
    });

    return price?.price ?? 0;
  } catch (error) {
    return 0;
  }
};
