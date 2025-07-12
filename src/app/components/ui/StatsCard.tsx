interface StatsCardProps {
    title: string;
    value: string;
    trend: 'up' | 'down' | 'neutral';
    change?: string;
  }
  
  export default function StatsCard({ title, value, trend, change }: StatsCardProps) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="mt-2 flex items-baseline justify-between">
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          {change && (
            <div className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium ${
              trend === 'up' 
                ? 'bg-green-100 text-green-800' 
                : trend === 'down' 
                  ? 'bg-red-100 text-red-800' 
                  : 'bg-gray-100 text-gray-800'
            }`}>
              {trend === 'up' ? (
                <svg className="-ml-1 mr-0.5 flex-shrink-0 self-center h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              ) : trend === 'down' ? (
                <svg className="-ml-1 mr-0.5 flex-shrink-0 self-center h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : null}
              <span>{change}</span>
            </div>
          )}
        </div>
      </div>
    );
  }