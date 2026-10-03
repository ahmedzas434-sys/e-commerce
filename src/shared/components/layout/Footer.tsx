import lightLogo from "../../../assets/images/freshcart-logo.svg";
import miniLogo from "../../../assets/images/mini-logo.png";
import Link from "next/link";
import Image from "next/image";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="border-t border-gray-200 bg-white pt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Link href={`/`} className="mb-6">
                <Image src={lightLogo} alt="FreshCart Logo" />
              </Link>

              <p className="mb-4 text-gray-600">
                FreshCart is a versatile e-commerce platform offering a wide
                range of products, from clothing to electronics. It provides a
                user-friendly experience for seamless shopping across diverse
                categories.
              </p>
              <div className="flex space-x-4">
                <span className="hover:text-primary-600 cursor-pointer text-gray-500">
                  <IconBrandFacebook stroke={2} />
                </span>
                <span className="hover:text-primary-600 cursor-pointer text-gray-500">
                  <IconBrandTwitter stroke={2} />
                </span>
                <span className="hover:text-primary-600 cursor-pointer text-gray-500">
                  <IconBrandInstagram stroke={2} />
                </span>
                <span className="hover:text-primary-600 cursor-pointer text-gray-500">
                  <IconBrandPinterest stroke={2} />
                </span>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Categories</h3>
              <ul className="space-y-3">
                <li>
                  <span className="hover:text-primary-600 cursor-pointer text-gray-600">
                    Men&apos;s Fashion
                  </span>
                </li>
                <li>
                  <span className="hover:text-primary-600 cursor-pointer text-gray-600">
                    Women&apos;s Fashion
                  </span>
                </li>
                <li>
                  <span className="hover:text-primary-600 cursor-pointer text-gray-600">
                    Baby &amp; Toys
                  </span>
                </li>
                <li>
                  <span className="hover:text-primary-600 cursor-pointer text-gray-600">
                    Beauty &amp; Health
                  </span>
                </li>
                <li>
                  <span className="hover:text-primary-600 cursor-pointer text-gray-600">
                    Electronics
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <span className="hover:text-primary-600 cursor-pointer text-gray-600">
                    About Us
                  </span>
                </li>
                <li>
                  <span className="hover:text-primary-600 cursor-pointer text-gray-600">
                    Contact Us
                  </span>
                </li>
                <li>
                  <span className="hover:text-primary-600 cursor-pointer text-gray-600">
                    Privacy Policy
                  </span>
                </li>
                <li>
                  <span className="hover:text-primary-600 cursor-pointer text-gray-600">
                    Terms of Service
                  </span>
                </li>
                <li>
                  <span className="hover:text-primary-600 cursor-pointer text-gray-600">
                    Shipping Policy
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Customer Service</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/account"
                    className="hover:text-primary-600 cursor-pointer text-gray-600"
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  <Link
                    href="/orders"
                    className="hover:text-primary-600 cursor-pointer text-gray-600"
                  >
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wishlist"
                    className="hover:text-primary-600 cursor-pointer text-gray-600"
                  >
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link
                    href="/returns"
                    className="hover:text-primary-600 cursor-pointer text-gray-600"
                  >
                    Returns &amp; Refunds
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="hover:text-primary-600 cursor-pointer text-gray-600"
                  >
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-200 py-6">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <p className="mb-4 text-gray-600 md:mb-0">
                © {new Date().getFullYear()} FreshCart. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <Image
                  src={miniLogo}
                  alt="FreshCart Mini Logo"
                  className="size-6"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
