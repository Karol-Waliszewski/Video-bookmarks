export interface Video {
    title: string;
    thumbnail: string;
    likes: number;
    views: number;
    id?: string;
    isFavourite?: boolean;
    added?: Date;
}
