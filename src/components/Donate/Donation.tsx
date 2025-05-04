"use client"

import type React from "react"

import { useState } from "react"
import { CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function DonationForm() {
  const [activeTab, setActiveTab] = useState<string>("usa")
  const [donationAmount, setDonationAmount] = useState<string>("25")
  const [customAmount, setCustomAmount] = useState<string>("")

  // Predefined amounts for each currency
  const predefinedAmountsUSD = ["10", "25", "50", "100"]
  const predefinedAmountsNRS = ["1000", "2500", "5000", "10000"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would process the payment
    alert("Thank you for your donation! This is a demo, so no actual payment was processed.")
  }

  // Get current predefined amounts based on active tab
  const currentPredefinedAmounts = activeTab === "usa" ? predefinedAmountsUSD : predefinedAmountsNRS

  // Get current currency symbol and padding
  const currencyInfo =
    activeTab === "usa" ? { symbol: "$", paddingLeft: "pl-8" } : { symbol: "NRS", paddingLeft: "pl-12" }

  return (
    <Card className="w-full flex justify-center items-center">
      <CardContent className="pt-6">
        <Tabs
          defaultValue="usa"
          className="w-full"
          value={activeTab}
          onValueChange={(value) => {
            setActiveTab(value)
            // Reset donation amount when switching tabs
            setDonationAmount(value === "usa" ? "25" : "2500")
            setCustomAmount("")
          }}
        >
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="usa" className="text-base">
              USA
            </TabsTrigger>
            <TabsTrigger value="nepal" className="text-base">
              Nepal
            </TabsTrigger>
          </TabsList>

          {/* Common donation amount section for both tabs */}
          <div className="space-y-4 mb-6">
            <Label>Donation Amount</Label>
            <RadioGroup value={donationAmount} onValueChange={setDonationAmount} className="grid grid-cols-4 gap-2">
              {currentPredefinedAmounts.map((amount) => (
                <div key={amount} className="flex items-center">
                  <RadioGroupItem value={amount} id={`amount-${amount}`} className="peer sr-only" />
                  <Label
                    htmlFor={`amount-${amount}`}
                    className="flex h-10 w-full cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white p-2 text-sm font-medium peer-data-[state=checked]:border-emerald-500 peer-data-[state=checked]:bg-emerald-50 hover:bg-gray-50"
                  >
                    <span className="mr-0.5">{currencyInfo.symbol}</span>
                    {amount}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="mt-2">
              <Label htmlFor="custom-amount">Custom Amount</Label>
              <div className="relative mt-1">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  {currencyInfo.symbol}
                </span>
                <Input
                  id="custom-amount"
                  type="number"
                  min="1"
                  step="1"
                  placeholder={`Enter ${activeTab === "usa" ? "USD" : "NRS"} amount`}
                  className={currencyInfo.paddingLeft}
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    if (e.target.value) {
                      setDonationAmount("custom")
                    } else {
                      setDonationAmount(activeTab === "usa" ? "25" : "2500")
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* USA Payment Options */}
          <TabsContent value="usa" className="space-y-6 mt-0">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
            </div>

            <div className="space-y-4">
              <Label>Payment Method</Label>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-20 flex flex-col items-center justify-center gap-2 border-2 hover:border-emerald-500 hover:bg-emerald-50"
                  onClick={() => window.open("https://www.paypal.com", "_blank")}
                >
                  <div className="w-16 h-8 relative">
                    <Image src="/placeholder.svg?height=32&width=64" alt="PayPal" fill className="object-contain" />
                  </div>
                  <span className="text-sm">PayPal</span>
                </Button>

                <Button
                  variant="outline"
                  className="h-20 flex flex-col items-center justify-center gap-2 border-2 hover:border-emerald-500 hover:bg-emerald-50"
                  onClick={() => window.open("https://cash.app", "_blank")}
                >
                  <div className="w-16 h-8 relative">
                    <Image src="/placeholder.svg?height=32&width=64" alt="Cash App" fill className="object-contain" />
                  </div>
                  <span className="text-sm">Cash App</span>
                </Button>
              </div>

              <div className="pt-4">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={handleSubmit}>
                  Donate
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Nepal Payment Options */}
          <TabsContent value="nepal" className="space-y-6 mt-0">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="np-first-name">First Name</Label>
                  <Input id="np-first-name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="np-last-name">Last Name</Label>
                  <Input id="np-last-name" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="np-email">Email</Label>
                <Input id="np-email" type="email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="np-phone">Phone Number</Label>
                <Input id="np-phone" type="tel" required />
              </div>
            </div>

            <div className="space-y-4">
              <Label>Payment Method</Label>
              <Button
                variant="outline"
                className="w-full h-20 flex items-center justify-center gap-4 border-2 hover:border-emerald-500 hover:bg-emerald-50"
                onClick={() => window.open("https://esewa.com.np", "_blank")}
              >
                <div className="w-16 h-8 relative">
                  <Image src="/placeholder.svg?height=32&width=64" alt="eSewa" fill className="object-contain" />
                </div>
                <span>Pay with eSewa</span>
              </Button>

              <div className="pt-4">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={handleSubmit}>
                  Donate
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center text-xs text-gray-500">
          <div className="flex items-center justify-center gap-1 mb-1">
            <CreditCard className="h-3 w-3" />
            <span>Secure donation</span>
          </div>
          <p>Your financial information is encrypted and never stored.</p>
        </div>
      </CardContent>
    </Card>
  )
}
