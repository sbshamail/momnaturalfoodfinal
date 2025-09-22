import { Screen } from "@/@core/layout";
import Image from "next/image";
import SocialIcons from "../icon/SocialIcons";
const Footer = () => {
  return (
    <footer className="bg-foreground/90 text-primary-foreground py-16">
      <Screen>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 justify-between mb-12">
            <div className="space-y-4">
              <Image
                src="/logo.png"
                alt="Mom's Natural Food"
                width={150}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Committed to providing the finest organic, natural foods while
                supporting sustainable farming practices.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Organic Vegetables
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Fresh Fruits
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Heritage Grains
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Artisan Products
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Our Farms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Sustainability
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <SocialIcons />
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-sm text-primary-foreground/60">
              © 2025 Mom's Natural Food. All rights reserved. Committed to
              organic excellence.
            </p>
          </div>
        </div>
      </Screen>
    </footer>
  );
};

export default Footer;
