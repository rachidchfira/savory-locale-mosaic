import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import { Button } from "./button";
import { Textarea } from "./textarea";
import ReviewStar from "./review-star";
import { useToast } from "@/hooks/use-toast";
import { useContext } from "react";
import { LanguageContext, translations } from "@/utils/language";

interface ReviewDialogProps {
  dishId: string;
  dishName: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (review: { rating: number; comment: string }) => void;
}

const ReviewDialog = ({
  dishId,
  dishName,
  isOpen,
  onClose,
  onSubmit
}: ReviewDialogProps) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { toast } = useToast();
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast({
        title: t.reviewError,
        description: t.yourRating,
        variant: "destructive"
      });
      return;
    }

    onSubmit({ rating, comment });
    setRating(0);
    setComment("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t.writeReview}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium">{dishName}</p>
            <div className="flex justify-center">
              <ReviewStar 
                rating={rating} 
                size="lg" 
                interactive 
                onRatingChange={setRating} 
              />
            </div>
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder={t.reviewPlaceholder}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              maxLength={200}
              className="min-h-[100px]"
            />
            <p className="text-xs text-gray-500 text-right">
              {comment.length}/200 - {t.maxCharacters}
            </p>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              {t.cancel}
            </Button>
            <Button type="submit">
              {t.submitReview}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewDialog;
