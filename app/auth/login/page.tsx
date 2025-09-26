"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  const [loading, setLoading] = useState(false)

  return (
    <>
      <Navbar />
      <main className="mx-auto grid max-w-md px-4 py-10">
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Welcome back</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-stretch gap-3">
            <Button disabled={loading} className="bg-primary text-primary-foreground">
              Log in
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              New here?{" "}
              <Link href="/auth/signup" className="underline">
                Create an account
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
    </>
  )
}
