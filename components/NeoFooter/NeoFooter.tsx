import Link from "next/link";

export default function NeoFooter() {
  return (
    <footer className="bg-black text-white border-t-[3px] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-neo-yellow border-[2px] border-white flex items-center justify-center font-black text-sm text-black">
                I
              </div>
              <span className="font-black text-xl">INVENTR</span>
            </div>
            <p className="text-sm font-medium opacity-60 max-w-md">
              A multi-user inventory management system built with speed, clarity,
              and efficiency.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-4 text-neo-yellow">
              Product
            </h4>
            <div className="space-y-2">
              <Link
                href="/features"
                className="block text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
              >
                Features
              </Link>
              <Link
                href="/inventory"
                className="block text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
              >
                Inventory
              </Link>
              <Link
                href="/login-operator"
                className="block text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
              >
                Login
              </Link>
              <Link
                href="/register-operator"
                className="block text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-4 text-neo-pink">
              Company
            </h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
              >
                About
              </Link>
              <Link
                href="/"
                className="block text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
              >
                Privacy
              </Link>
              <Link
                href="/"
                className="block text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t-[2px] border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium opacity-40">
            &copy; {new Date().getFullYear()} Inventr. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="w-8 h-8 border-[2px] border-white/40 flex items-center justify-center text-xs font-bold opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
              TW
            </span>
            <span className="w-8 h-8 border-[2px] border-white/40 flex items-center justify-center text-xs font-bold opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
              GH
            </span>
            <span className="w-8 h-8 border-[2px] border-white/40 flex items-center justify-center text-xs font-bold opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
              LI
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}