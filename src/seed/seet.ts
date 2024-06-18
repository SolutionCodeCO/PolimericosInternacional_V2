interface SeedCourses {
    title: string;
    description: string;
    images: string[];
    price: number;
    datePublic: string;
    duration: string; 
    slug: string;
    filter: string;
    
}

interface SeedData {
    courses: SeedCourses[],
}




export const initialData: SeedData = {
    courses: [
        {
            title: "Curso de Chromo 1",
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'IMG1.jpeg',
                'IMG2.jpeg',
            ],
            price: 12000,
            datePublic: "Jueves 12 de Mayo, 2024",
            duration: "2:45:12",
            slug: "curso_01",
            filter: "gratis"
        },
        {
            title: "Curso de Chromo 2",
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'IMG1.jpeg',
                'IMG2.jpeg',
            ],
            price: 12000,
            datePublic: "Jueves 12 de Mayo, 2024",
            duration: "2:45:12",
            slug: "curso_02",
            filter: "gratis"
        },
        {
            title: "Curso de Chromo 3",
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'IMG1.jpeg',
                'IMG2.jpeg',
            ],
            price: 12000,
            datePublic: "Jueves 12 de Mayo, 2024",
            duration: "2:45:12",
            slug: "curso_03",
            filter: "gratis"
        },
        {
            title: "Curso de Chromo 4",
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'IMG1.jpeg',
                'IMG2.jpeg',
            ],
            price: 12000,
            datePublic: "Jueves 12 de Mayo, 2024",
            duration: "2:45:12",
            slug: "curso_04",
            filter: "paga"
        }
    ]
}