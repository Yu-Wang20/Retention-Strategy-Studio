import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, CloudUpload, FileSpreadsheet, AlertCircle, Upload, FileText, CheckCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock uploaded files
const initialFiles = [
  { name: "olist_orders_dataset.csv", size: "15.4 MB", status: "uploaded", records: "99,441" },
  { name: "olist_customers_dataset.csv", size: "8.6 MB", status: "uploaded", records: "99,441" },
  { name: "olist_order_items_dataset.csv", size: "24.1 MB", status: "uploaded", records: "112,650" },
  { name: "olist_order_payments_dataset.csv", size: "5.2 MB", status: "processing", records: "-" },
];

// Mock data for preview
const previewData = [
  { id: "ORD-001", customer_id: "CUST-101", date: "2023-10-15", amount: 150.50, status: "delivered" },
  { id: "ORD-002", customer_id: "CUST-102", date: "2023-10-16", amount: 89.90, status: "shipped" },
  { id: "ORD-003", customer_id: "CUST-103", date: "2023-10-16", amount: 210.00, status: "processing" },
  { id: "ORD-004", customer_id: "CUST-101", date: "2023-10-17", amount: 45.00, status: "delivered" },
  { id: "ORD-005", customer_id: "CUST-104", date: "2023-10-18", amount: 120.00, status: "delivered" },
];

const healthCheckResults = [
  { check: "Duplicate Customer IDs", status: "pass", message: "No duplicates found in customer table" },
  { check: "Missing Values", status: "warning", message: "2.5% missing values in 'customer_state'" },
  { check: "Date Format", status: "pass", message: "All dates in ISO 8601 format" },
  { check: "Negative Values", status: "pass", message: "No negative values in 'order_value'" },
];

const requiredFields = [
  { name: "customer_id", type: "string", mapped: true },
  { name: "order_id", type: "string", mapped: true },
  { name: "order_date", type: "date", mapped: true },
  { name: "order_value", type: "number", mapped: true },
];

export default function DataManagement() {
  const [files, setFiles] = useState(initialFiles);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Data Management</h1>
        <p className="text-muted-foreground">
          Upload your datasets to power the strategy engine. Supported formats: CSV, Excel.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upload Dataset</CardTitle>
            <CardDescription>Drag and drop your CSV files here</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed rounded-lg p-12 text-center hover:bg-muted/50 transition-colors cursor-pointer">
              <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <div className="text-lg font-medium mb-1">Drop files here or click to upload</div>
              <p className="text-sm text-muted-foreground">
                Supports .csv files (max 50MB)
              </p>
              <Button className="mt-4" variant="secondary">Select Files</Button>
            </div>
            <div className="mt-6 space-y-2">
              <h4 className="text-sm font-medium">Required Files</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  olist_customers_dataset.csv
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  olist_orders_dataset.csv
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  olist_order_items_dataset.csv
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dataset Status</CardTitle>
            <CardDescription>Manage your uploaded datasets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "olist_customers_dataset.csv", size: "8.4 MB", status: "Ready", date: "2023-10-24", health: "100%" },
                { name: "olist_orders_dataset.csv", size: "14.2 MB", status: "Ready", date: "2023-10-24", health: "98%" },
                { name: "olist_order_items_dataset.csv", size: "22.1 MB", status: "Mapping Required", date: "2023-10-23", health: "Pending" },
              ].map((file, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="w-8 h-8 text-primary/20" />
                    <div>
                      <div className="font-medium text-sm">{file.name}</div>
                      <div className="text-xs text-muted-foreground">{file.size} • {file.date}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-2">
                      {file.status === "Ready" && <CheckCircle className="w-4 h-4 text-emerald-500" />}
                      {file.status === "Mapping Required" && <AlertCircle className="w-4 h-4 text-amber-500" />}
                      <span className="text-xs font-medium">{file.status}</span>
                    </div>
                    {file.health !== "Pending" && (
                      <div className="text-[10px] text-muted-foreground">
                        Health Score: <span className={file.health === "100%" ? "text-emerald-500" : "text-amber-500"}>{file.health}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Health & Mapping Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Data Health Check</CardTitle>
            <CardDescription>Automated quality assessment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm">Duplicate IDs</span>
                </div>
                <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">Passed</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm">Date Formats</span>
                </div>
                <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">Passed</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <span className="text-sm">Missing Values (customer_city)</span>
                </div>
                <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">245 Rows</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Field Mapping</CardTitle>
            <CardDescription>Map CSV columns to system schema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm font-medium text-muted-foreground mb-2">
                <div>System Field</div>
                <div>CSV Column</div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-center">
                <div className="text-sm">customer_id <span className="text-destructive">*</span></div>
                <Select defaultValue="customer_id">
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="customer_id">customer_id</SelectItem>
                    <SelectItem value="id">id</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4 items-center">
                <div className="text-sm">order_purchase_timestamp <span className="text-destructive">*</span></div>
                <Select defaultValue="order_purchase_timestamp">
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="order_purchase_timestamp">order_purchase_timestamp</SelectItem>
                    <SelectItem value="date">date</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4 items-center">
                <div className="text-sm">order_status</div>
                <Select defaultValue="order_status">
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="order_status">order_status</SelectItem>
                    <SelectItem value="status">status</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full mt-2" size="sm">Save Mapping</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
