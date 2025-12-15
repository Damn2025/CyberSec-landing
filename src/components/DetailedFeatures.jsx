import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  Monitor, 
  Settings,
  Zap,
  CheckCircle,
  Globe,
  Smartphone,
  Shield,
  BarChart3,
  Database,
  Code,
  Lock,
  Activity
} from 'lucide-react';

const DetailedFeatures = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: 'Scanning Capabilities',
      subtitle: 'Core Engines',
      icon: Search,
      color: 'red'
    },
    {
      id: 1,
      label: 'Reporting & Analytics',
      icon: FileText,
      color: 'red'
    },
    {
      id: 2,
      label: 'User Experience',
      subtitle: '& Interface',
      icon: Monitor,
      color: 'red'
    },
    {
      id: 3,
      label: 'Platform Architecture',
      subtitle: '& Performance',
      icon: Settings,
      color: 'red'
    },
    {
      id: 4,
      label:'Advanced features',
      subtitle: '',
      icon: Zap,
      color: 'red'
    }
  ];

  const features = {
    0: [
      {
        title: 'Web Application Security Scanning',
        description: 'Comprehensive scanning engine designed to identify vulnerabilities in web applications and websites across all modern frameworks and technologies.',
        items: [
          'Multiple scan types: Quick, Standard, and Comprehensive modes',
          'Real-time scanning with asynchronous processing',
          'Support for all web technologies (React, Angular, Vue, PHP, Python, etc.)',
          'Deep analysis of web application architecture',
          'Automated crawling and discovery of application endpoints'
        ]
      },
      {
        title: 'Mobile Application Security Scanning',
        description: 'Specialized scanning engine for mobile applications, supporting both Android and iOS platforms with deep binary analysis.',
        items: [
          'Android APK file scanning and analysis',
          'iOS IPA file scanning and analysis',
          'Deep analysis of mobile app binaries and code structure',
          'OWASP Mobile Top 10 vulnerability detection',
          'Code snippet extraction for vulnerability evidence'
        ]
      },
      {
        title: 'CWE Top 25 Vulnerability Detection',
        description: 'Industry-standard scanning engine that targets the 2024 CWE Top 25 Most Dangerous Software Weaknesses for prioritized security coverage.',
        items: [
          'Scans against the 2024 CWE Top 25 Most Dangerous Software Weaknesses',
          'Ranked vulnerability identification (1-25 priority ranking)',
          'Industry-standard CWE ID mapping for each finding',
          'Priority-based vulnerability scoring and categorization',
          'Comprehensive coverage of critical software weaknesses'
        ]
      },
    
      {
        title: 'Comprehensive Vulnerability Coverage',
        description: 'Extensive vulnerability detection covering OWASP Top 10, injection attacks, authentication flaws, and security misconfigurations.',
        items: [
          'Detects SQLi, XSS, CSRF, SSRF, XXE & more',
          'Identifies insecure configurations & access control issues',
          'Finds API security misconfigurations',
          'Covers authentication, authorization & session flaws',
          'Security header analysis (CSP, HSTS, SSL/TLS validation)'
        ]
      }
    ],
    1: [
      {
        title: 'Advanced Reporting System',
        description: 'Professional-grade reporting with multiple export formats, detailed vulnerability descriptions, and actionable remediation guidance.',
        items: [
          'PDF report generation for documentation and compliance',
          'JSON export for API integration and automation',
          'Evidence and proof-of-concept for each finding',
          'Remediation recommendations with code examples',
          'CVSS score assignment and CWE ID mapping'
        ]
      },
      {
        title: 'Real-time Dashboard & Analytics',
        description: 'Interactive dashboard providing live monitoring, statistics, and visual analytics for comprehensive security oversight.',
        items: [
          'Live scan monitoring with real-time status updates',
          'Total scans tracking and historical analytics',
          'Active scans monitoring with progress indicators',
          'Critical vulnerability alerts and notifications',
          'Severity-based vulnerability categorization (Critical, High, Medium, Low, Info)'
        ]
      },
      {
        title: 'Export & Integration Formats',
        description: 'Flexible export options supporting various formats for documentation, integration, and analysis workflows.',
        items: [
          'PDF reports for executive summaries and compliance documentation',
          'JSON format for API integration and automated workflows',
          'CSV format for spreadsheet analysis and data processing',
          'HTML format for web-based viewing and sharing',
          'Customizable report formats and templates'
        ]
      },
      {
        title: 'Vulnerability Analytics',
        description: 'Deep analytics and insights into vulnerability patterns, trends, and security posture metrics.',
        items: [
          'Vulnerability trend analysis over time',
          'Severity distribution charts and statistics',
          'CWE category breakdown and analysis',
          'Risk scoring and prioritization metrics',
          'Remediation progress tracking'
        ]
      }
    ],
    2: [
      {
        title: 'Modern, Intuitive Interface',
        description: 'Clean, user-friendly interface designed for both security professionals and non-technical users with a modern dark theme.',
        items: [
          'Clean, dark-themed dashboard with professional aesthetics',
          'Fully responsive design for all devices (desktop, tablet, mobile)',
          'Real-time status updates without page refresh',
          'Quick scan creation with minimal configuration',
          'Color-coded severity indicators for quick assessment'
        ]
      },
      {
        title: 'Scan Management & Organization',
        description: 'Comprehensive scan management tools for organizing, tracking, and managing security scans efficiently.',
        items: [
          'View all scan history with detailed metadata',
          'Filter by scan type (Web/Mobile) and status',
          'Detailed scan results view with full context',
          'Vulnerability sorting and filtering capabilities',
          'Scan status tracking (Pending, Running, Completed, Failed)'
        ]
      },
      {
        title: 'User-Friendly Features',
        description: 'Streamlined user experience designed to make security scanning accessible to users of all technical levels.',
        items: [
          'No technical expertise required for basic operations',
          'Simple URL input for web application scans',
          'Drag-and-drop file upload for mobile application scans',
          'Clear vulnerability explanations in plain language',
          'Interactive dashboard with tooltips and help text'
        ]
      },
      {
        title: 'Interactive Vulnerability Explorer',
        description: 'Advanced interface for exploring vulnerabilities with detailed information, evidence, and remediation guidance.',
        items: [
          'Expandable vulnerability cards with full details',
          'Evidence viewer with code snippets and examples',
          'Remediation guidance with step-by-step instructions',
          'Vulnerability comparison and grouping',
          'Search and filter capabilities within results'
        ]
      }
    ],
    3: [
      {
        title: 'Enterprise-Grade Architecture',
        description: 'Built on modern cloud infrastructure with global edge network deployment for maximum performance and reliability.',
        items: [
          'Built on Cloudflare Workers (global edge network)',
          'Fast, scalable infrastructure with auto-scaling capabilities',
          'Secure data storage with Cloudflare R2 object storage',
          'Type-safe TypeScript implementation for reliability',
          'RESTful API architecture for seamless integration'
        ]
      },
      {
        title: 'Security & Privacy',
        description: 'Enterprise-level security measures ensuring data protection, privacy, and secure handling of sensitive information.',
        items: [
          'Secure file upload handling with validation',
          'Encrypted data storage at rest and in transit',
          'No sensitive data exposure in logs or responses',
          'Secure API endpoints with authentication',
          'GDPR and compliance-ready data handling'
        ]
      },
      {
        title: 'Performance & Optimization',
        description: 'Optimized scanning algorithms and processing architecture for fast, efficient security assessments.',
        items: [
          'Fast and efficient scanning with optimized algorithms',
          'Asynchronous scan processing for non-blocking operations',
          'Parallel vulnerability detection for speed',
          'Quick scan completion times with progress tracking',
          'Resource-efficient processing for cost optimization'
        ]
      },
    
      {
        title: 'Database & Storage',
        description: 'Robust data persistence layer ensuring reliable storage and retrieval of scan history and results.',
        items: [
          'Reliable database storage for scan metadata',
          'Efficient querying and data retrieval',
          'Data backup and recovery capabilities',
          'Optimized storage for large scan results',
          'Data retention policies and management'
        ]
      }
    ],
    4: [
      {
        title: 'Dual Scanning Engine',
        description: 'Advanced dual-engine system that combines standard security scanning with CWE Top 25 scanning for maximum coverage and accuracy.',
        items: [
          'Standard security scanner for general vulnerabilities',
          'CWE Top 25 scanner for industry-standard weaknesses',
          'Parallel scanning for comprehensive coverage',
          'Automatic duplicate detection and merging',
          'Combined results presentation'
        ]
      },
      {
        title: 'Mobile-Specific Analysis',
        description: 'Specialized analysis engine for mobile applications with deep binary parsing, metadata extraction, and OWASP Mobile Top 10 categorization.',
        items: [
          'APK file parsing and analysis',
          'IPA file parsing and analysis',
          'Package name extraction and version detection',
          'File path identification for vulnerabilities',
          'OWASP Mobile Top 10 categorization'
        ]
      },
      {
        title: 'Evidence and Proof',
        description: 'Comprehensive evidence collection and documentation for each vulnerability, including detection methodology and proof-of-concept examples.',
        items: [
          'Detailed evidence for each vulnerability',
          'Detection methodology documentation',
          'Proof-of-concept examples',
          'File paths and code locations',
          'Request/response examples'
        ]
      },
      {
        title: 'Remediation Guidance',
        description: 'Actionable remediation recommendations with industry best practices, mitigation strategies, and framework-specific solutions for each vulnerability.',
        items: [
          'Actionable recommendations for each vulnerability',
          'Industry best practices',
          'Mitigation strategies',
          'Security implementation guidelines',
          'Framework-specific solutions'
        ]
      }
    ]
  };

  return (
    <section id="detailed-features" className="py-32 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-900 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-red-500 font-mono text-sm tracking-widest mb-2">COMPREHENSIVE CAPABILITIES</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 text-shadow-glow">Security Scanning</span> Platform</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our extensive feature set organized by category. Everything you need for comprehensive security testing.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-white/10 pb-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex flex-col items-center gap-1 px-6 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-300
                  ${activeTab === tab.id
                    ? 'text-red-500 border-b-2 border-red-500 bg-red-950/20'
                    : 'text-gray-400 hover:text-red-400 hover:bg-white/5'
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </div>
                {tab.subtitle && (
                  <span className="text-xs lowercase normal-case opacity-75">{tab.subtitle}</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {features[activeTab].map((featureGroup, index) => (
              <div
                key={index}
                className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-red-500/30 transition-all duration-300 rounded-lg relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 blur-[50px] group-hover:bg-red-600/20 transition-all"></div>
                
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-white mb-3 font-mono flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    {featureGroup.title}
                  </h4>
                  
                  {featureGroup.description && (
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                      {featureGroup.description}
                    </p>
                  )}
                  
                  <ul className="space-y-3">
                    {featureGroup.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedFeatures;


