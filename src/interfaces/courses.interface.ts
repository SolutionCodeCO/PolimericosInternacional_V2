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

export type Filter = 'gratis'|'paga'
