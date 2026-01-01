import { addDays, format, subDays, subMonths } from "date-fns";

// Types
export interface KPI {
  label: string;
  value: string;
  change: number;
  trend: "up" | "down" | "neutral";
  description: string;
}

export interface ChartData {
  date: string;
  revenue: number;
  orders: number;
  newCustomers: number;
}

export interface RFMSegment {
  name: string;
  count: number;
  value: number;
  description: string;
  color: string;
}

// Mock Data Generators
export const generateKPIData = (): KPI[] => [
  {
    label: "Total Revenue (GMV)",
    value: "R$ 1,245,390",
    change: 12.5,
    trend: "up",
    description: "vs. last month",
  },
  {
    label: "Active Customers",
    value: "12,450",
    change: 5.2,
    trend: "up",
    description: "vs. last month",
  },
  {
    label: "Churn Rate",
    value: "4.8%",
    change: -1.2,
    trend: "down", // down is good for churn
    description: "vs. last month",
  },
  {
    label: "Avg. Order Value",
    value: "R$ 145.20",
    change: 2.1,
    trend: "up",
    description: "vs. last month",
  },
];

export const generateRevenueTrend = (days = 30): ChartData[] => {
  const data: ChartData[] = [];
  const today = new Date();
  
  for (let i = days; i >= 0; i--) {
    const date = subDays(today, i);
    const baseRevenue = 5000 + Math.random() * 3000;
    const baseOrders = 40 + Math.random() * 20;
    
    // Add some seasonality/trend
    const trendFactor = 1 + (days - i) / days * 0.2; // Slight upward trend
    
    data.push({
      date: format(date, "MMM dd"),
      revenue: Math.round(baseRevenue * trendFactor),
      orders: Math.round(baseOrders * trendFactor),
      newCustomers: Math.round((baseOrders * trendFactor) * 0.3),
    });
  }
  return data;
};

export const rfmSegments: RFMSegment[] = [
  { name: "Champions", count: 1250, value: 450000, description: "Bought recently, buy often and spend the most", color: "#10B981" }, // Emerald
  { name: "Loyal Customers", count: 2400, value: 320000, description: "Buy on a regular basis. Responsive to promotions.", color: "#3B82F6" }, // Blue
  { name: "Potential Loyalist", count: 3100, value: 210000, description: "Recent customers with average frequency.", color: "#6366F1" }, // Indigo
  { name: "At Risk", count: 1800, value: 150000, description: "Spent big money, haven't purchased recently.", color: "#F59E0B" }, // Amber
  { name: "Hibernating", count: 2200, value: 80000, description: "Last purchase was long ago and low number of orders.", color: "#EF4444" }, // Red
  { name: "Lost", count: 1700, value: 35000, description: "Lowest recency, frequency and monetary scores.", color: "#64748B" }, // Slate
];

export const churnRiskData = Array.from({ length: 20 }, (_, i) => ({
  id: `USR-${1000 + i}`,
  name: `Customer ${1000 + i}`,
  rfm_segment: i % 3 === 0 ? "Champions" : i % 2 === 0 ? "Loyal Customers" : "At Risk",
  churn_prob: 0.6 + Math.random() * 0.35, // High risk 60-95%
  last_purchase: `${Math.floor(Math.random() * 60) + 30} days ago`,
  total_spend: Math.floor(Math.random() * 2000) + 500,
}));

export const sentimentData = [
  { date: "Week 1", positive: 65, neutral: 20, negative: 15 },
  { date: "Week 2", positive: 62, neutral: 22, negative: 16 },
  { date: "Week 3", positive: 58, neutral: 25, negative: 17 },
  { date: "Week 4", positive: 70, neutral: 20, negative: 10 }, // Campaign effect
];

export const mockFeatureImportance = [
  { feature: 'Recency', importance: 0.35 },
  { feature: 'Frequency', importance: 0.25 },
  { feature: 'Monetary', importance: 0.15 },
  { feature: 'Avg Rating', importance: 0.12 },
  { feature: 'Support Tickets', importance: 0.08 },
  { feature: 'Return Rate', importance: 0.05 },
];

export const mockSentimentDrivers = [
  { factor: 'Delivery Speed', impact: 12, type: 'positive' },
  { factor: 'Product Quality', impact: 8, type: 'positive' },
  { factor: 'Customer Service', impact: 5, type: 'positive' },
  { factor: 'Packaging', impact: -5, type: 'negative' },
  { factor: 'Return Process', impact: -8, type: 'negative' },
];

export const mockEmergingTopics = [
  { topic: 'Fast Delivery', mentions: 1250, trend: 'up', sentiment: 'positive' },
  { topic: 'Product Quality', mentions: 980, trend: 'up', sentiment: 'positive' },
  { topic: 'Return Process', mentions: 450, trend: 'down', sentiment: 'negative' },
  { topic: 'Customer Support', mentions: 320, trend: 'stable', sentiment: 'neutral' },
];
