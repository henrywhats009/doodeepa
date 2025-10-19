export interface Movies {
  id: number;
  title: string;
  type: string;
  releaseYear: number;
  ageRating: string;
  duration: number;
  rating: number;
  posterUrl: string;
  trailerUrl: string;
  genres: string[];
  description: string;
  availableOn: string[];
  userReviews: { user: string; comment: string; rating: number }[];
}
