import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Code2, Database, Layers, Zap } from "lucide-react";

export default function Documentation() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Project Documentation</h1>
        <p className="text-muted-foreground">
          Comprehensive guide to the User Lifecycle Strategy Engine architecture and features.
        </p>
      </div>

      {/* Project Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" />
            Project Overview
          </CardTitle>
          <CardDescription>
            A data-driven platform designed to optimize customer lifecycle management through advanced analytics and AI.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-7">
            This project leverages the Brazilian E-Commerce Public Dataset by Olist to demonstrate a complete end-to-end solution for customer retention and value maximization. It integrates RFM analysis, churn prediction, and personalized recommendations into a unified strategy engine.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary">React 19</Badge>
            <Badge variant="secondary">Tailwind CSS 4</Badge>
            <Badge variant="secondary">Recharts</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Vite</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Key Features */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5 text-emerald-500" />
              Data Processing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                <span>Automated ETL pipeline for Olist datasets</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                <span>Data cleaning and schema validation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                <span>Real-time metric aggregation</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              AI & Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5" />
                <span>RFM Segmentation (K-Means Clustering)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5" />
                <span>Churn Prediction (Logistic Regression)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5" />
                <span>Sentiment Analysis (NLP)</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Technical Architecture */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-blue-500" />
            Technical Architecture
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Frontend Layer</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Built with React 19 and Vite for high performance. Uses Tailwind CSS 4 for styling and Shadcn UI for accessible, consistent components. Recharts is used for all data visualizations.
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold mb-2">Data Layer (Simulation)</h3>
            <p className="text-sm text-muted-foreground">
              The current implementation uses a sophisticated mock data generator (`mockData.ts`) to simulate real-world e-commerce patterns, including seasonality, churn probability distributions, and sentiment trends. This allows for full UI/UX validation before backend integration.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
