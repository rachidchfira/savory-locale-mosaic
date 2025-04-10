import { FC, useState } from 'react';
import { Dialog } from '@/components/ui/dialog';
import ReviewStar from './review-star';

interface ReviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ReviewDialog: FC<ReviewDialogProps> = ({ open, onOpenChange }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = () => {
    // Future implementation: Submit review
    console.log({ rating, review });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Write a Review</h2>
        <div className="mb-4">
          <ReviewStar rating={rating} />
        </div>
        <textarea
          className="w-full p-2 border rounded-md"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Share your experience..."
          rows={4}
        />
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-red-600 text-white rounded-md"
          >
            Submit Review
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default ReviewDialog;
