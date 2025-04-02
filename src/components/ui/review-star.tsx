import React from "react";
import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewStarProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
}

const ReviewStar = ({
  rating,
  size = "md",
  interactive = false,
  onRatingChange,
}: ReviewStarProps) => {
  const [hoverRating, setHoverRating] = React.useState(0);

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  const renderStar = (starNumber: number) => {
    const filled = interactive
      ? (hoverRating || rating) >= starNumber
      : rating >= starNumber;
    const halfFilled = !filled && rating + 0.5 >= starNumber;

    const starProps = {
      className: cn(
        sizeClasses[size],
        filled ? "text-amber-400" : "text-gray-300",
        interactive && "cursor-pointer transition-colors hover:text-amber-500"
      ),
      fill: filled ? "currentColor" : "none",
      ...(interactive
        ? {
            onMouseEnter: () => setHoverRating(starNumber),
            onMouseLeave: () => setHoverRating(0),
            onClick: () => onRatingChange?.(starNumber),
          }
        : {})
    };

    return halfFilled ? (
      <StarHalf key={starNumber} {...starProps} />
    ) : (
      <Star key={starNumber} {...starProps} />
    );
  };

  return (
    <div className="flex space-x-0.5">
      {[1, 2, 3, 4, 5].map(renderStar)}
    </div>
  );
};

export default ReviewStar;
