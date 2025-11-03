import React from 'react';

interface BlogDetailProps {
  blogId?: string;
  setCurrentPage: (page: string) => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blogId, setCurrentPage: _setCurrentPage }) => {
  // Mock blog data based on ID
  const getBlogData = (id: string) => {
    const blogs: { [key: string]: any } = {
      '1': {
        id: '1',
        title: 'The Future of Nano-Enhanced Oral Care',
        category: 'Innovation',
        image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=1200&h=600&fit=crop',
        date: 'January 15, 2024',
        author: 'Dr. Sarah Khan',
        content: `
          <p>In recent years, nanotechnology has emerged as a revolutionary force in oral healthcare, transforming how we approach treatment and prevention. This cutting-edge technology involves manipulating materials at the nanoscale—one billionth of a meter—to create products with enhanced therapeutic properties.</p>
          
          <h2>The Science Behind Nano-Enhanced Products</h2>
          <p>Nano-enhanced oral care products utilize particles that are significantly smaller than those in traditional formulations. This minute size allows for deeper penetration into oral tissues, improved bioavailability, and enhanced interactions at the cellular level. The result? Faster healing times, reduced inflammation, and superior therapeutic outcomes.</p>
          
          <p>Our partnership with NanoCure Tech Korea has positioned us at the forefront of this technological advancement. Their proprietary nano-bio fusion technology combines natural ingredients with engineered nanoparticles to create products that deliver more effective results while maintaining safety standards.</p>
          
          <h2>Benefits for Healthcare Providers</h2>
          <p>For dental professionals and clinics, nano-enhanced products offer several advantages:</p>
          <ul>
            <li><strong>Improved Patient Outcomes:</strong> Faster recovery times and reduced postoperative complications</li>
            <li><strong>Enhanced Patient Satisfaction:</strong> Less discomfort and shorter treatment periods</li>
            <li><strong>Better Adherence:</strong> Products that work more effectively encourage patient compliance</li>
            <li><strong>Competitive Edge:</strong> Offering the latest technology attracts discerning patients</li>
          </ul>
          
          <h2>Real-World Applications</h2>
          <p>In clinical settings, nano-enhanced products are being successfully used for:</p>
          <ul>
            <li>Periodontal therapy and gum disease treatment</li>
            <li>Post-surgical wound healing</li>
            <li>Management of oral infections</li>
            <li>Tooth sensitivity reduction</li>
            <li>Preventive care and maintenance</li>
          </ul>
          
          <h2>The Path Forward</h2>
          <p>As research continues to validate the efficacy of nanotechnology in oral healthcare, we anticipate broader adoption across the industry. At ORALIEVES Pakistan, we remain committed to bringing these innovative solutions to healthcare providers and patients throughout the region.</p>
          
          <p>Looking ahead, we expect to see continued evolution in nano-enhanced formulations, with even more sophisticated applications being developed. The future of oral healthcare is bright, and nanotechnology will undoubtedly play a central role in shaping it.</p>
        `
      },
      '2': {
        id: '2',
        title: 'Building Successful Distribution Networks',
        category: 'Industry',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=600&fit=crop',
        date: 'December 28, 2023',
        author: 'Ahmed Malik',
        content: `
          <p>Establishing a robust distribution network is one of the most critical challenges facing manufacturers entering new markets, particularly in the oral healthcare sector. Success requires strategic planning, understanding local dynamics, and building relationships with the right partners.</p>
          
          <h2>Understanding Market Dynamics</h2>
          <p>Before entering any market, manufacturers must conduct thorough research to understand the unique characteristics of the oral healthcare landscape. This includes:</p>
          <ul>
            <li>Regulatory requirements and compliance standards</li>
            <li>Market size and growth potential</li>
            <li>Competitive landscape and positioning</li>
            <li>Consumer preferences and buying patterns</li>
            <li>Distribution channel preferences</li>
          </ul>
          
          <h2>Choosing the Right Partners</h2>
          <p>At ORALIEVES Pakistan, we specialize in connecting manufacturers with distribution partners that align with their goals and values. When selecting distributors, consider:</p>
          
          <p><strong>Market Knowledge:</strong> Partners with deep understanding of local healthcare systems and patient needs</p>
          <p><strong>Network Strength:</strong> Established relationships with clinics, pharmacies, and retail outlets</p>
          <p><strong>Compliance Focus:</strong> Track record of maintaining regulatory compliance and quality standards</p>
          <p><strong>Growth Mindset:</strong> Commitment to expanding market presence and investing in development</p>
          
          <h2>Exclusive vs. Non-Exclusive Distribution</h2>
          <p>One key decision in distribution strategy is whether to establish exclusive or non-exclusive relationships:</p>
          
          <p><strong>Exclusive Distribution:</strong> Works well when you need focused market penetration and strong partnership commitment. It allows for deeper relationship building and coordinated marketing efforts.</p>
          
          <p><strong>Non-Exclusive Distribution:</strong> Better suited for wider market coverage and competitive dynamics. Multiple partners can accelerate growth but requires more coordination.</p>
          
          <h2>Building for Long-Term Success</h2>
          <p>Successful distribution networks are built on:</p>
          <ul>
            <li>Clear communication and shared goals</li>
            <li>Ongoing training and support</li>
            <li>Consistent product availability</li>
            <li>Responsive problem-solving</li>
            <li>Mutual trust and respect</li>
          </ul>
          
          <p>At ORALIEVES Pakistan, we bring years of experience in navigating these complexities. Our approach combines strategic insights with hands-on support to help manufacturers establish networks that drive sustainable growth.</p>
        `
      },
      '3': {
        id: '3',
        title: 'Preventive Oral Care Best Practices',
        category: 'Wellness',
        image: 'https://images.unsplash.com/photo-1628202926206-c63a34b1618f?w=1200&h=600&fit=crop',
        date: 'November 10, 2023',
        author: 'Dr. Fatima Ali',
        content: `
          <p>Preventive oral care represents the cornerstone of maintaining optimal dental health. Modern preventive strategies combine evidence-based practices with innovative products to help patients avoid costly and painful treatments while maintaining their natural teeth for life.</p>
          
          <h2>The Foundation of Prevention</h2>
          <p>Effective preventive oral care rests on three fundamental pillars:</p>
          
          <p><strong>1. Proper Daily Hygiene:</strong> Regular brushing and flossing remain the foundation of dental health. However, the products used matter significantly. Modern formulations with targeted active ingredients can provide enhanced protection against cavities, gum disease, and sensitivity.</p>
          
          <p><strong>2. Professional Care:</strong> Routine dental visits allow for early detection of issues when treatment is simpler and more cost-effective. These visits also provide opportunities for professional cleanings and fluoride treatments.</p>
          
          <p><strong>3. Protective Measures:</strong> This includes strategies like fluoride application, sealants for children, and lifestyle modifications to reduce risk factors.</p>
          
          <h2>Emerging Preventive Technologies</h2>
          <p>Advancements in oral care products are making prevention more effective than ever:</p>
          <ul>
            <li><strong>Nano-enhanced formulations</strong> that deliver active ingredients more effectively</li>
            <li><strong>Antimicrobial coatings</strong> that reduce bacterial adhesion</li>
            <li><strong>pH-balanced products</strong> that support the oral microbiome</li>
            <li><strong>Natural antioxidant compounds</strong> that reduce inflammation</li>
          </ul>
          
          <h2>Patient Education and Adherence</h2>
          <p>Even the best preventive products are only effective if used consistently. Patient education plays a crucial role:</p>
          
          <p>Healthcare providers should take time to explain not just what products to use, but why they're important and how to use them properly. Demonstrating techniques and providing written materials can significantly improve adherence.</p>
          
          <p>It's also important to address patient concerns and misconceptions. Many patients are unaware of the connection between oral health and overall systemic health, including links to cardiovascular disease and diabetes management.</p>
          
          <h2>Special Populations</h2>
          <p>Different patient groups require tailored preventive approaches:</p>
          
          <p><strong>Children:</strong> Early prevention sets the foundation for lifelong dental health. This includes fluoride treatments, sealants, and establishing good habits.</p>
          
          <p><strong>Adults:</strong> Focus on maintaining existing dental work and preventing new issues from developing.</p>
          
          <p><strong>Seniors:</strong> Special attention to dry mouth management, accessibility issues, and protection of existing dental work.</p>
          
          <p><strong>High-Risk Patients:</strong> Those with diabetes, compromised immune systems, or other medical conditions need more intensive preventive protocols.</p>
          
          <h2>The Role of Products</h2>
          <p>Quality preventive products are essential tools in the healthcare provider's arsenal. At ORALIEVES Pakistan, we curate products that meet the highest standards for efficacy and safety, ensuring that professionals have access to the tools they need to help patients achieve optimal outcomes.</p>
          
          <p>By combining patient education, regular professional care, and effective products, we can significantly improve oral health outcomes across all patient populations. Prevention truly is the best medicine for dental health.</p>
        `
      }
    };
    return blogs[id] || blogs['1'];
  };

  const blog = getBlogData(blogId || '1');

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-oralieves-light via-white to-oralieves-accent">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="text-center mb-6">
            <span className="inline-block text-xs font-semibold text-oralieves-primary uppercase tracking-wide bg-oralieves-light px-4 py-2 rounded-full">
              {blog.category}
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl text-gray-800 mb-6 text-center" style={{ fontWeight: '400' }}>
            {blog.title}
          </h1>
          
          {/* Meta Information */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{blog.date}</span>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl mb-6">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <main className="py-4 px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>
        </div>
      </main>

      {/* Related Blogs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-gray-800 mb-12 text-center" style={{ fontWeight: '400' }}>
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Related blog cards would go here */}
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-oralieves-primary text-white p-4 rounded-full shadow-lg hover:bg-oralieves-dark transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;

