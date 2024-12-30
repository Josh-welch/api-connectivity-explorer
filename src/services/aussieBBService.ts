import { toast } from "sonner";

interface AussieBBService {
  service_id: string;
  service_type: string;
  status: string;
  address: string;
  speed_tier: string;
  technology_type: string;
  usage?: {
    current_billing_period: {
      start_date: string;
      end_date: string;
      total_downloaded: number;
      total_uploaded: number;
      total_usage: number;
    };
  };
}

export class AussieBBClient {
  private baseUrl = "https://myaussie-api.aussiebroadband.com.au";
  private token: string | null = null;
  public isDummy: boolean = false;

  constructor(private username: string, private password: string) {
    this.isDummy = username === "dummy" && password === "dummy";
  }

  async login(): Promise<boolean> {
    if (this.isDummy) {
      return true;
    }

    try {
      const response = await fetch(`${this.baseUrl}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      this.token = data.token;
      return true;
    } catch (error) {
      console.error('Login error:', error);
      toast.error("Failed to login to Aussie Broadband");
      return false;
    }
  }

  async getServices(): Promise<AussieBBService[]> {
    if (this.isDummy) {
      // Return empty array as the dummy data is handled in the component
      return [];
    }

    if (!this.token) {
      throw new Error('Not authenticated');
    }

    try {
      const response = await fetch(`${this.baseUrl}/services`, {
        headers: {
          'Authorization': `Bearer ${this.token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch services');
      }

      return response.json();
    } catch (error) {
      console.error('Get services error:', error);
      toast.error("Failed to fetch services");
      return [];
    }
  }
}