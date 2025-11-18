import { Calendar, ListChecks, Sparkles, ThumbsUp } from 'lucide-react';

const processSteps = [
  {
    title: 'Book',
    description: 'Get an instant quote online or call us. Choose your preferred date and time.',
    icon: Calendar,
  },
  {
    title: 'Prepare',
    description: 'We\'ll send you preparation tips. Move small items if possible. We handle the rest.',
    icon: ListChecks,
  },
  {
    title: 'Clean',
    description: 'Our certified technicians use professional hot water extraction for deep cleaning.',
    icon: Sparkles,
  },
  {
    title: 'Enjoy',
    description: 'Admire your refreshed carpets! Drying takes 4-6 hours. 100% satisfaction guaranteed.',
    icon: ThumbsUp,
  },
];

export function Process() {
  return (
    <section className="py-20 bg-gradient-to-b from-background-section to-white">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary font-grotesk mb-4">
            How It Works
          </h2>
          <p className="text-lg text-text-secondary">
            Our simple 4-step process ensures exceptional results every time
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop: Horizontal timeline */}
          <div className="hidden lg:block">
            <div className="flex justify-between items-start relative">
              {/* Connecting line */}
              <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-200 -z-10" />

              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex flex-col items-center flex-1 relative">
                    {/* Step number circle */}
                    <div className="w-24 h-24 rounded-full bg-primary-600 flex items-center justify-center shadow-card mb-6 relative z-10">
                      <span className="text-3xl font-bold text-white font-grotesk">{index + 1}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-white shadow-soft flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary-600" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-text-primary font-grotesk mb-2 text-center">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed text-center max-w-[200px]">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Vertical timeline */}
          <div className="lg:hidden space-y-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex gap-4">
                  {/* Left: Step number */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center shadow-card">
                      <span className="text-2xl font-bold text-white font-grotesk">{index + 1}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 flex-grow mt-4" />
                    )}
                  </div>

                  {/* Right: Content */}
                  <div className="flex-grow pb-8">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-soft flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary font-grotesk mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
