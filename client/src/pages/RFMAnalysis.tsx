import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { rfmSegments } from "@/lib/mockData";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis, Legend } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Users, DollarSign, Target, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Generate mock scatter data for RFM visualization
const generateScatterData = () => {
  const data = [];
  const segments = ["Champions", "Loyal Customers", "Potential Loyalist", "At Risk", "Hibernating", "Lost"];
  const colors = ["#10B981", "#3B82F6", "#6366F1", "#F59E0B", "#EF4444", "#64748B"];
  
  for (let i = 0; i < 200; i++) {
    const segmentIndex = Math.floor(Math.random() * segments.length);
    // Correlate R, F, M roughly with segments
    let r, f, m;
    
    if (segmentIndex === 0) { // Champions: High R, High F, High M
      r = 4 + Math.random(); f = 4 + Math.random(); m = 4 + Math.random();
    } else if (segmentIndex === 1) { // Loyal: Mod R, High F, Mod M
      r = 3 + Math.random(); f = 4 + Math.random(); m = 3 + Math.random();
    } else if (segmentIndex === 5) { // Lost: Low R, Low F, Low M
      r = 1 + Math.random(); f = 1 + Math.random(); m = 1 + Math.random();
    } else {
      r = 1 + Math.random() * 4; f = 1 + Math.random() * 4; m = 1 + Math.random() * 4;
    }

    data.push({
      x: r * 20, // Recency (days since last purchase, inverted for chart usually, but here let's say Score)
      y: f * 10, // Frequency
      z: m * 100, // Monetary
      segment: segments[segmentIndex],
      fill: colors[segmentIndex]
    });
  }
  return data;
};

export default function RFMAnalysis() {
  const scatterData = generateScatterData();

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">RFM Analysis</h1>
          <p className="text-muted-foreground">
            Segment your customers based on Recency, Frequency, and Monetary value to target them effectively.
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="w-4 h-4" />
          Export Segments
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* RFM Visualization */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Customer Segmentation Map</CardTitle>
            <CardDescription>Visualizing customer clusters based on Recency (X) vs Frequency (Y) vs Monetary (Size)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis type="number" dataKey="x" name="Recency Score" unit="" stroke="var(--muted-foreground)" />
                  <YAxis type="number" dataKey="y" name="Frequency Score" unit="" stroke="var(--muted-foreground)" />
                  <ZAxis type="number" dataKey="z" range={[50, 400]} name="Monetary Value" unit="R$" />
                  <Tooltip 
                    cursor={{ strokeDasharray: '3 3' }}
                    contentStyle={{ backgroundColor: 'var(--popover)', borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
                    itemStyle={{ color: 'var(--popover-foreground)' }}
                  />
                  <Legend />
                  {rfmSegments.map((segment, index) => (
                    <Scatter 
                      key={segment.name} 
                      name={segment.name} 
                      data={scatterData.filter(d => d.segment === segment.name)} 
                      fill={segment.color} 
                    />
                  ))}
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Segment Details List */}
        <Card className="lg:col-span-1 h-full flex flex-col">
          <CardHeader>
            <CardTitle>Segment Details</CardTitle>
            <CardDescription>Breakdown of customer groups</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto pr-2">
            <div className="space-y-4">
              {rfmSegments.map((segment) => (
                <div key={segment.name} className="flex flex-col p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: segment.color }} />
                      <span className="font-semibold text-sm">{segment.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {((segment.count / 12450) * 100).toFixed(1)}%
                    </Badge>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{segment.count.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      <span>R$ {segment.value.toLocaleString()}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground/80 line-clamp-2 mb-3">
                    {segment.description}
                  </p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full h-7 text-xs">View Strategy</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: segment.color }} />
                          {segment.name} Strategy
                        </DialogTitle>
                        <DialogDescription>
                          Tailored marketing approach for this segment.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-lg bg-muted/50 space-y-1">
                            <div className="text-sm text-muted-foreground">Total GMV Contribution</div>
                            <div className="text-2xl font-bold">R$ {segment.value.toLocaleString()}</div>
                          </div>
                          <div className="p-4 rounded-lg bg-muted/50 space-y-1">
                            <div className="text-sm text-muted-foreground">Avg. Order Value</div>
                            <div className="text-2xl font-bold">R$ {Math.round(segment.value / segment.count)}</div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold flex items-center gap-2">
                            <Target className="w-4 h-4 text-primary" />
                            Recommended Actions
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <ArrowRight className="w-4 h-4 mt-0.5 text-primary/50" />
                              <span>Launch personalized email campaign offering {segment.name === 'Champions' ? 'early access to new products' : 'a time-limited discount'}.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ArrowRight className="w-4 h-4 mt-0.5 text-primary/50" />
                              <span>{segment.name === 'Champions' ? 'Invite to VIP loyalty program.' : 'Send "We miss you" push notification.'}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Actionable Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Recommended Actions</CardTitle>
          <CardDescription>Strategic next steps for each segment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">Champions</h4>
              <p className="text-sm text-muted-foreground">Reward them. Can be early adopters for new products. Will promote your brand.</p>
            </div>
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">At Risk</h4>
              <p className="text-sm text-muted-foreground">Send personalized emails to reconnect, offer renewals, provide helpful resources.</p>
            </div>
            <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Loyal Customers</h4>
              <p className="text-sm text-muted-foreground">Upsell higher value products. Ask for reviews. Engage them.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
