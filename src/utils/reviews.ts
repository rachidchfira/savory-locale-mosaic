export interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
  date: string;
}

export const mockReviews: Review[] = [
  {
    id: '1',
    name: 'John D.',
    rating: 5,
    review: 'Great authentic Vietnamese cuisine. The Phở is amazing!',
    date: '2024-12-01',
  },
  {
    id: '2',
    name: 'Chen W.',
    rating: 4,
    review: '很好吃的越南菜，服務也很好！',
    date: '2024-12-15',
  },
];

export const addReview = (review: Omit<Review, 'id' | 'date'>) => {
  const newReview: Review = {
    ...review,
    id: Math.random().toString(36).substr(2, 9),
    date: new Date().toISOString().split('T')[0],
  };
  // Future implementation: Add to backend/database
  console.log('Adding review:', newReview);
  return newReview;
};
