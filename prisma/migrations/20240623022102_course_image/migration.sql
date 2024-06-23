-- CreateTable
CREATE TABLE "CourseImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "CourseImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CourseImage" ADD CONSTRAINT "CourseImage_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
