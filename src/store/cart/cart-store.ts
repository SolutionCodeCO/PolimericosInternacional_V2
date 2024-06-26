import type { CartCourse } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define la interfaz para el estado del carrito
interface State {
  coursesInCart: CartCourse[];

  // Funcion para obtener el resumen de la compra
  getSummaryInformation: () => {
    subTotal: number;
    iva: number;
    total: number;
    totalItemsInCart: number;
};

  // Función para obtener el total de elementos
  getTotalItems: () => number;

  // Función para agregar un curso al carrito
  addCourseToCart: (course: CartCourse) => void;

  // Funcion para eliminar un curso del carrito
  removeCourse: (course: CartCourse) => void;
}

// Crear la tienda Zustand
export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      coursesInCart: [],

      // Función para contar el total de elementos en el carrito
      getTotalItems: () => {
        const { coursesInCart } = get();
        return coursesInCart.length; // Usamos `length` en lugar de `reduce`
      },

      // Función para obtener el resumen de la compra
      getSummaryInformation: () => {
        const { coursesInCart } = get();
        // Sumar los precios de todos los cursos en el carrito
        const subTotal = coursesInCart.reduce(
          (subTotal, course) => subTotal + course.price,
          0
        );
        const iva = subTotal * 0.06
        const total = subTotal + iva
        const totalItemsInCart = coursesInCart.length;

        return{
          subTotal, iva, total, totalItemsInCart
        }

      },

      // Función para agregar un curso al carrito
      addCourseToCart: (course: CartCourse) => {
        const { coursesInCart } = get();

        // Verificar si el curso ya existe en el carrito
        const courseExist = coursesInCart.some((item) => item.id === course.id);

        if (!courseExist) {
          set({ coursesInCart: [...coursesInCart, course] });
        } else {
          // Actualiza el carrito si el curso ya existe
          const updatedCartCourses = coursesInCart.map((item) =>
            item.id === course.id ? { ...item } : item
          );

          set({ coursesInCart: updatedCartCourses });
        }
      },
      removeCourse: (course: CartCourse) => {
        const { coursesInCart } = get();
        const updateCartCourses = coursesInCart.filter(
          (item) => item.id !== course.id
        );

        set({ coursesInCart: updateCartCourses });
      },
    }),
    {
      name: "shopping-cart", // Nombre para la persistencia en localStorage
    }
  )
);
