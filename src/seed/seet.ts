interface SeedCourses {
  title: string;
  description: string;
  images: string[];
  price: number;
  datePublic: string;
  duration: string;
  slug: string;
  filter: ValidFilter;
}

type ValidFilter = "gratis" | "paga";

interface SeedData {
  categories: string[];
  courses: SeedCourses[];
}

export const initialData: SeedData = {
  categories: ["Gratis", "Paga"],

  courses: [
    {
      title: "Curso de Chromo 1",
      description: "Introducing the Tesla Chill Collection...",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_01",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 2",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_02",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 3",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_03",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 4",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_04",
      filter: "paga",
    },
    {
      title: "Curso de Chromo 5",
      description: "Introducing the Tesla Chill Collection...",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_05",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 6",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_06",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 7",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_07",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 8",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_08",
      filter: "paga",
    },
    {
      title: "Curso de Chromo 9",
      description: "Introducing the Tesla Chill Collection...",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_09",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 10",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_10",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 11",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_11",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 12",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_12",
      filter: "paga",
    },
    {
      title: "Curso de Chromo 13",
      description: "Introducing the Tesla Chill Collection...",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_13",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 14",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_014",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 15",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_015",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 16",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_016",
      filter: "paga",
    },
    {
      title: "Curso de Chromo 17",
      description: "Introducing the Tesla Chill Collection...",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_017",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 18",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_018",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 19",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_019",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 20",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_020",
      filter: "paga",
    },
    {
      title: "Curso de Chromo 21",
      description: "Introducing the Tesla Chill Collection...",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_021",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 22",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_022",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 23",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_023",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 24",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_024",
      filter: "paga",
    },
    {
      title: "Curso de Chromo 25",
      description: "Introducing the Tesla Chill Collection...",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_025",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 26",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_026",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 27",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_027",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 28",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_028",
      filter: "paga",
    },
    {
      title: "Curso de Chromo 29",
      description: "Introducing the Tesla Chill Collection...",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_029",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 30",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_030",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 31",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_031",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 32",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_032",
      filter: "paga",
    },
    {
      title: "Curso de Chromo 33",
      description: "Introducing the Tesla Chill Collection...",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_033",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 34",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_034",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 35",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_035",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 36",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_036",
      filter: "paga",
    },
    {
      title: "Curso de Chromo 37",
      description: "Introducing the Tesla Chill Collection...",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_037",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 38",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_038",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 39",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_039",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 40",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_040",
      filter: "paga",
    },
    {
      title: "Curso de Chromo 41",
      description: "Introducing the Tesla Chill Collection...",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_041",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 42",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_042",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 43",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_043",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 44",
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_044",
      filter: "paga",
    },
    {
      title: "Curso de Chromo 45",
      description: "Introducing the Tesla Chill Collection...",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_045",
      filter: "gratis",
    },
    {
      title: "Curso de Chromo 46",
      description: "Introducing the Tesla Chill Collection...",
      images: ["IMG1.jpeg", "IMG2.jpeg"],
      price: 12000,
      datePublic: "2024-05-12T00:00:00Z", // Formato ISO 8601
      duration: "2:45:12",
      slug: "curso_046",
      filter: "gratis",
    }
  ],
};
