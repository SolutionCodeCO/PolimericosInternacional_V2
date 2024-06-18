export interface Courses {
    //todo id: string;
    title: string;
    description: string;
    images: string[];
    price: number;
    datePublic: string;
    duration: string;
    slug: string;
    filter: Filter;

}

export type Filter = 'gratis'|'paga'
