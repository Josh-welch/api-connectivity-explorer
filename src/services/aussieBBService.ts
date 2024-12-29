import { toast } from "sonner";

interface AussieBBService {
  service_id: string;
  // Add other service properties based on API response
}

interface UsageData {
  // Add usage data properties based on API response
}

export class AussieBBClient {
  private baseUrl = "https://myaussie-api.aussiebroadband.com.au";
  private token: string | null = null;

  constructor(private username: string, private password: string) {}

  async login(): Promise<boolean> {
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

  async getUsage(serviceId: string): Promise<UsageData | null> {
    if (!this.token) {
      throw new Error('Not authenticated');
    }

    try {
      const response = await fetch(`${this.baseUrl}/services/${serviceId}/usage`, {
        headers: {
          'Authorization': `Bearer ${this.token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch usage data');
      }

      return response.json();
    } catch (error) {
      console.error('Get usage error:', error);
      toast.error("Failed to fetch usage data");
      return null;
    }
  }
}