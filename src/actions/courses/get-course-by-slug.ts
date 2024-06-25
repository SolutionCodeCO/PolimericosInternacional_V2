// ./courses/get-course-by-slug.ts

'use server'

import prisma from "@/lib/prisma";

export const getCourseBySlug = async (slug: string) => {
  try {
    const course = await prisma.course.findFirst({
      include: {
        CourseImage: {
          select: {
            url: true
          }
        }
      },
      where: {
        slug: slug
      }
    });

    if (!course) return null;
    return {
      ...course,
      images: course.CourseImage.map(image => image.url)
    };
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener producto por slug');
  }
};
