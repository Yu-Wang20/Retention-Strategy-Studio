import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Calculator, DollarSign, Percent, Target, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// Mock Simulation Data
const simulationResults = [
  { name: "Revenue", baseline: 120000, strategy: 145000 },
  { name: "Profit", baseline: 36000, strategy: 41500 },
  { name: "Active Users", baseline: 2400, strategy: 2850 },
];

export default function StrategyEngine() {
  const [budget, setBudget] = useState([5000]);
  const [discount, setDiscount] = useState([15]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Strategy Engine</h1>
        <p className="text-muted-foreground">
          Design promotion campaigns and simulate their ROI before launching.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Strategy Configuration */}
        <Card className="lg:col-span-1 h-fit">
          <CardHeader>
            <CardTitle>Campaign Configuration</CardTitle>
            <CardDescription>Define your targeting and offer parameters</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Target Segment</Label>
              <Select defaultValue="at-risk">
                <SelectTrigger>
                  <SelectValue placeholder="Select segment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="champions">Champions</SelectItem>
                  <SelectItem value="loyal">Loyal Customers</SelectItem>
                  <SelectItem value="at-risk">At Risk (High Priority)</SelectItem>
                  <SelectItem value="hibernating">Hibernating</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Offer Type</Label>
              <Tabs defaultValue="percent" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="percent">% Off</TabsTrigger>
                  <TabsTrigger value="fixed">Fixed</TabsTrigger>
                  <TabsTrigger value="shipping">Free Ship</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <Label>Discount Value</Label>
                <span className="text-sm font-medium">{discount}%</span>
              </div>
              <Slider 
                value={discount} 
                onValueChange={setDiscount} 
                max={50} 
                step={5} 
                className="py-2"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <Label>Campaign Budget</Label>
                <span className="text-sm font-medium">R$ {budget[0].toLocaleString()}</span>
              </div>
              <Slider 
                value={budget} 
                onValueChange={setBudget} 
                max={50000} 
                step={1000} 
                className="py-2"
              />
            </div>

            <Button className="w-full gap-2" size="lg">
              <Calculator className="w-4 h-4" />
              Simulate ROI
            </Button>
          </CardContent>
        </Card>

        {/* Simulation Results */}
        <div className="lg:col-span-2 space-y-6">
          {/* ROI Summary Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Projected ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  325%
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  R$ 3.25 return for every R$ 1 spent
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Incremental Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 25,000</div>
                <p className="text-xs text-muted-foreground mt-1 text-emerald-600 flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1" />
                  Lift vs Baseline
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Saved Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">450</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Estimated churn prevention
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Baseline vs Strategy Simulation</CardTitle>
              <CardDescription>Projected impact on key metrics over next 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={simulationResults} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--border)" />
                    <XAxis type="number" stroke="var(--muted-foreground)" fontSize={12} />
                    <YAxis dataKey="name" type="category" stroke="var(--muted-foreground)" fontSize={12} width={80} />
                    <Tooltip 
                      cursor={{ fill: 'var(--muted)', opacity: 0.2 }}
                      contentStyle={{ backgroundColor: 'var(--popover)', borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
                      itemStyle={{ color: 'var(--popover-foreground)' }}
                    />
                    <Legend />
                    <Bar dataKey="baseline" name="Baseline (No Action)" fill="var(--muted-foreground)" radius={[0, 4, 4, 0]} barSize={20} />
                    <Bar dataKey="strategy" name="With Strategy" fill="var(--primary)" radius={[0, 4, 4, 0]} barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
