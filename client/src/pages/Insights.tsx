import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { sentimentData, mockSentimentDrivers, mockEmergingTopics } from "@/lib/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { MessageSquare, ShoppingBag, TrendingUp, ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";

export default function Insights() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Insights & Trends</h1>
        <p className="text-muted-foreground">
          Discover actionable insights from customer feedback and market trends.
        </p>
      </div>

      <Tabs defaultValue="recommendations" className="space-y-6">
        <TabsList>
          <TabsTrigger value="recommendations" className="gap-2">
            <ShoppingBag className="w-4 h-4" />
            Recommendations
          </TabsTrigger>
          <TabsTrigger value="sentiment" className="gap-2">
            <MessageSquare className="w-4 h-4" />
            Sentiment Analysis
          </TabsTrigger>
          <TabsTrigger value="trends" className="gap-2">
            <TrendingUp className="w-4 h-4" />
            Market Trends
          </TabsTrigger>
        </TabsList>

        {/* Recommendations Tab */}
        <TabsContent value="recommendations" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Smart Watch Series 5", category: "Electronics", match: 98, why: "Fits 'Tech Enthusiast' persona" },
              { name: "Wireless Earbuds Pro", category: "Audio", match: 95, why: "Often bought with Smartphone X" },
              { name: "Ergonomic Office Chair", category: "Furniture", match: 88, why: "High value potential, increases AOV" },
              { name: "Mechanical Keyboard", category: "Electronics", match: 82, why: "Matches your browsing history" },
              { name: "Running Shoes v3", category: "Sports", match: 75, why: "Popular in your region" },
              { name: "Coffee Maker Deluxe", category: "Home", match: 70, why: "Trending in 'Home Office' segment" },
            ].map((item, i) => (
              <Card key={i} className="overflow-hidden flex flex-col">
                <div className="aspect-video bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    Product Image
                  </div>
                  <Badge className="absolute top-2 right-2 bg-emerald-500 text-white border-none">{item.match}% Match</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription>Category: {item.category}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between gap-4">
                  <div className="bg-muted/50 p-3 rounded-md text-sm">
                    <span className="font-semibold text-primary block mb-1">Why Recommended:</span>
                    <span className="text-muted-foreground text-xs">{item.why}</span>
                  </div>
                  <Button className="w-full" variant="outline">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Customer Sentiment Trends</CardTitle>
                <CardDescription>Weekly sentiment analysis from reviews and support tickets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sentimentData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                      <XAxis dataKey="date" stroke="var(--muted-foreground)" fontSize={12} />
                      <YAxis stroke="var(--muted-foreground)" fontSize={12} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: 'var(--popover)', borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
                        itemStyle={{ color: 'var(--popover-foreground)' }}
                      />
                      <Legend />
                      <Bar dataKey="positive" name="Positive" stackId="a" fill="#10b981" radius={[0, 0, 4, 4]} />
                      <Bar dataKey="neutral" name="Neutral" stackId="a" fill="#64748b" />
                      <Bar dataKey="negative" name="Negative" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Sentiment Drivers</CardTitle>
                <CardDescription>Factors impacting customer satisfaction</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockSentimentDrivers.map((driver, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-sm font-medium">
                        <span>{driver.factor}</span>
                        <span className={driver.type === 'positive' ? 'text-emerald-500' : 'text-red-500'}>
                          {driver.impact > 0 ? '+' : ''}{driver.impact}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden flex">
                        {driver.type === 'positive' ? (
                          <div className="h-full bg-emerald-500" style={{ width: `${driver.impact * 4}%` }} />
                        ) : (
                          <div className="h-full bg-red-500 ml-auto" style={{ width: `${Math.abs(driver.impact) * 4}%` }} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Trends Tab */}
        <TabsContent value="trends" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Emerging Topics</CardTitle>
                <CardDescription>Topics with significant volume change</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockEmergingTopics.map((topic, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors cursor-pointer">
                      <div className="space-y-1">
                        <div className="font-medium flex items-center gap-2">
                          {topic.topic}
                          {topic.sentiment === 'positive' && <div className="w-2 h-2 rounded-full bg-emerald-500" />}
                          {topic.sentiment === 'negative' && <div className="w-2 h-2 rounded-full bg-red-500" />}
                          {topic.sentiment === 'neutral' && <div className="w-2 h-2 rounded-full bg-slate-400" />}
                        </div>
                        <div className="text-sm text-muted-foreground">{topic.mentions} mentions</div>
                      </div>
                      <div className="flex items-center gap-2">
                        {topic.trend === 'up' && <ArrowUpRight className="w-5 h-5 text-emerald-500" />}
                        {topic.trend === 'down' && <ArrowDownRight className="w-5 h-5 text-red-500" />}
                        {topic.trend === 'stable' && <Minus className="w-5 h-5 text-slate-400" />}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Keyword Cloud</CardTitle>
                <CardDescription>Frequently used keywords in reviews</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 content-start">
                {['excellent', 'fast', 'broken', 'cheap', 'premium', 'slow', 'helpful', 'rude', 'amazing', 'worth it', 'damaged', 'recommended', 'quality', 'service', 'shipping', 'price'].map((word, i) => (
                  <Badge 
                    key={i} 
                    variant="outline" 
                    className="text-sm py-1 px-3 cursor-default hover:bg-primary hover:text-primary-foreground transition-colors"
                    style={{ opacity: 0.6 + Math.random() * 0.4, fontSize: `${0.8 + Math.random() * 0.4}rem` }}
                  >
                    {word}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
