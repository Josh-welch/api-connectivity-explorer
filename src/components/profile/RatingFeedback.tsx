import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RatingFeedbackProps {
  rating: number;
  setRating: (value: number) => void;
}

const RatingFeedback = ({ rating, setRating }: RatingFeedbackProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Rating & Feedback</h2>
      </div>
      <div className="p-4 space-y-3">
        <p className="font-medium text-sm">How are you enjoying our app?</p>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Button
              key={star}
              variant="ghost"
              size="icon"
              onClick={() => setRating(star)}
              className="size-8"
            >
              <Star 
                className={`h-5 w-5 ${rating >= star ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
              />
            </Button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Leave us some feedback so we can continue to improve our app experience.
        </p>
      </div>
    </Card>
  );
};

export default RatingFeedback;