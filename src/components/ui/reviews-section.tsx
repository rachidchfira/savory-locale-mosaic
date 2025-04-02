import { useContext, useState } from "react";
import { LanguageContext, translations } from "@/utils/language";
import ReviewStar from "./review-star";
import { Button } from "./button";
import ReviewDialog from "./review-dialog";
import { addReview, getReviews, getAverageRating, formatDate } from "@/utils/reviews";
import { useToast } from "@/hooks/use-toast";

interface ReviewsSectionProps {
  dishId: string;
  dishName: string;
}

const ReviewsSection = ({ dishId, dishName }: ReviewsSectionProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [reviews, setReviews] = useState(() => getReviews(dishId));
  const [averageRating, setAverageRating] = useState(() => getAverageRating(dishId));
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const { toast } = useToast();

  const handleSubmitReview = (review: { rating: number; comment: string }) => {
    try {
      addReview(dishId, review.rating, review.comment);
      setReviews(getReviews(dishId));
      setAverageRating(getAverageRating(dishId));
      toast({
        title: t.reviewSuccess,
      });
    } catch (error) {
      toast({
        title: t.reviewError,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mt-4 space-y-4">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h4 className="text-sm font-medium">{t.reviews}</h4>
          <div className="flex items-center space-x-2">
            <ReviewStar rating={averageRating} size="sm" />
            <span className="text-sm text-gray-500">
              ({reviews.length})
            </span>
          </div>
        </div>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => setIsDialogOpen(true)}
        >
          {t.writeReview}
        </Button>
      </div>

      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p className="text-sm text-gray-500">{t.noReviews}</p>
        ) : (
          reviews.slice(0, 3).map((review) => (
            <div key={review.id} className="space-y-1">
              <div className="flex items-center space-x-2">
                <ReviewStar rating={review.rating} size="sm" />
                <span className="text-xs text-gray-500">
                  {formatDate(review.timestamp)}
                </span>
              </div>
              {review.comment && (
                <p className="text-sm text-gray-600 line-clamp-2">
                  {review.comment}
                </p>
              )}
            </div>
          ))
        )}
      </div>

      <ReviewDialog
        dishId={dishId}
        dishName={dishName}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSubmit={handleSubmitReview}
      />
    </div>
  );
};

export default ReviewsSection;
