export interface Courses {
    id: string;
    title: string;
    description: string;
    images: string[];
    price: number;
    datePublic: Date;
    duration: string;
    slug: string;
    filter: Filter;

}

export interface CartCourse{
    id: string,
    slus: string,
    title: string,
    price: number,
    image: string    
}

export type Filter = 'gratis'|'paga'
