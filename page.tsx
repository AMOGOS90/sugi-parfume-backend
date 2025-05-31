import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingBag, Star, Sparkles, Zap, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <Sparkles className="h-6 w-6 text-rose-600 mr-2" />
          <span className="font-bold text-xl tracking-wider bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
            SUGI PARFUME
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-rose-600 transition-colors" href="#">
            Shop
          </Link>
          <Link className="text-sm font-medium hover:text-rose-600 transition-colors" href="#">
            AI Recommendations
          </Link>
          <Link className="text-sm font-medium hover:text-rose-600 transition-colors" href="#">
            Custom Builder
          </Link>
          <Link className="text-sm font-medium hover:text-rose-600 transition-colors" href="#">
            Subscription
          </Link>
          <Button variant="outline" size="sm" className="border-rose-200 text-rose-600 hover:bg-rose-50">
            Login
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-100/50 to-purple-100/50" />
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-200">
                    <Zap className="w-3 h-3 mr-1" />
                    AI-Powered Fragrance Discovery
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    SUGI
                  </h1>
                  <p className="text-xl text-gray-600 md:text-2xl max-w-[600px]">
                    A serene journey through Japanese cedar forests, enhanced by AI recommendations and custom fragrance
                    creation
                  </p>
                </div>

                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 text-white shadow-lg"
                  >
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Explore Collection
                  </Button>
                  <Button variant="outline" size="lg" className="border-rose-200 text-rose-600 hover:bg-rose-50">
                    Get AI Recommendations
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-gray-600">4.9/5 from 2,847 reviews</div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Users className="h-4 w-4" />
                    50K+ happy customers
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-purple-400 rounded-3xl blur-3xl opacity-20 scale-110" />
                  <div className="relative h-[500px] w-[350px] overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-2xl border border-white/20">
                    <Image
                      alt="Sugi Parfume bottle with AI-powered recommendations"
                      className="object-cover"
                      fill
                      src="/placeholder.svg?height=500&width=350"
                      priority
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <Sparkles className="h-5 w-5 text-rose-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-purple-100 text-purple-700">Enterprise Features</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powered by Advanced AI</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                Experience the future of fragrance discovery with our AI-powered platform, custom creation tools, and
                subscription services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-rose-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-6 w-6 text-rose-600" />
                  </div>
                  <h3 className="font-semibold mb-2">AI Recommendations</h3>
                  <p className="text-sm text-gray-600">
                    Machine learning algorithms analyze your preferences to suggest perfect fragrances
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Custom Builder</h3>
                  <p className="text-sm text-gray-600">
                    Create your unique signature scent with our guided fragrance builder
                  </p>
                </CardContent>
              </Card>

              <Card className="border-indigo-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Smart Subscription</h3>
                  <p className="text-sm text-gray-600">
                    Monthly curated boxes with AI-selected fragrances based on your evolving taste
                  </p>
                </CardContent>
              </Card>

              <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Analytics Dashboard</h3>
                  <p className="text-sm text-gray-600">
                    Real-time insights and business intelligence for enterprise customers
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fragrance Notes Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-rose-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-rose-100 text-rose-700">The Essence</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Crafted with Precision</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                Sugi Parfume captures the essence of Japanese cedar forests, blending woody notes with hints of citrus
                and spice
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm border-rose-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    01
                  </div>
                  <h3 className="text-xl font-bold mb-3">Top Notes</h3>
                  <p className="text-gray-600 mb-4">Bergamot, Yuzu, Pink Pepper</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                      Citrus
                    </Badge>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                      Spicy
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-emerald-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    02
                  </div>
                  <h3 className="text-xl font-bold mb-3">Heart Notes</h3>
                  <p className="text-gray-600 mb-4">Japanese Cedar (Sugi), Hinoki, Pine</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                      Woody
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Fresh
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-amber-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    03
                  </div>
                  <h3 className="text-xl font-bold mb-3">Base Notes</h3>
                  <p className="text-gray-600 mb-4">Sandalwood, Vetiver, Amber</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                      Warm
                    </Badge>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                      Earthy
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center text-white">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Discover Your Perfect Scent?</h2>
              <p className="max-w-[600px] text-xl opacity-90">
                Join thousands of fragrance enthusiasts who trust our AI-powered recommendations
              </p>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Get AI Recommendations
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Start Custom Builder
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">© 2025 Sugi Parfume Enterprise. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-700" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-700" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-700" href="#">
            Enterprise Solutions
          </Link>
        </nav>
      </footer>
    </div>
  )
}
