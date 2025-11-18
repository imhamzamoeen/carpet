import { Users, Clock, Leaf, ShieldCheck } from 'lucide-react';

export function TrustBar() {
  return (
    <section className="bg-white border-y border-gray-200 py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Trust Item 1 */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center">
              <Users className="w-7 h-7 text-primary-600" />
            </div>
            <div>
              <p className="font-bold text-2xl text-primary-600 font-grotesk">500+</p>
              <p className="text-sm text-text-secondary">Happy Customers</p>
            </div>
          </div>

          {/* Trust Item 2 */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 rounded-full bg-accent-yellow/10 flex items-center justify-center">
              <Clock className="w-7 h-7 text-accent-yellow" />
            </div>
            <div>
              <p className="font-bold text-2xl text-primary-600 font-grotesk">Same-Day</p>
              <p className="text-sm text-text-secondary">Service Available</p>
            </div>
          </div>

          {/* Trust Item 3 */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 rounded-full bg-accent-green/10 flex items-center justify-center">
              <Leaf className="w-7 h-7 text-accent-green" />
            </div>
            <div>
              <p className="font-bold text-2xl text-primary-600 font-grotesk">Eco-Friendly</p>
              <p className="text-sm text-text-secondary">Safe for Pets & Kids</p>
            </div>
          </div>

          {/* Trust Item 4 */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center">
              <ShieldCheck className="w-7 h-7 text-primary-600" />
            </div>
            <div>
              <p className="font-bold text-2xl text-primary-600 font-grotesk">100%</p>
              <p className="text-sm text-text-secondary">Satisfaction Guarantee</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
