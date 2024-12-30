import { Card } from "@/components/ui/card";
import { Book, MessageSquare, Phone, Mail, AlertTriangle, MessageCircle, FileText } from "lucide-react";

const Support = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl text-gray-600">Support Options</h2>
      
      <div className="space-y-4">
        <Card className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Book className="h-6 w-6 text-gray-500" />
              <div>
                <h3 className="font-semibold">FAQs</h3>
                <p className="text-sm text-gray-600">Self-help articles on internet, mobile, our app and more.</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <FileText className="h-5 w-5" />
            </button>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-6 w-6 text-gray-500" />
              <div>
                <h3 className="font-semibold">Live Chat</h3>
                <p className="text-sm text-gray-600">Start a Live Chat with our Australian support team.</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <MessageCircle className="h-5 w-5" />
            </button>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-gray-500" />
              <div>
                <h3 className="font-semibold">1300 880 905</h3>
                <p className="text-sm text-gray-600">Call our onshore support team.</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <Phone className="h-5 w-5" />
            </button>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-gray-500" />
              <div>
                <h3 className="font-semibold">Email our support team</h3>
                <p className="text-sm text-gray-600">support@aussiebroadband.com.au</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <Mail className="h-5 w-5" />
            </button>
          </div>
        </Card>

        <Card className="p-4 border-red-200">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-red-500" />
              <div>
                <h3 className="font-semibold text-red-500">Report a fault</h3>
                <p className="text-sm text-red-600">Having an issue with the service? Create a fault now.</p>
              </div>
            </div>
            <button className="p-2 hover:bg-red-50 rounded-md">
              <AlertTriangle className="h-5 w-5 text-red-500" />
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Support;