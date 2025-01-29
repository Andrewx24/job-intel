// components/us-map.tsx
export function USMap() {
    return (
      <div className="w-full h-full">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 959 593"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Background with rounded corners */}
          <path 
            className="fill-gray-50 dark:fill-gray-800 transition-colors duration-200"
            d="M0 40C0 17.909 17.909 0 40 0H919C941.091 0 959 17.909 959 40V553C959 575.091 941.091 593 919 593H40C17.909 593 0 575.091 0 553V40Z"
          />
          
          {/* Continental United States */}
          <path 
            className="fill-blue-100 dark:fill-blue-900 stroke-blue-500 dark:stroke-blue-400 transition-colors duration-200"
            strokeWidth="2"
            d="M215.8 208.4l-10.2-3.1-7.1-1.3-6.7-0.3-5.9-2.7-4.2-3.4-3.9-2.3-1.2 1.5-1.8 0.5-0.5 2.7-2.4-0.3-0.8 1.9-0.3 2.9-0.6 1.9 0.3 2.4-0.6 1.8-2.4 0.3-1.8-0.5-1.9-2.6-0.2-2.7 0.8-2.6 0.2-3.7-1.6-4-2.1-3.7-2.9-3.7-0.3-3.7 0.5-3.1 2.1-2.4 0.8-2.9-1.8-0.5-1.1 1.3-0.3 2.7-1.6 1.6-2.9 1.1-1.9-0.3-1.6-1.6-1.3-1.8-2.9-1.3-1.3-2.1-0.5-2.4 1.3-1.8 1.1-2.3 0.5-2.4-0.8-2.1-1.6-1.3-2.4-0.3-1.9 1.3-1.1 2.1-2.4 0.3-2.1-1.6-1.3-2.6 0.8-1.9 2.1-0.5 2.4 0.3 2.3-1.3 1.6-1.9 0.5-1.1-1.3-0.8-2.4-1.6-1.9-2.6-0.8-2.6-0.2-2.7 0.5-2.4 1.6-1.3 2.1 0.3 1.9 1.6 1.3 1.9 2.6 0.8 2.6-0.5 2.1-1.6 0.8-2.1-0.5-1.9-1.3-1.6-0.8-1.9 0.3-2.4 1.3-2.1 1.9-1.6 2.6-0.8 2.6 0.3 2.4 1.6 1.3 2.1 0.5 2.4-0.8 1.9-2.1 0.5-2.4-0.3-2.3 1.3-1.6 1.9-0.5 2.4 0.8 2.1 1.6 1.3 2.4 0.3 2.3-1.3 1.6-1.9 0.5-2.4-0.8-2.1-1.6-1.3-2.4-0.3-2.3 1.3-1.6 1.9-0.5"
          />
          
          {/* Alaska */}
          <path 
            className="fill-blue-100 dark:fill-blue-900 stroke-blue-500 dark:stroke-blue-400 transition-colors duration-200"
            strokeWidth="2"
            d="M102 448l-4.9-2.3-3.7-3.4-0.5-3.1 0.8-3.7 2.9-3.7 3.7-2.9 3.7-1.6 3.7 0.3 2.9 2.1 1.6 3.4 0.3 3.7-1.1 3.4-2.4 2.9-3.4 2.1-3.6 1.8z"
          />
          
          {/* Hawaii */}
          <path 
            className="fill-blue-100 dark:fill-blue-900 stroke-blue-500 dark:stroke-blue-400 transition-colors duration-200"
            strokeWidth="2"
            d="M233 505l-2.9-1.8-2.1-2.9-0.3-3.7 1.6-3.4 2.9-2.1 3.7-0.3 3.4 1.6 2.1 2.9 0.3 3.7-1.6 3.4-2.9 2.1-4.2 0.5z"
          />
  
          {/* Labels */}
          <g className="fill-gray-700 dark:fill-gray-300 text-sm transition-colors duration-200">
            <text x="479.5" y="296.5" textAnchor="middle">USA</text>
            <text x="102" y="468" textAnchor="middle" className="text-xs">AK</text>
            <text x="233" y="525" textAnchor="middle" className="text-xs">HI</text>
          </g>
  
          {/* Legend */}
          <g transform="translate(20, 20)" className="text-sm">
            <rect 
              x="0" 
              y="0" 
              width="120" 
              height="60" 
              className="fill-white dark:fill-gray-700 stroke-gray-200 dark:stroke-gray-600 transition-colors duration-200"
              rx="4"
            />
            <text 
              x="60" 
              y="35" 
              textAnchor="middle" 
              className="fill-gray-900 dark:fill-gray-100 transition-colors duration-200"
            >
              United States
            </text>
          </g>
        </svg>
      </div>
    );
  }