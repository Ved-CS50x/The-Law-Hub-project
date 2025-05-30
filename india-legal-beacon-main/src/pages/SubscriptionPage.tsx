import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Shield, CreditCard, Smartphone, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Define types for our plans
interface Plan {
  name: string;
  price: string;
  period: string;
  total: string;
  popular: boolean;
  features: string[];
}

const SubscriptionPage = () => {
  const plans = [
    {
      name: 'Monthly',
      price: '₹69',
      period: 'per month',
      total: '₹69 billed monthly',
      popular: false,
      features: [
        'Ad-Free Browsing',
        'Unlimited access to Archives',
        'Free Downloadable Articles and Cases*',
        'Weekly Digest',
      ]
    },
    {
      name: '6 Months',
      price: '₹399',
      period: 'for 6 months',
      total: '₹399 + GST (₹66.5/month)',
      popular: false,
      features: [
        'Everything in Monthly',
        'Monthly Digest',
        'Access to premium legal Articles',
      ]
    },
    {
      name: 'Yearly',
      price: '₹750',
      period: 'for 1 year',
      total: '₹750 + GST (₹62.5/month)',
      popular: true,
      features: [
        'Everything in 6 Months',
        'Bi-weekly access to direct discussions with Experts',
        'Real-Time Alerts',
      ]
    },
    {
      name: '2 Years',
      price: '₹1,600',
      period: 'for 2 years',
      total: '₹1,600 + GST (₹66.67/month)',
      popular: false,
      features: [
        'Everything in Yearly',
        'Weekly access to direct discussions with Experts',
        'Cross-access to the material of all the NLUs',
      ]
    },
  ];

  const allFeatures = [
    'Ad-Free Browsing',
    'Unlimited access to Archives',
    'Free Downloadable Articles and Cases*',
    'Weekly/Monthly Digest',
    'Access to premium legal Articles',
    'Direct discussions with Experts',
    'Real-Time Alerts',
    'Cross-access to the material of all the NLUs'
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Main content */}
      <div>
      {/* Header with Logo and Back Button */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col items-center mr-8">
              <h1 className="text-3xl font-serif font-bold">
                <span className="text-gray-500">T</span>
                <span className="text-yellow-500">L</span>
                <span className="text-legal-black dark:text-legal-white">H</span>
              </h1>
              <div className="text-sm font-serif -mt-1">
                <span className="text-gray-500">The</span>{' '}
                <span className="text-yellow-500">Law</span>{' '}
                <span className="text-legal-black dark:text-legal-white">Hub</span>
              </div>
            </Link>
          </div>
          <Link to="/" className="inline-flex items-center text-legal-gold hover:text-legal-gold/80 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Become a part of The Law Hub!</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Unlock Full access to the best curated news articles and Legal insights. Choose a plan that suits You
          </p>
          <Button className="bg-legal-gold hover:bg-legal-gold/90 text-white px-8 py-6 text-lg">
            Subscribe Now
          </Button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg shadow-md overflow-hidden border ${
                  plan.popular 
                    ? 'border-legal-gold transform scale-105 z-10' 
                    : 'border-gray-200'
                } transition-all duration-300 hover:shadow-lg`}
              >
                {plan.popular && (
                  <div className="bg-legal-gold text-white text-sm font-medium py-1 text-center">
                    BEST VALUE
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500"> {plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">{plan.total}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-legal-gold mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-legal-gold hover:bg-legal-gold/90">
                    Subscribe Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            *Auto-renews automatically. Cancel anytime.
          </p>
        </div>
      </div>

      {/* Feature Comparison */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Compare Plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left pb-4">Features</th>
                  {plans.map((plan, i) => (
                    <th key={i} className="text-center pb-4">
                      {plan.name}
                      {plan.popular && (
                        <span className="block text-xs font-normal text-legal-gold">Most Popular</span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {allFeatures.map((feature, i) => (
                  <tr key={i}>
                    <td className="py-3">{feature}</td>
                    {plans.map((plan, j) => (
                      <td key={j} className="text-center">
                        {plan.features.some(f => f.includes(feature.split(' ')[0])) ? (
                          <Check className="w-5 h-5 text-legal-gold mx-auto" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Payment Info */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Shield className="w-12 h-12 text-legal-gold" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Secure Payment</h2>
            <p className="text-gray-600 mb-8">
              Your payment information is processed securely. We do not store credit card details.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center">
                <CreditCard className="w-8 h-8 mr-2 text-gray-700" />
                <span>Credit/Debit Cards</span>
              </div>
              <div className="flex items-center">
                <Smartphone className="w-8 h-8 mr-2 text-gray-700" />
                <span>UPI</span>
              </div>
              <div className="flex items-center">
                <img 
                  src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" 
                  alt="PayPal" 
                  className="h-8 mr-2"
                />
                <span>PayPal</span>
              </div>
              <div className="flex items-center">
                <Wallet className="w-8 h-8 mr-2 text-gray-700" />
                <span>Cash (On-Campus Only)</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Shield className="w-4 h-4 mr-2 text-green-500" />
              <span>SSL Secured Connection</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-serif font-bold">
                <span className="text-gray-500">T</span>
                <span className="text-yellow-500">L</span>
                <span className="text-white">H</span>
              </h2>
              <p className="text-sm">The Law Hub - A student initiative</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-legal-gold transition-colors">Terms</a>
              <a href="#" className="hover:text-legal-gold transition-colors">Privacy</a>
              <a href="#" className="hover:text-legal-gold transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} The Law Hub. All rights reserved.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
