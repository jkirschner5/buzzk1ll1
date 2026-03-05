import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Calendar, Users, ShoppingCart } from "lucide-react";

export default function Buzzk1llSite() {
  return (
    <div
      className="min-h-screen text-white p-6"
      style={{
        backgroundImage: "url('/buzzkill-bee.jpg')",
        backgroundRepeat: "repeat",
        backgroundSize: "250px",
        backgroundColor: "rgba(0,0,0,0.75)",
        backgroundBlendMode: "multiply"
      }}
    >
      {/* HERO */}
      <header className="text-center mb-16">
        <h1 className="text-7xl font-extrabold tracking-widest mb-4">BUZZK1LL</h1>
        <p className="text-gray-300 text-lg">We are a band! We are Grunge and Nu-Metal!</p>
        <div className="mt-6 flex justify-center gap-4">
          <Button>Listen Now</Button>
          <Button variant="outline">See Shows</Button>
        </div>
      </header>

      {/* FEATURE CARDS */}
      <section className="grid md:grid-cols-4 gap-6 mb-16">
        <Card className="bg-zinc-900 border-none">
          <CardContent className="p-6 text-center">
            <Music className="mx-auto mb-3" />
            <h2 className="text-xl font-semibold">Music</h2>
            <p className="text-gray-400 mt-2">Stream our latest releases.</p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-none">
          <CardContent className="p-6 text-center">
            <Calendar className="mx-auto mb-3" />
            <h2 className="text-xl font-semibold">Tour</h2>
            <p className="text-gray-400 mt-2">Catch Buzzk1ll live.</p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-none">
          <CardContent className="p-6 text-center">
            <Users className="mx-auto mb-3" />
            <h2 className="text-xl font-semibold">Band</h2>
            <p className="text-gray-400 mt-2">Meet the members.</p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-none">
          <CardContent className="p-6 text-center">
            <ShoppingCart className="mx-auto mb-3" />
            <h2 className="text-xl font-semibold">Merch</h2>
            <p className="text-gray-400 mt-2">Grab shirts & gear.</p>
          </CardContent>
        </Card>
      </section>

      

      {/* TOUR DATES */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Shows</h2>

        <div className="space-y-4">
          <div className="bg-zinc-900 p-4 rounded-xl flex justify-between">
            <span>July 12 — Omaha, NE</span>
            <Button size="sm">Tickets</Button>
          </div>

          <div className="bg-zinc-900 p-4 rounded-xl flex justify-between">
            <span>Aug 2 — Lincoln, NE</span>
            <Button size="sm">Tickets</Button>
          </div>

          <div className="bg-zinc-900 p-4 rounded-xl flex justify-between">
            <span>Sept 18 — Kansas City, MO</span>
            <Button size="sm">Tickets</Button>
          </div>
        </div>
      </section>

      {/* MERCH */}
      <section className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Official Merch</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-zinc-900 border-none">
            <CardContent className="p-6">
              <div className="h-40 bg-black/40 rounded mb-4"></div>
              <h3 className="font-semibold">Buzzk1ll T‑Shirt</h3>
              <p className="text-gray-400">$25</p>
              <Button className="mt-3">Buy</Button>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-none">
            <CardContent className="p-6">
              <div className="h-40 bg-black/40 rounded mb-4"></div>
              <h3 className="font-semibold">Buzz Bee Hoodie</h3>
              <p className="text-gray-400">$45</p>
              <Button className="mt-3">Buy</Button>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-none">
            <CardContent className="p-6">
              <div className="h-40 bg-black/40 rounded mb-4"></div>
              <h3 className="font-semibold">Buzzk1ll Sticker Pack</h3>
              <p className="text-gray-400">$10</p>
              <Button className="mt-3">Buy</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* MAILING LIST */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Join the Mailing List</h2>
        <div className="flex justify-center gap-2">
          <input className="p-2 rounded text-black" placeholder="Email address" />
          <Button>Subscribe</Button>
        </div>
      </section>

      <footer className="text-center text-gray-500 text-sm space-y-2">
        <div>
          Contact: <a className="underline" href="mailto:buzzkillband5@gmail.com">buzzkillband5@gmail.com</a>
        </div>
        <div>© {new Date().getFullYear()} Buzzk1ll</div>
      </footer>
    </div>
  );
}
