import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Play, TrendingUp, Users, Beaker, BarChart2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend, ReferenceLine } from "recharts";
import { Badge } from "@/components/ui/badge";

export default function StrategyEngine() {
  // Promotion Simulator State
  const [budget, setBudget] = useState([5000]);
  const [targetSegment, setTargetSegment] = useState("loyal");
  const [discountType, setDiscountType] = useState("percent");
  
  // A/B Testing State
  const [baselineRate, setBaselineRate] = useState(15);
  const [mde, setMde] = useState(2); // Minimum Detectable Effect
  const [power, setPower] = useState(80);
  
  // Mock Simulation Results
  const simulationResults = {
    roi: 3.5,
    revenue: budget[0] * 3.5,
    retained: Math.floor(budget[0] / 50),
    marginalRoiData: [
      { spend: 1000, return: 5.2 },
      { spend: 3000, return: 4.8 },
      { spend: 5000, return: 3.5 }, // Current
      { spend: 7000, return: 2.1 },
      { spend: 9000, return: 1.2 },
    ]
  };

  // Mock A/B Test Sample Size Calculation
  // Simple approximation for display purposes
  const sampleSize = Math.round((16 * 15 * (100 - 15)) / (mde * mde)); 

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Strategy Engine</h1>
        <p className="text-muted-foreground">
          Simulate marketing campaigns and design A/B tests to optimize ROI.
        </p>
      </div>

      <Tabs defaultValue="simulator" className="space-y-6">
        <TabsList>
          <TabsTrigger value="simulator" className="gap-2">
            <Calculator className="w-4 h-4" />
            Promotion Simulator
          </TabsTrigger>
          <TabsTrigger value="ab-testing" className="gap-2">
            <Beaker className="w-4 h-4" />
            A/B Test Designer
          </TabsTrigger>
        </TabsList>

        {/* Promotion Simulator Tab */}
        <TabsContent value="simulator" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Configuration Panel */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Campaign Configuration</CardTitle>
                <CardDescription>Set parameters for your simulation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Target Segment</Label>
                  <Select value={targetSegment} onValueChange={setTargetSegment}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="champions">Champions</SelectItem>
                      <SelectItem value="loyal">Loyal Customers</SelectItem>
                      <SelectItem value="risk">At Risk</SelectItem>
                      <SelectItem value="lost">Lost</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Discount Type</Label>
                  <Select value={discountType} onValueChange={setDiscountType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percent">Percentage Off (%)</SelectItem>
                      <SelectItem value="fixed">Fixed Amount (R$)</SelectItem>
                      <SelectItem value="shipping">Free Shipping</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Label>Budget (R$)</Label>
                    <span className="text-sm font-medium text-primary">R$ {budget[0].toLocaleString()}</span>
                  </div>
                  <Slider 
                    value={budget} 
                    onValueChange={setBudget} 
                    max={20000} 
                    step={500} 
                    className="py-4"
                  />
                </div>

                <Button className="w-full gap-2">
                  <Play className="w-4 h-4" />
                  Run Simulation
                </Button>
              </CardContent>
            </Card>

            {/* Results Panel */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Projected Outcomes</CardTitle>
                <CardDescription>Estimated impact based on historical data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-center space-y-1">
                    <div className="text-sm text-muted-foreground">Projected ROI</div>
                    <div className="text-3xl font-bold text-primary">{simulationResults.roi}x</div>
                  </div>
                  <div className="p-4 rounded-lg bg-card border text-center space-y-1">
                    <div className="text-sm text-muted-foreground">Incr. Revenue</div>
                    <div className="text-2xl font-bold">R$ {simulationResults.revenue.toLocaleString()}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-card border text-center space-y-1">
                    <div className="text-sm text-muted-foreground">Retained Users</div>
                    <div className="text-2xl font-bold">{simulationResults.retained}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Marginal ROI Analysis</h4>
                  <p className="text-xs text-muted-foreground mb-4">
                    Diminishing returns observed after R$ 5,000 spend.
                  </p>
                  <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={simulationResults.marginalRoiData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                        <XAxis 
                          dataKey="spend" 
                          label={{ value: 'Budget Spend (R$)', position: 'bottom', offset: 0 }} 
                          stroke="var(--muted-foreground)"
                          fontSize={12}
                        />
                        <YAxis 
                          label={{ value: 'ROI Multiplier', angle: -90, position: 'insideLeft' }} 
                          stroke="var(--muted-foreground)"
                          fontSize={12}
                        />
                        <Tooltip 
                          contentStyle={{ backgroundColor: 'var(--popover)', borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
                        />
                        <ReferenceLine x={5000} stroke="var(--destructive)" strokeDasharray="3 3" label="Current" />
                        <Line type="monotone" dataKey="return" stroke="var(--primary)" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* A/B Testing Tab */}
        <TabsContent value="ab-testing" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Calculator Panel */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Sample Size Calculator</CardTitle>
                <CardDescription>Determine required traffic for significance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Baseline Conversion Rate (%)</Label>
                  <Input 
                    type="number" 
                    value={baselineRate} 
                    onChange={(e) => setBaselineRate(Number(e.target.value))} 
                  />
                </div>
                <div className="space-y-2">
                  <Label>Minimum Detectable Effect (%)</Label>
                  <Input 
                    type="number" 
                    value={mde} 
                    onChange={(e) => setMde(Number(e.target.value))} 
                  />
                  <p className="text-xs text-muted-foreground">Absolute change (e.g., 15% -&gt; 17% is 2%)</p>
                </div>
                <div className="space-y-2">
                  <Label>Statistical Power (%)</Label>
                  <Slider 
                    value={[power]} 
                    onValueChange={(v) => setPower(v[0])} 
                    min={50} 
                    max={99} 
                    step={1} 
                  />
                  <div className="text-right text-xs text-muted-foreground">{power}%</div>
                </div>

                <div className="p-4 rounded-lg bg-muted text-center">
                  <div className="text-sm text-muted-foreground mb-1">Required Sample Size</div>
                  <div className="text-3xl font-bold text-foreground">{sampleSize.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground mt-1">per variation</div>
                </div>
              </CardContent>
            </Card>

            {/* Active Tests Dashboard */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Active Experiments</CardTitle>
                <CardDescription>Real-time performance of running tests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Experiment 1 */}
                  <div className="border rounded-lg p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">Checkout Flow: One-page vs Multi-step</h4>
                        <p className="text-sm text-muted-foreground">Running for 12 days • 45,200 visitors</p>
                      </div>
                      <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                        Significant
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Control (Multi-step)</span>
                          <span className="font-medium">2.4% CR</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-slate-400" style={{ width: '40%' }} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Variant B (One-page)</span>
                          <span className="font-medium text-emerald-500">3.1% CR (+29%)</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500" style={{ width: '55%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experiment 2 */}
                  <div className="border rounded-lg p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">Hero Banner: Lifestyle vs Product</h4>
                        <p className="text-sm text-muted-foreground">Running for 3 days • 8,100 visitors</p>
                      </div>
                      <Badge variant="outline" className="text-muted-foreground">
                        Collecting Data
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Control (Lifestyle)</span>
                          <span className="font-medium">1.2% CTR</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-slate-400" style={{ width: '30%' }} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Confidence Level</span>
                          <span className="font-medium">92%</span>
                        </div>
                        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500" style={{ width: '92%' }} />
                        </div>
                        <p className="text-xs text-muted-foreground text-right">Need 95% for significance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}