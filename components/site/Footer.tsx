import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="container-edge py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-sun">
              #DrinkUmbrella
            </p>
            <h3 className="mt-6 font-display text-4xl md:text-5xl text-balance">
              A taste of the premium African spirit.
            </h3>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone/50">
              Visit
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/story" className="hover:text-sun">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-sun">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-sun">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/cocktails" className="hover:text-sun">
                  Cocktails
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-sun">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sun">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone/50">
              Reach
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>+44 7487 566216</li>
              <li>hello@drinkumbrella.co.uk</li>
              <li>Lagos &middot; London</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-bone/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/50">
            &copy; {new Date().getFullYear()} The Umbrella Palm Company. All
            rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/50">
            Please enjoy responsibly &middot; 18+
          </p>
        </div>
      </div>
    </footer>
  );
}
