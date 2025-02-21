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
              <li>AI-OPTIMIZED TRAINING PLANS</li>
              <li>RECOVERY MONITORING</li>
              <li>RACE PREPARATION</li>
              <li>PEAK PERFORMANCE TIMING</li>
            </ul>
          </div>
          <div>
            <h3 className="md:text-xl text-sm font-light uppercase">RECOVERY</h3>
            <ul className="font-bold md:text-2xl text-xl md:my-10 space-y-1 leading-tight break-words whitespace-normal">
              <li>SLEEP OPTIMIZATION</li>
              <li>STRESS MANAGEMENT</li>
              <li>INJURY PREVENTION</li>
              <li>LONGEVITY PROTOCOLS</li>
            </ul>
          </div>
          <div>
            <h3 className="md:text-xl text-sm font-light uppercase">METABOLIC HEALTH</h3>
            <ul className="font-bold md:text-2xl text-xl md:my-10 space-y-1 leading-tight break-words whitespace-normal">
              <li>SUBSTRATE UTILIZATION</li>
              <li>ENERGY SYSTEM DEVELOPMENT</li>
              <li>METABOLIC FLEXIBILITY</li>
              <li>NUTRITION TIMING</li>
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
    title: "TESTING",
    content: (
      <div className="text-black flex flex-col md:flex-row gap-10 bg-[#9091FB] p-10 items-center md:items-stretch rounded-2xl w-full overflow-hidden">
        <div className="flex flex-col w-full md:w-2/3 space-y-8 min-w-0">
          <div>
            <h3 className="md:text-xl text-sm font-light uppercase">PERFORMANCE METRICS</h3>
            <ul className="font-bold md:text-2xl text-xl md:my-10 space-y-1 leading-tight break-words whitespace-normal">
              <li>VO2 MAX TESTING</li>
              <li>LACTATE ANALYSIS</li>
              <li>SMO2 ANALYSIS</li>
              <li>SWEAT ANALYSIS</li>
            </ul>
          </div>
          <div>
            <h3 className="md:text-xl text-sm font-light uppercase">BIOMARKERS</h3>
            <ul className="font-bold md:text-2xl text-xl md:my-10 space-y-1 leading-tight break-words whitespace-normal">
              <li>HARMONAL PROFILING</li>
              <li>INFLAMMATORY MARKERS</li>
              <li>NUTRIENT STATUS</li>
              <li>RECOVERY INDICATORS</li>
            </ul>
          </div>
          <div>
            <h3 className="md:text-xl text-sm font-light uppercase">RECOVERY</h3>
            <ul className="font-bold md:text-2xl text-xl md:my-10 space-y-1 leading-tight break-words whitespace-normal">
              <li>HEART RATE VARIABILITY</li>
              <li>SLEEP ANALYSIS</li>
              <li>STRESS RESPONSE</li>
              <li>RECOVERY CAPACITY</li>
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
    title: "OPTIMIZATION",
    content: (
      <div className="text-black flex flex-col md:flex-row gap-10 bg-[#62D598] p-10 items-center md:items-stretch rounded-2xl w-full overflow-hidden">
        <div className="flex flex-col w-full md:w-2/3 space-y-8 min-w-0">
          <div>
            <h3 className="md:text-xl text-sm font-light uppercase">CONCIERGE CARE</h3>
            <ul className="font-bold md:text-2xl text-xl md:my-10 space-y-1 leading-tight break-words whitespace-normal">
              <li>24/7 COACH ACCESS</li>
              <li>PROGRESS TRACKING</li>
              <li>PROTOCOL ADJUSTMENTS</li>
              <li>PRIORITY SUPPORT</li>
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

export { sections };
