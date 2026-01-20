import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const StickyTestDrive = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-1">Experience Alectri</h3>
            <p className="text-sm text-muted-foreground">
              Schedule a test drive and feel the future of driving
            </p>
          </div>
          <Link to="/schedule-test-drive">
            <Button size="lg" className="bg-accent hover:bg-accent/90 w-full sm:w-auto">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Test Drive
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StickyTestDrive;
