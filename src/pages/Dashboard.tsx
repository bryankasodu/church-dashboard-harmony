import { Card } from "@/components/ui/card";
import { Users, Calendar, Heart } from "lucide-react";

const StatCard = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <Card className="stat-card">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </div>
      <Icon className="w-5 h-5 text-primary" />
    </div>
  </Card>
);

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-semibold">Welcome Back</h1>
        <p className="text-muted-foreground mt-1">Here's what's happening in your church.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard icon={Users} label="Total Members" value="256" />
        <StatCard icon={Calendar} label="Upcoming Events" value="12" />
        <StatCard icon={Heart} label="Sick Members" value="3" />
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">This Week's Schedule</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-secondary rounded-lg animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div>
                <p className="font-medium">Sunday Service</p>
                <p className="text-sm text-muted-foreground">9:00 AM - Main Hall</p>
              </div>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Upcoming
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;