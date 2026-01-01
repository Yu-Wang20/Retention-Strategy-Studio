import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Code2, Database, Layers, LayoutDashboard, LineChart, ShieldCheck, Zap } from "lucide-react";

export default function Documentation() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Project Documentation</h1>
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">v2.0.0</Badge>
        </div>
        <p className="text-muted-foreground text-lg">
          Technical reference and user guide for the Lifecycle Strategy Engine.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="architecture">Architecture</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="api">Data Schema</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About the Project</CardTitle>
              <CardDescription>Context and Objectives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The <strong>Lifecycle Strategy Engine</strong> is a comprehensive analytics platform designed to optimize customer lifetime value (CLV) for e-commerce businesses. Built on the Olist Brazilian E-Commerce dataset, it provides actionable insights through advanced segmentation, predictive modeling, and strategy simulation.
              </p>
              <div className="grid gap-4 md:grid-cols-3 mt-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h3 className="font-semibold flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-primary" />
                    Strategic Focus
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Shift from reactive reporting to proactive strategy with predictive churn analysis and ROI simulation.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h3 className="font-semibold flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-primary" />
                    Customer Centric
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Deep dive into customer behavior with RFM segmentation and sentiment analysis.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h3 className="font-semibold flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-primary" />
                    Actionable
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Directly translate insights into marketing actions with the Strategy Engine and A/B testing tools.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Architecture Tab */}
        <TabsContent value="architecture" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Technical Stack (V2.0)</CardTitle>
              <CardDescription>Modern, scalable, and performant technologies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <LayoutDashboard className="w-4 h-4" />
                    Frontend
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <strong>React 19:</strong> Latest features for optimal performance.
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <strong>Tailwind CSS 4:</strong> Utility-first styling with OKLCH colors.
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <strong>Shadcn UI:</strong> Accessible, professional component library.
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <strong>Recharts:</strong> Composable charting library for React.
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    Backend (Planned)
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-slate-400" />
                      <strong>FastAPI (Python):</strong> High-performance API framework.
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-slate-400" />
                      <strong>PostgreSQL:</strong> Robust relational database.
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-slate-400" />
                      <strong>Celery:</strong> Asynchronous task queue for ML jobs.
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-slate-400" />
                      <strong>Scikit-learn / XGBoost:</strong> Machine learning pipelines.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Features Tab */}
        <TabsContent value="features" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">RFM Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                3D visualization of customer segments based on Recency, Frequency, and Monetary value. Includes detailed segment breakdowns and tailored strategy recommendations.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Churn Prediction</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                ML-powered risk assessment with SHAP value explanations. Identifies high-risk users and provides global feature importance analysis.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Strategy Engine</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <strong>Promotion Simulator:</strong> Calculate ROI and marginal returns for campaigns.<br/>
                <strong>A/B Testing:</strong> Design experiments and calculate required sample sizes.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Market Insights</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <strong>Recommendation:</strong> Personalized product suggestions with "Why" explanations.<br/>
                <strong>Sentiment:</strong> NLP analysis of reviews with driver attribution.<br/>
                <strong>Trends:</strong> Emerging topic tracking and keyword graphs.
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* API / Schema Tab */}
        <TabsContent value="api" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Schema</CardTitle>
              <CardDescription>Core entities and relationships</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] rounded-md border p-4">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-mono font-bold text-primary mb-2">customers</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground font-mono">
                      <li>customer_id (PK)</li>
                      <li>customer_unique_id</li>
                      <li>customer_zip_code_prefix</li>
                      <li>customer_city</li>
                      <li>customer_state</li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-mono font-bold text-primary mb-2">orders</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground font-mono">
                      <li>order_id (PK)</li>
                      <li>customer_id (FK)</li>
                      <li>order_status</li>
                      <li>order_purchase_timestamp</li>
                      <li>order_approved_at</li>
                      <li>order_delivered_carrier_date</li>
                      <li>order_delivered_customer_date</li>
                      <li>order_estimated_delivery_date</li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-mono font-bold text-primary mb-2">order_items</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground font-mono">
                      <li>order_id (FK)</li>
                      <li>order_item_id</li>
                      <li>product_id (FK)</li>
                      <li>seller_id (FK)</li>
                      <li>shipping_limit_date</li>
                      <li>price</li>
                      <li>freight_value</li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-mono font-bold text-primary mb-2">products</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground font-mono">
                      <li>product_id (PK)</li>
                      <li>product_category_name</li>
                      <li>product_name_lenght</li>
                      <li>product_description_lenght</li>
                      <li>product_photos_qty</li>
                      <li>product_weight_g</li>
                      <li>product_length_cm</li>
                      <li>product_height_cm</li>
                      <li>product_width_cm</li>
                    </ul>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-8">
        <Code2 className="w-4 h-4" />
        <span>Built with React, Tailwind, and Recharts</span>
      </div>
    </div>
  );
}

function Target(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function Users(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
