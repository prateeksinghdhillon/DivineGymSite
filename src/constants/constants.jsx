const sections = [
  {
    id: 1,
    title: "PERFORMANCE",
    content: (
      <div className="text-black flex flex-col md:flex-row gap-10 bg-[#F9FF96] p-10 items-center md:items-stretch rounded-2xl w-full overflow-hidden">
        <div className="flex flex-col w-full md:w-2/3 space-y-8 min-w-0">
          <div>
            <h3 className="md:text-xl text-sm font-light uppercase">ELITE TRAINING</h3>
            <ul className="font-bold md:text-2xl text-xl md:my-10 space-y-1 leading-tight break-words whitespace-normal">
              <li>• Personalized Workout Plans Tailored to Your Goals</li>
              <li>• Strength & Conditioning Programs for All Levels</li>
              <li>• Focused Guidance from Experienced Coaches</li>
            </ul>
          </div>
          <div>
            <h3 className="md:text-xl text-sm font-light uppercase">Recovery & Wellness</h3>
            <ul className="font-bold md:text-2xl text-xl md:my-10 space-y-1 leading-tight break-words whitespace-normal">
              <li>• Smart Training Adjustments to Prevent Burnout</li>
              <li>• Techniques to Improve Mobility & Reduce Injury Risk</li>
              <li>• Support for Sustainable Progress</li>
            </ul>
          </div>
          <div>
            <h3 className="md:text-xl text-sm font-light uppercase">Nutrition & Metabolism</h3>
            <ul className="font-bold md:text-2xl text-xl md:my-10 space-y-1 leading-tight break-words whitespace-normal">
              <li>• Practical Nutrition Tips for Better Performance</li>
              <li>• Energy Optimization for Strength & Endurance</li>
              <li>• Simple Strategies to Fuel Your Workouts</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-end">
          <img
            src="/assets/manrunner.jpg"
            alt="Performance"
            className="w-full h-auto md:h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "TESTING & PROGRESS",
    content: (
      <div className="text-black flex flex-col md:flex-row gap-10 bg-[#9091FB] p-10 items-center md:items-stretch rounded-2xl w-full overflow-hidden">
        <div className="flex flex-col w-full md:w-2/3 space-y-8 min-w-0">
          <div>
            <h3 className="md:text-xl text-sm font-light uppercase">PERFORMANCE TRACKING</h3>
            <ul className="font-bold md:text-2xl text-xl md:my-10 space-y-1 leading-tight break-words whitespace-normal">
              <li>• Strength & Endurance Assessments</li>
              <li>• Personalized Fitness Benchmarks</li>
              <li>• Progress Monitoring to Keep You on Track</li>
            </ul>
          </div>
          <div>
            <h3 className="md:text-xl text-sm font-light uppercase">BODY & HEALTH INSIGHTS</h3>
            <ul className="font-bold md:text-2xl text-xl md:my-10 space-y-1 leading-tight break-words whitespace-normal">
              <li>• Body Composition Analysis Muscle vs. Fat</li>
              <li>• Nutritional Guidance Based on Your Goals</li>
              <li>• Simple Metrics to Track Recovery & Energy Levels</li>
            </ul>
          </div>
          <div>
            <h3 className="md:text-xl text-sm font-light uppercase">RECOVERY & WELLNESS</h3>
            <ul className="font-bold md:text-2xl text-xl md:my-10 space-y-1 leading-tight break-words whitespace-normal">
              <li>• Sleep & Stress Awareness for Better Performance</li>
              <li>• Heart Rate & Recovery Monitoring</li>
              <li>• Smart Adjustments to Keep You Training Safely</li>
            </ul>
          </div>

        </div>
        <div className="w-full md:w-1/3 flex justify-end">
          <img
            src="/assets/mancyclist.webp"
            alt="Testing"
            className="w-full h-auto md:h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "COACHING & OPTIMIZATION",
    content: (
      <div className="text-black flex flex-col md:flex-row gap-10 bg-[#62D598] p-10 items-center md:items-stretch rounded-2xl w-full overflow-hidden">
        <div className="flex flex-col w-full md:w-2/3 space-y-8 min-w-0">
          <div>
            <h3 className="md:text-xl text-sm font-light uppercase">GUIDANCE TAILORED TO YOU</h3>
            <ul className="font-bold md:text-2xl text-xl md:my-10 space-y-1 leading-tight break-words whitespace-normal">
              <li>• Direct Access to Expert Coaches During Training Hours</li>
              <li>• Regular Progress Check-ins & Adjustments</li>
              <li>• Personalized Training & Nutrition Tweaks</li>
            </ul>
          </div>
          <div>
            <h3 className="md:text-xl text-sm font-light uppercase">YOUR GOAL, OUR PRIORITY</h3>
            <ul className="font-bold md:text-2xl text-xl md:my-10 space-y-1 leading-tight break-words whitespace-normal">
              <li>• Custom Workout Refinements Based on Performance</li>
              <li>• Priority Assistance for Any Training Questions</li>
              <li>• Ongoing Support to Keep You Motivated & On Track</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-end">
          <img
            src="/assets/manback.jpg"
            alt="Performance"
            className="w-full h-auto md:h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    ),
  },
];

const slides = [
  {
    id: 1,
    title: "Comprehensive Assessment",
    heading: "UNDERSTAND YOUR FITNESS LEVEL WITH EXPERT GUIDANCE",
    image: "/assets/womanrunner.jpg",
    bgColor: "bg-[#F4FB8C]",
  },
  {
    id: 2,
    title: "Progress Tracking",
    heading: "TRACKING YOUR FITNESS JOURNEY WITH OUR EXPERT INSIGHTS",
    image: "/assets/laptop.jpg",
    bgColor: "bg-[#9091FB]",
  },
  {
    id: 3,
    title: "Personalized Plans",
    heading: "TAILORED WORKOUTS TO MATCH YOUR FITNESS GOALS",
    image: "/assets/girlrider.jpg",
    bgColor: "bg-[#62D598]",
  },
  {
    id: 4,
    title: "Ongoing Guidance",
    heading: "CONSISTENT COACH SUPPORT TO KEEP YOU ON TRACK",
    image: "/assets/manmirror.jpg",
    bgColor: "bg-[#ECECEC]",
  },
];

const membershipPlans = [
  {
    title: "Monthly",
    price: "₹1000",
    features: [
      "Custom Training Plans",
      "Bi-weekly Coaching Sessions"
    ]
  },
  {
    title: "Quarterly",
    price: "₹3000",
    features: [
      "Quarterly Fitness Assessment",
      "Personalized Workout Plan",
      "Weekly Progress Check-In",
    ]
  },
  {
    title: "Half Yearly",
    price: "₹5000",
    features: [
      "Monthly Fitness Testing",
      "Fully Customized Training Program",
      "Priority Access to Trainers & Support"
    ]
  }
];

export { sections, slides, membershipPlans };
