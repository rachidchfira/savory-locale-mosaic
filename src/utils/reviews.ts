interface Review {
  id: string;
  dishId: string;
  rating: number;
  comment: string;
  timestamp: number;
}

const STORAGE_KEY = 'dish_reviews';

export const getReviews = (dishId: string): Review[] => {
  try {
    const reviews = localStorage.getItem(STORAGE_KEY);
    if (!reviews) return [];
    
    const allReviews: Review[] = JSON.parse(reviews);
    return allReviews
      .filter(review => review.dishId === dishId)
      .sort((a, b) => b.timestamp - a.timestamp);
  } catch (error) {
    console.error('Error reading reviews:', error);
    return [];
  }
};

export const addReview = (dishId: string, rating: number, comment: string): void => {
  try {
    const reviews = localStorage.getItem(STORAGE_KEY);
    const allReviews: Review[] = reviews ? JSON.parse(reviews) : [];
    
    const newReview: Review = {
      id: Math.random().toString(36).substr(2, 9),
      dishId,
      rating,
      comment,
      timestamp: Date.now(),
    };
    
    allReviews.push(newReview);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allReviews));
  } catch (error) {
    console.error('Error saving review:', error);
    throw new Error('Failed to save review');
  }
};

export const getAverageRating = (dishId: string): number => {
  const reviews = getReviews(dishId);
  if (reviews.length === 0) return 0;
  
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round((sum / reviews.length) * 2) / 2; // Round to nearest 0.5
};

export const formatDate = (timestamp: number): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(new Date(timestamp));
};
