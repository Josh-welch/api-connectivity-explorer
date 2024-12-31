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
      <div className="p-2 border-b">
        <h2 className="text-lg font-semibold">Rating & Feedback</h2>
      </div>
      <div className="p-2 space-y-2">
        <p className="text-sm font-medium">How are you enjoying our app?</p>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Button
              key={star}
              variant="ghost"
              size="icon"
              onClick={() => setRating(star)}
              className="size-7"
            >
              <Star 
                className={`h-4 w-4 ${rating >= star ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
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