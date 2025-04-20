
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, MapPinIcon, UploadIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

type TransactionFormData = {
  amount: number;
  type: "credit" | "debit";
  category: string;
  description: string;
  date: Date;
  location?: string;
  receipt?: FileList;
};

export const TransactionForm = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<TransactionFormData>({
    defaultValues: {
      type: "debit",
      date: new Date()
    }
  });

  const categories = [
    "Food & Dining",
    "Shopping",
    "Housing",
    "Transportation",
    "Entertainment",
    "Healthcare",
    "Income",
    "Other"
  ];

  const onSubmit = (data: TransactionFormData) => {
    console.log("Transaction data submitted:", data);
    // For now we'll just navigate back to the dashboard
    // In a real implementation we would handle saving the transaction
    navigate("/transactions");
  };

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-finance-primary">Add Transaction</CardTitle>
        <CardDescription className="text-center">
          Record a new transaction to keep track of your spending
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="amount" className="text-sm font-medium">
              Amount
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
              <Input
                id="amount"
                className="pl-6"
                placeholder="0.00"
                type="number"
                step="0.01"
                {...register("amount", {
                  required: "Amount is required",
                  min: { value: 0.01, message: "Amount must be greater than 0" }
                })}
              />
            </div>
            {errors.amount && <p className="text-xs text-red-500">{errors.amount.message}</p>}
          </div>

          <div className="flex flex-col space-y-1.5">
            <label className="text-sm font-medium">Transaction Type</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  value="debit"
                  {...register("type")}
                  className="w-4 h-4 text-finance-primary"
                />
                <span>Expense</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  value="credit"
                  {...register("type")}
                  className="w-4 h-4 text-finance-success"
                />
                <span>Income</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col space-y-1.5">
            <label htmlFor="category" className="text-sm font-medium">
              Category
            </label>
            <Select
              onValueChange={(value) => setValue("category", value)}
              defaultValue=""
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.category && <p className="text-xs text-red-500">{errors.category.message}</p>}
          </div>

          <div className="flex flex-col space-y-1.5">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <Input
              id="description"
              placeholder="What was this transaction for?"
              {...register("description", { required: "Description is required" })}
            />
            {errors.description && <p className="text-xs text-red-500">{errors.description.message}</p>}
          </div>

          <div className="flex flex-col space-y-1.5">
            <label htmlFor="date" className="text-sm font-medium">
              Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => {
                    setDate(newDate);
                    setValue("date", newDate as Date);
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col space-y-1.5">
            <label htmlFor="location" className="text-sm font-medium flex items-center">
              <MapPinIcon className="h-4 w-4 mr-1" />
              Location (Optional)
            </label>
            <Input
              id="location"
              placeholder="Where did this transaction occur?"
              {...register("location")}
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <label htmlFor="receipt" className="text-sm font-medium flex items-center">
              <UploadIcon className="h-4 w-4 mr-1" />
              Upload Receipt (Optional)
            </label>
            <div className="border border-dashed border-gray-300 rounded-lg p-4">
              {selectedFile ? (
                <div className="relative">
                  <img
                    src={selectedFile}
                    alt="Receipt preview"
                    className="max-h-32 mx-auto"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedFile(null)}
                    className="mt-2"
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-4">
                  <UploadIcon className="h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-2">Drag and drop or click to upload</p>
                  <input
                    type="file"
                    id="receipt"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("receipt")?.click()}
                  >
                    Browse Files
                  </Button>
                </div>
              )}
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full finance-gradient hover:opacity-90 transition-opacity"
          >
            Save Transaction
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TransactionForm;
