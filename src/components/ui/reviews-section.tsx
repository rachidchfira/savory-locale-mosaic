import { FC } from 'react';
import { mockReviews } from '@/utils/reviews';
import ReviewStar from './review-star';

const ReviewsSection: FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <ReviewStar rating={review.rating} size={16} />
                <span className="ml-2 text-gray-600">{review.date}</span>
              </div>
              <p className="text-gray-700 mb-4">{review.review}</p>
              <div className="text-sm font-semibold text-gray-900">
                {review.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
