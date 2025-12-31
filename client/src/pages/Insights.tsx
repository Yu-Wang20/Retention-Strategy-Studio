import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sentimentData } from "@/lib/mockData";
import { BarChart2, MessageSquare, ShoppingBag, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// Mock Recommendation Data
const recommendations = [
  { product: "Smart Watch Series 5", score: 98, reason: "Matches 'Tech Enthusiast' profile", category: "Electronics" },
  { product: "Wireless Earbuds Pro", score: 95, reason: "Frequently bought with phones", category: "Audio" },
  { product: "Ergonomic Office Chair", score: 88, reason: "High value potential", category: "Furniture" },
  { product: "Mechanical Keyboard", score: 82, reason: "Browsing history match", category: "Electronics" },
];

// Mock Trend Data
const trendTopics = [
  { topic: "Fast Delivery", volume: 1250, sentiment: "positive" },
  { topic: "Product Quality", volume: 980, sentiment: "positive" },
  { topic: "Return Process", volume: 450, sentiment: "negative" },
  { topic: "Customer Support", volume: 320, sentiment: "neutral" },
];

export default function Insights() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Insights & Trends</h1>
        <p className="text-muted-foreground">
          Deep dive into customer sentiment, product recommendations, and market trends.
        </p>
      </div>

      <Tabs defaultValue="recommendations" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        {/* Recommendations Tab */}
        <TabsContent value="recommendations" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {recommendations.map((item, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-32 bg-muted/30 flex items-center justify-center">
                  <ShoppingBag className="w-12 h-12 text-muted-foreground/20" />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                    <span className="text-xs font-bold text-primary">{item.score}% Match</span>
                  </div>
                  <CardTitle className="text-lg">{item.product}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Why:</span> {item.reason}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="mt-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Sentiment Analysis Over Time</CardTitle>
                <CardDescription>Tracking positive, neutral, and negative reviews</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sentimentData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                      <XAxis dataKey="date" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip 
                        cursor={{ fill: 'var(--muted)', opacity: 0.2 }}
                        contentStyle={{ backgroundColor: 'var(--popover)', borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
                        itemStyle={{ color: 'var(--popover-foreground)' }}
                      />
                      <Legend />
                      <Bar dataKey="positive" name="Positive" stackId="a" fill="#10B981" radius={[0, 0, 4, 4]} />
                      <Bar dataKey="neutral" name="Neutral" stackId="a" fill="#64748B" />
                      <Bar dataKey="negative" name="Negative" stackId="a" fill="#EF4444" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Key Drivers</CardTitle>
                <CardDescription>What impacts sentiment most?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Delivery Speed</span>
                    <span className="text-emerald-500 font-medium">+12%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[75%]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Product Quality</span>
                    <span className="text-emerald-500 font-medium">+8%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[65%]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Packaging</span>
                    <span className="text-destructive font-medium">-5%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-destructive w-[40%]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Trends Tab */}
        <TabsContent value="trends" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Emerging Topics</CardTitle>
              <CardDescription>Trending keywords in customer reviews and support tickets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {trendTopics.map((topic, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center",
                        topic.sentiment === "positive" ? "bg-emerald-500/10 text-emerald-500" :
                        topic.sentiment === "negative" ? "bg-destructive/10 text-destructive" :
                        "bg-secondary/10 text-secondary"
                      )}>
                        {topic.sentiment === "positive" ? <TrendingUp className="w-5 h-5" /> :
                         topic.sentiment === "negative" ? <TrendingUp className="w-5 h-5 rotate-180" /> :
                         <MessageSquare className="w-5 h-5" />}
                      </div>
                      <div>
                        <p className="font-medium">{topic.topic}</p>
                        <p className="text-xs text-muted-foreground">{topic.volume} mentions</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
