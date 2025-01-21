import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Calendar } from "lucide-react";

const Events = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Events</h1>
          <p className="text-muted-foreground mt-1">Manage your church events.</p>
        </div>
        <Button className="btn-primary">
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card
            key={i}
            className="p-6 hover:shadow-lg transition-shadow duration-200 animate-slide-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Sunday Service</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Morning Worship</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Join us for our weekly Sunday morning worship service.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">9:00 AM - Main Hall</span>
              <Button variant="ghost" size="sm">View Details</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Events;