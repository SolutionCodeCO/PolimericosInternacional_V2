"use server";

import prisma from "@/lib/prisma";
import { Filter } from "@prisma/client";

interface PaginationOptions {
  page?: number;
  take?: number;
  filter? : Filter;
}

export const getPaginationCoursesWithImages = async ({
  page = 1,
  take = 8,
  filter,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {

    // 1. get courses
    const courses = await prisma.course.findMany({
      take: take,
      skip: (page - 1) * take,
      include: {
        CourseImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
      where:{
        filter: filter,
      },
    });

    // 2. get totally pages
    // todo: 
    const totalCount = await prisma.course.count({
      where:{
        filter: filter
      }
    })
    const totalPages = Math.ceil (totalCount / take)


    return {
      currentPage: page,
      totalPages: totalPages,
      courses: courses.map((course) => ({
        ...course,
        images: course.CourseImage.map((image) => image.url),
      })),
    };
  } catch (error) {
    throw new Error("No se pudieron cargar los cursos");
  }
};
