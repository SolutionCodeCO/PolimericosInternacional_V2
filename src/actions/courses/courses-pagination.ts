"use server"

import prisma from "@/lib/prisma"
import { TbRowInsertBottom } from "react-icons/tb";

export const getPaginationCoursesWithImages = async() =>{
    try {
        const courses = await prisma.course.findMany({
            take: 12,
            include:{
                CourseImage:{
                    take: 2,
                    select:{
                        url: true
                    }
                }
            }
        })

        return{
            currentPage:1,
            totalPages:10,
            courses: courses.map(course =>({
                ...course,
                images:course.CourseImage.map(image => image.url)
            }))
        }
        
    } catch (error) {
        throw new Error('No se pudieron cargar los cursos')
        
    }
}