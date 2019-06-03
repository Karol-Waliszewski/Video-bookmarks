export interface Video {
    title: string;
    thumbnail: string;
    likes: number;
    views: number;
    url: string;
    id?: string;
    isFavourite?: boolean;
    added?: Date;
}
