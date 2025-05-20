
export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  authorTitle: string;
  authorAvatar?: string;
  date: string;
  image?: string;
  imageCaption?: string;
  category: string;
  categoryId: number;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Supreme Court upholds constitutional validity of Citizenship Amendment Act",
    excerpt: "The Court ruled that the Citizenship Amendment Act does not violate the Constitution and rejected claims of discrimination.",
    content: [
      "In a landmark judgment delivered today, the Supreme Court upheld the constitutional validity of the Citizenship Amendment Act (CAA), rejecting claims that it discriminates against Muslims.",
      "The five-judge Constitution bench, led by the Chief Justice, delivered a majority opinion stating that the CAA does not violate Article 14 of the Constitution, which guarantees equality before law.",
      "The Court ruled that the Parliament has the power to make laws regarding citizenship and that the classification made in the CAA has a reasonable nexus with the objective of the legislation, which is to provide citizenship to persecuted minorities from specific neighboring countries.",
      "The judgment comes after extensive hearings where petitioners argued that the law was discriminatory as it excluded Muslims from its purview, while the government defended it saying it addressed the specific issue of religious persecution in the three neighboring countries.",
      "The Court also clarified that the CAA does not affect the citizenship status of any Indian citizen, including Muslims, and is limited to providing an expedited path to citizenship for certain persecuted religious minorities from Pakistan, Bangladesh, and Afghanistan.",
      "Legal experts view this as a significant victory for the government, which had faced widespread protests when the law was first enacted in December 2019."
    ],
    author: "Adv. Rajesh Kumar",
    authorTitle: "Legal Correspondent",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
    date: "May 8, 2025",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    imageCaption: "The Supreme Court of India in New Delhi",
    category: "Supreme Court",
    categoryId: 1
  },
  {
    id: 2,
    title: "Delhi High Court issues new guidelines on virtual hearings",
    excerpt: "The High Court has released comprehensive guidelines to standardize virtual court proceedings across all courts in Delhi.",
    content: [
      "The Delhi High Court today issued a set of comprehensive guidelines for virtual court proceedings, aiming to standardize the process across all courts in the national capital.",
      "The guidelines, which will come into effect from next month, address various aspects of virtual hearings including technical requirements, etiquette for advocates and litigants, recording protocols, and handling of evidence in the digital format.",
      "Chief Justice of the Delhi High Court emphasized that these guidelines are designed to enhance access to justice while maintaining the decorum of court proceedings in the digital environment.",
      "Key provisions include mandatory video-on for advocates when addressing the court, protocols for screen sharing of documents, and guidelines for recording proceedings with appropriate permissions.",
      "The High Court also announced plans to set up dedicated technical support teams to assist litigants and advocates who may face difficulties in accessing or navigating the virtual court platforms.",
      "The Delhi Bar Association has welcomed the move, stating that clear protocols will help streamline proceedings and reduce technical disruptions that have been common in virtual hearings."
    ],
    author: "Priya Sharma",
    authorTitle: "Court Reporter",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
    date: "May 7, 2025",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Virtual court proceedings in progress at Delhi High Court",
    category: "High Courts",
    categoryId: 2
  },
  {
    id: 3,
    title: "Legal experts react to landmark judgment on cryptocurrency regulation",
    excerpt: "Leading legal scholars and practitioners offer insights on the Supreme Court's recent cryptocurrency framework ruling.",
    content: [
      "Legal experts across the country have been weighing in on the Supreme Court's landmark judgment establishing a regulatory framework for cryptocurrencies in India.",
      "The judgment, delivered last week, struck a balance between allowing innovation in the financial technology sector while ensuring adequate safeguards against money laundering and terrorist financing concerns.",
      "Professor Amrita Singh of National Law University Delhi called the judgment 'a progressive step that recognizes the inevitability of digital currencies while establishing necessary guardrails'.",
      "The Court held that while the RBI has the power to regulate virtual currencies, a complete prohibition would be disproportionate and unconstitutional. Instead, it directed the government to establish a balanced regulatory framework in consultation with stakeholders.",
      "Senior Advocate Vikram Mehta pointed out that the judgment creates a 'regulatory sandbox' approach that allows for controlled innovation while monitoring risks to the financial system.",
      "Industry bodies representing cryptocurrency exchanges have welcomed the judgment, stating that regulatory clarity will help the sector grow responsibly and attract institutional investments."
    ],
    author: "Prof. Vikram Mehta",
    authorTitle: "Constitutional Law Expert",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
    date: "May 6, 2025",
    image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Cryptocurrency trading has been a contentious legal issue in India",
    category: "Legal Opinions",
    categoryId: 3
  },
  {
    id: 4,
    title: "Chief Justice inaugurates new e-filing system for all courts",
    excerpt: "The new unified e-filing system aims to streamline case management and improve access to justice across the country.",
    content: [
      "The Chief Justice of India today inaugurated a new unified e-filing system that will be implemented across all courts in the country, marking a significant step toward digital transformation of the Indian judiciary.",
      "The platform, developed by the e-Committee of the Supreme Court in collaboration with the National Informatics Centre, aims to standardize the filing process across different courts and eliminate jurisdictional barriers in accessing justice.",
      "Speaking at the inauguration ceremony, the Chief Justice emphasized that the new system will reduce paperwork, improve efficiency, and make the justice delivery system more accessible to common citizens.",
      "Key features of the new e-filing system include a user-friendly interface, automated scrutiny of documents, integrated payment gateway for court fees, and real-time tracking of case status.",
      "The system also includes advanced search functionality that will allow legal researchers and practitioners to access precedents and judgments more efficiently.",
      "The Bar Council of India has welcomed the initiative, stating that it will significantly reduce the time and resources spent on physical filing and follow-up of cases."
    ],
    author: "Vivek Sharma",
    authorTitle: "Technology Correspondent",
    date: "May 5, 2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    imageCaption: "The new e-filing system being demonstrated at the Supreme Court",
    category: "Supreme Court",
    categoryId: 1
  },
  {
    id: 5,
    title: "Parliamentary committee proposes changes to judicial appointment process",
    excerpt: "The report suggests significant amendments to the collegium system for more transparency and diversity in the judiciary.",
    content: [
      "A parliamentary standing committee has submitted a comprehensive report proposing significant changes to the judicial appointment process, particularly focusing on the collegium system currently in practice.",
      "The report, which was tabled in both houses of Parliament yesterday, recommends the establishment of a Judicial Appointments Commission that would include representatives from the judiciary, executive, and eminent members from civil society.",
      "The committee has emphasized the need for greater transparency in the selection process and recommended the publication of detailed criteria for judicial appointments and the reasons for selecting or rejecting candidates.",
      "Another key recommendation is the introduction of diversity quotas to ensure adequate representation of women, minorities, and socially disadvantaged groups in the higher judiciary.",
      "The report notes that despite several decades of independence, the higher judiciary continues to lack diversity, with women judges comprising less than 15% of the total strength of High Courts and the Supreme Court.",
      "Legal experts have offered mixed reactions to the proposals, with some welcoming the push for transparency and diversity, while others express concerns about potential executive interference in judicial autonomy."
    ],
    author: "Rajan Patel",
    authorTitle: "Parliamentary Affairs Analyst",
    date: "May 4, 2025",
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Parliament House where the committee report was tabled",
    category: "Legislation",
    categoryId: 4
  },
  {
    id: 6,
    title: "Bar Council revises regulatory framework for law firms",
    excerpt: "The new framework introduces modern governance standards and allows limited foreign collaboration.",
    content: [
      "The Bar Council of India (BCI) has announced a revised regulatory framework for law firms operating in the country, introducing significant changes to governance structures and operational practices.",
      "The new framework, which will come into effect after a six-month transition period, allows law firms to adopt Limited Liability Partnership (LLP) structures and introduces a tiered regulatory approach based on firm size and practice areas.",
      "One of the most significant changes is the provision for limited collaboration with foreign law firms in specific practice areas such as international arbitration, foreign investment, and cross-border transactions.",
      "The framework also mandates annual compliance audits for larger firms and introduces a client protection fund to safeguard client interests in cases of professional misconduct.",
      "BCI Chairperson noted that the changes aim to modernize the legal profession while preserving its core values and ensuring that Indian law firms can compete globally.",
      "The Society of Indian Law Firms has welcomed the changes, stating that the revised framework strikes a balance between necessary regulation and the flexibility required for growth and innovation."
    ],
    author: "Anita Desai",
    authorTitle: "Legal Business Analyst",
    date: "May 3, 2025",
    image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Bar Council of India headquarters in New Delhi",
    category: "Legal Profession",
    categoryId: 5
  }
];
