import prisma from "../lib/prisma";
import { initialData } from "./seet";

async function main() {
  // 1. Eliminar registros previos
  await Promise.all([
    prisma.courseImage.deleteMany(),
    prisma.course.deleteMany(),
    prisma.category.deleteMany(),
  ]);

  // 2. Categorías
  const { categories, courses } = initialData;

  const categoriesData = categories.map((name) => ({ name }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  const categoriesDb = await prisma.category.findMany();

  const categoriesMap = categoriesDb.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>);

  // 3. Cursos

  for (const course of courses) {
    const { filter, images, datePublic, ...rest } = course;
    
    const dbCourse = await prisma.course.create({
      data: {
        ...rest,
        datePublic: new Date(datePublic),
        categoryId: categoriesMap[filter],
        filter: filter.toLowerCase() as "gratis" | "paga", // Agregar el campo `filter`
        CourseImage: {
          create: images.map((url) => ({ url })),
        },
      },
    });

    console.log(`Curso ${dbCourse.title} creado`);
  }

  console.log("Seed ejecutado correctamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
