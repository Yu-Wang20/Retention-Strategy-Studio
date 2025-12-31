import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { generateKPIData, generateRevenueTrend, rfmSegments } from "@/lib/mockData";
import { ArrowDown, ArrowUp, Minus, TrendingUp, Users, DollarSign, Activity } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell, Pie, PieChart, Legend } from "recharts";
import { cn } from "@/lib/utils";

export default function Home() {
  const kpiData = generateKPIData();
  const trendData = generateRevenueTrend(30);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Real-time insights into your customer lifecycle and business performance.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi, index) => (
          <Card key={index} className="border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {kpi.label}
              </CardTitle>
              {index === 0 ? <DollarSign className="h-4 w-4 text-muted-foreground" /> :
               index === 1 ? <Users className="h-4 w-4 text-muted-foreground" /> :
               index === 2 ? <Activity className="h-4 w-4 text-muted-foreground" /> :
               <TrendingUp className="h-4 w-4 text-muted-foreground" />}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="flex items-center text-xs mt-1">
                {kpi.trend === "up" ? (
                  <span className={cn("flex items-center font-medium", kpi.label === "Churn Rate" ? "text-destructive" : "text-secondary")}>
                    <ArrowUp className="mr-1 h-3 w-3" />
                    {Math.abs(kpi.change)}%
                  </span>
                ) : kpi.trend === "down" ? (
                  <span className={cn("flex items-center font-medium", kpi.label === "Churn Rate" ? "text-secondary" : "text-destructive")}>
                    <ArrowDown className="mr-1 h-3 w-3" />
                    {Math.abs(kpi.change)}%
                  </span>
                ) : (
                  <span className="flex items-center text-muted-foreground font-medium">
                    <Minus className="mr-1 h-3 w-3" />
                    0%
                  </span>
                )}
                <span className="text-muted-foreground ml-1">{kpi.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Charts Section */}
      <div className="grid gap-4 md:grid-cols-7">
        {/* Revenue Trend Chart */}
        <Card className="col-span-4 shadow-sm">
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>Daily revenue performance over the last 30 days</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                  <XAxis 
                    dataKey="date" 
                    stroke="var(--muted-foreground)" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                  />
                  <YAxis 
                    stroke="var(--muted-foreground)" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    tickFormatter={(value) => `R$${value}`} 
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'var(--popover)', borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
                    itemStyle={{ color: 'var(--popover-foreground)' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="var(--primary)" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorRevenue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* RFM Distribution Chart */}
        <Card className="col-span-3 shadow-sm">
          <CardHeader>
            <CardTitle>Customer Segments</CardTitle>
            <CardDescription>Distribution by RFM segments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={rfmSegments}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="count"
                  >
                    {rfmSegments.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'var(--popover)', borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
                    itemStyle={{ color: 'var(--popover-foreground)' }}
                  />
                  <Legend 
                    layout="vertical" 
                    verticalAlign="middle" 
                    align="right"
                    iconType="circle"
                    formatter={(value, entry: any) => <span className="text-sm text-muted-foreground ml-1">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
