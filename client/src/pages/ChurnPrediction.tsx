import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { churnRiskData, mockFeatureImportance } from "@/lib/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, CheckCircle, HelpCircle, Play, RefreshCw } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";

// Mock Calibration Curve Data
const calibrationData = [
  { prob: 0.1, actual: 0.08 },
  { prob: 0.2, actual: 0.18 },
  { prob: 0.3, actual: 0.32 },
  { prob: 0.4, actual: 0.41 },
  { prob: 0.5, actual: 0.48 },
  { prob: 0.6, actual: 0.62 },
  { prob: 0.7, actual: 0.71 },
  { prob: 0.8, actual: 0.79 },
  { prob: 0.9, actual: 0.88 },
  { prob: 1.0, actual: 0.97 },
];

export default function ChurnPrediction() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Churn Prediction</h1>
          <p className="text-muted-foreground">
            AI-powered churn risk analysis. Identify at-risk customers before they leave.
          </p>
        </div>
        <Button className="gap-2">
          <Play className="w-4 h-4" />
          Retrain Model
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Model Performance */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Model Performance</CardTitle>
            <CardDescription>Logistic Regression (Calibrated)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Feature Importance (SHAP) */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold mb-3">Feature Importance (SHAP)</h4>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart layout="vertical" data={mockFeatureImportance} margin={{ left: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--border)" />
                    <XAxis type="number" domain={[0, 0.5]} hide />
                    <YAxis dataKey="feature" type="category" width={100} tick={{ fontSize: 10 }} stroke="var(--muted-foreground)" />
                    <Tooltip 
                      cursor={{ fill: 'var(--muted)' }}
                      contentStyle={{ backgroundColor: 'var(--popover)', borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
                    />
                    <Bar dataKey="importance" fill="var(--primary)" radius={[0, 4, 4, 0]} barSize={16} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="border-t pt-4"></div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">AUC Score</span>
                <span className="font-bold">0.87</span>
              </div>
              <Progress value={87} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Precision</span>
                <span className="font-bold">0.82</span>
              </div>
              <Progress value={82} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Recall</span>
                <span className="font-bold">0.76</span>
              </div>
              <Progress value={76} className="h-2" />
            </div>
            
            <div className="pt-4 border-t">
              <h4 className="text-sm font-semibold mb-3">Calibration Curve</h4>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={calibrationData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis type="number" dataKey="prob" domain={[0, 1]} tickCount={6} stroke="var(--muted-foreground)" fontSize={10} />
                    <YAxis type="number" dataKey="actual" domain={[0, 1]} tickCount={6} stroke="var(--muted-foreground)" fontSize={10} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'var(--popover)', borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
                      itemStyle={{ color: 'var(--popover-foreground)' }}
                    />
                    <ReferenceLine segment={[{ x: 0, y: 0 }, { x: 1, y: 1 }]} stroke="var(--muted-foreground)" strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="actual" stroke="var(--primary)" strokeWidth={2} dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Ideal calibration follows the diagonal line.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* High Risk Customers List */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>High Risk Customers</CardTitle>
            <CardDescription>Top customers with high churn probability (&gt;60%)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted/50 text-muted-foreground font-medium">
                  <tr>
                    <th className="px-4 py-3">Customer</th>
                    <th className="px-4 py-3">Segment</th>
                    <th className="px-4 py-3">Last Purchase</th>
                    <th className="px-4 py-3">Total Spend</th>
                    <th className="px-4 py-3">Churn Prob.</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {churnRiskData.map((customer, i) => (
                    <tr key={i} className="hover:bg-muted/50 transition-colors">
                      <td className="px-4 py-3 font-medium">
                        <div>{customer.name}</div>
                        <div className="text-xs text-muted-foreground">{customer.id}</div>
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="outline" className="font-normal">
                          {customer.rfm_segment}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{customer.last_purchase}</td>
                      <td className="px-4 py-3 text-muted-foreground">R$ {customer.total_spend}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-destructive" 
                              style={{ width: `${customer.churn_prob * 100}%` }} 
                            />
                          </div>
                          <span className="text-xs font-medium text-destructive">
                            {(customer.churn_prob * 100).toFixed(0)}%
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Button size="sm" variant="secondary" className="h-7 text-xs">
                          Retain
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
