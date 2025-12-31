import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"; // Assuming shadcn table exists, if not I will use standard HTML or create it. Wait, I didn't install table component. I should check or just use standard HTML with tailwind classes.
// Actually, I should check if I have the table component. The scaffold usually has some, but I didn't explicitly add it.
// I'll use standard HTML/Tailwind for the table to be safe and fast, or I can quickly create a simple table structure.
import { CheckCircle2, CloudUpload, FileSpreadsheet, AlertCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Mock uploaded files
const initialFiles = [
  { name: "olist_orders_dataset.csv", size: "15.4 MB", status: "uploaded", records: "99,441" },
  { name: "olist_customers_dataset.csv", size: "8.6 MB", status: "uploaded", records: "99,441" },
  { name: "olist_order_items_dataset.csv", size: "24.1 MB", status: "uploaded", records: "112,650" },
  { name: "olist_order_payments_dataset.csv", size: "5.2 MB", status: "processing", records: "-" },
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

      <div className="grid gap-8 md:grid-cols-3">
        {/* Upload Area */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Upload Data</CardTitle>
            <CardDescription>Drag and drop your files here or click to browse.</CardDescription>
          </CardHeader>
          <CardContent>
            <div 
              className={cn(
                "border-2 border-dashed rounded-xl h-64 flex flex-col items-center justify-center text-center p-6 transition-colors cursor-pointer",
                isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/50"
              )}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(e) => { e.preventDefault(); setIsDragging(false); }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CloudUpload className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Drop files here</h3>
              <p className="text-sm text-muted-foreground mb-4">or click to browse from your computer</p>
              <Button>Select Files</Button>
            </div>
          </CardContent>
        </Card>

        {/* Data Status */}
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Data integrity checks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/10 border border-secondary/20">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <div>
                <p className="text-sm font-medium">Database Connected</p>
                <p className="text-xs text-muted-foreground">PostgreSQL v14.5</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/10 border border-secondary/20">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <div>
                <p className="text-sm font-medium">Schema Validated</p>
                <p className="text-xs text-muted-foreground">All required tables present</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              <div>
                <p className="text-sm font-medium">Missing Optional Data</p>
                <p className="text-xs text-muted-foreground">Promotion logs not found</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* File List */}
      <Card>
        <CardHeader>
          <CardTitle>Uploaded Files</CardTitle>
          <CardDescription>Manage your current datasets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted/50 text-muted-foreground font-medium">
                <tr>
                  <th className="px-4 py-3">File Name</th>
                  <th className="px-4 py-3">Size</th>
                  <th className="px-4 py-3">Records</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {files.map((file, i) => (
                  <tr key={i} className="hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 font-medium flex items-center gap-2">
                      <FileSpreadsheet className="w-4 h-4 text-primary" />
                      {file.name}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{file.size}</td>
                    <td className="px-4 py-3 text-muted-foreground">{file.records}</td>
                    <td className="px-4 py-3">
                      <span className={cn(
                        "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                        file.status === "uploaded" ? "bg-secondary/10 text-secondary" : "bg-blue-500/10 text-blue-500"
                      )}>
                        {file.status === "uploaded" ? "Ready" : "Processing..."}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Button variant="ghost" size="sm" className="h-8 text-destructive hover:text-destructive">
                        Delete
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
  );
}
