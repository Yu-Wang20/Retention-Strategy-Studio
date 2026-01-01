import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { generateKPIData, generateRevenueTrend, rfmSegments } from "@/lib/mockData";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, ReferenceLine, ReferenceDot } from "recharts";
import { ArrowDown, ArrowUp, Minus, TrendingUp, Users, Activity, DollarSign, Info } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export default function Home() {
  const kpiData = generateKPIData();
  const revenueData = generateRevenueTrend();

  // Add event annotations to revenue data
  const eventIndex = Math.floor(revenueData.length / 2);
  const eventDate = revenueData[eventIndex].date;

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Real-time insights into your customer lifecycle and business performance.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi, i) => (
          <Card key={i} className="overflow-hidden border-l-4" style={{ borderLeftColor: i === 0 ? '#4F46E5' : i === 1 ? '#4F46E5' : i === 2 ? '#4F46E5' : '#4F46E5' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {kpi.label}
              </CardTitle>
              {i === 0 ? <DollarSign className="h-4 w-4 text-muted-foreground" /> : 
               i === 1 ? <Users className="h-4 w-4 text-muted-foreground" /> :
               i === 2 ? <Activity className="h-4 w-4 text-muted-foreground" /> :
               <TrendingUp className="h-4 w-4 text-muted-foreground" />}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="flex items-center text-xs mt-1">
                {kpi.trend === 'up' ? (
                  <ArrowUp className="h-3 w-3 text-emerald-500 mr-1" />
                ) : kpi.trend === 'down' ? (
                  <ArrowDown className="h-3 w-3 text-rose-500 mr-1" />
                ) : (
                  <Minus className="h-3 w-3 text-slate-500 mr-1" />
                )}
                <span className={kpi.trend === 'up' ? 'text-emerald-500 font-medium' : kpi.trend === 'down' ? 'text-rose-500 font-medium' : 'text-slate-500'}>
                  {kpi.change > 0 ? '+' : ''}{kpi.change}%
                </span>
                <span className="text-muted-foreground ml-1">{kpi.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Revenue Trend Chart with Event Annotation */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Revenue Trend</CardTitle>
              <CardDescription>Daily revenue performance with key events</CardDescription>
            </div>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Info className="w-4 h-4 text-muted-foreground cursor-help" />
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Event Driven Narrative</h4>
                  <p className="text-xs text-muted-foreground">
                    The chart highlights significant marketing events that impacted revenue. Hover over the dots to see details.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </CardHeader>
          <CardContent>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
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
                    stroke="#4F46E5" 
                    strokeWidth={2} 
                    fillOpacity={1} 
                    fill="url(#colorRevenue)" 
                  />
                  {/* Event Annotation */}
                  <ReferenceLine x={eventDate} stroke="var(--destructive)" strokeDasharray="3 3" label={{ value: "Black Friday Promo", position: 'insideTopRight', fill: 'var(--destructive)', fontSize: 12 }} />
                  <ReferenceDot x={eventDate} y={revenueData[eventIndex].revenue} r={6} fill="var(--destructive)" stroke="var(--background)" strokeWidth={2} />
                  
                  {/* Additional Event for Narrative */}
                  <ReferenceLine x={revenueData[5].date} stroke="#10B981" strokeDasharray="3 3" label={{ value: "New Collection", position: 'insideTopLeft', fill: '#10B981', fontSize: 12 }} />
                  <ReferenceDot x={revenueData[5].date} y={revenueData[5].revenue} r={6} fill="#10B981" stroke="var(--background)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* RFM Segments Pie Chart */}
        <Card className="lg:col-span-1">
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
                    formatter={(value) => <span className="text-sm text-muted-foreground ml-1">{value}</span>}
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
