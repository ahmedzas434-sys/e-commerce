import {
  IconShieldHalfFilled,
  IconStarFilled,
  IconTruckFilled,
} from "@tabler/icons-react";
import reviewAuthorImg from "../../../../assets/images/review-author.png";
import Image from "next/image";

export default function SignupHero() {
  return (
    <div>
      <h1 className="text-4xl font-bold">
        Welcome to <span className="text-primary-600">FreshCart</span>
      </h1>
      <p className="mt-2 mb-4 text-xl">
        Join thousands of happy customers who enjoy fresh groceries delivered
        right to their doorstep.
      </p>
      <ul className="my-8 space-y-6 *:flex *:items-start *:gap-4">
        <li>
          <div className="icon bg-primary-200 text-primary-600 flex size-12 items-center justify-center rounded-full text-lg">
            <IconStarFilled />
          </div>
          <div className="content">
            <h2 className="text-lg font-semibold">Premium Quality</h2>
            <p className="text-gray-600">
              Premium quality products sourced from trusted suppliers.
            </p>
          </div>
        </li>

        <li>
          <div className="icon bg-primary-200 text-primary-600 flex size-12 items-center justify-center rounded-full text-lg">
            <IconTruckFilled />
          </div>
          <div className="content">
            <h2 className="text-lg font-semibold">Fast Delivery</h2>
            <p className="text-gray-600">
              Same-day delivery available in most areas
            </p>
          </div>
        </li>

        <li>
          <div className="icon bg-primary-200 text-primary-600 flex size-12 items-center justify-center rounded-full text-lg">
            <IconShieldHalfFilled />
          </div>
          <div className="content">
            <h2 className="text-lg font-semibold">Secure Shopping</h2>
            <p className="text-gray-600">
              Your data and payments are completely secure
            </p>
          </div>
        </li>
      </ul>

      <div className="review rounded-md bg-white p-4 shadow-sm">
        <div className="author mb-4 flex items-center gap-4">
          <Image
            src={reviewAuthorImg}
            alt=""
            className="size-12 rounded-full"
          />
          <div>
            <h3>Sarah Johnson</h3>
            <div className="rating flex *:text-yellow-300">
              <IconStarFilled size={19} />
              <IconStarFilled size={19} />
              <IconStarFilled size={19} />
              <IconStarFilled size={19} />
              <IconStarFilled size={19} />
            </div>
          </div>
        </div>
        <blockquote>
          <p className="text-gray-600 italic">
            &quot;FreshCart has transformed my shopping experience. The quality
            of the products is outstanding, and the delivery is always on time.
            Highly recommend!&quot;
          </p>
        </blockquote>
      </div>
    </div>
  );
}
