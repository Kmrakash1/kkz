// Legal pages template module
const legalTemplate = (page) => {
  const content = {
    terms: `
      <div class="container py-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h1 class="section-title mb-0">Terms of Service</h1>
          <button class="btn-close" onclick="showSection('home')"></button>
        </div>
        <div class="legal-content">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using APPRIUM, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our service.</p>
          
          <h2>2. Service Description</h2>
          <p>APPRIUM provides access to modified versions of mobile applications. These modifications are intended for educational and evaluation purposes only.</p>
          
          <h2>3. User Responsibilities</h2>
          <p>Users are responsible for:</p>
          <ul>
            <li>Using the service in compliance with all applicable laws</li>
            <li>Maintaining the confidentiality of their account</li>
            <li>All activities that occur under their account</li>
          </ul>
          
          <h2>4. Intellectual Property</h2>
          <p>All content on APPRIUM, including but not limited to text, graphics, logos, and software, is the property of their respective owners and is protected by intellectual property laws.</p>
          
          <h2>5. Limitation of Liability</h2>
          <p>APPRIUM shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service.</p>
          
          <h2>6. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the service after such modifications constitutes acceptance of the updated terms.</p>
        </div>
      </div>
    `,
    privacy: `
      <div class="container py-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h1 class="section-title mb-0">Privacy Policy</h1>
          <button class="btn-close" onclick="showSection('home')"></button>
        </div>
        <div class="legal-content">
          <h2>1. Information Collection</h2>
          <p>We collect information that you provide directly to us, including but not limited to:</p>
          <ul>
            <li>Account registration information</li>
            <li>Usage data and analytics</li>
            <li>Communication preferences</li>
          </ul>
          
          <h2>2. Information Usage</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Improve user experience</li>
            <li>Send important updates and notifications</li>
          </ul>
          
          <h2>3. Data Protection</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or destruction.</p>
          
          <h2>4. Third-Party Services</h2>
          <p>Our service may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.</p>
          
          <h2>5. Cookie Policy</h2>
          <p>We use cookies to enhance your browsing experience and analyze usage patterns. You can control cookie settings through your browser preferences.</p>
        </div>
      </div>
    `,
    dmca: `
      <div class="container py-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h1 class="section-title mb-0">DMCA Policy</h1>
          <button class="btn-close" onclick="showSection('home')"></button>
        </div>
        <div class="legal-content">
          <h2>1. Copyright Compliance</h2>
          <p>APPRIUM respects intellectual property rights and expects users to do the same. We respond to notices of alleged copyright infringement in accordance with the Digital Millennium Copyright Act ("DMCA").</p>
          
          <h2>2. Reporting Copyright Violations</h2>
          <p>To file a copyright infringement notification, please provide:</p>
          <ul>
            <li>A physical or electronic signature of the copyright owner</li>
            <li>Identification of the copyrighted work claimed to be infringed</li>
            <li>Description of the infringing material and its location</li>
            <li>Your contact information</li>
            <li>A statement of good faith belief in the infringement</li>
            <li>A statement of accuracy under penalty of perjury</li>
          </ul>
          
          <h2>3. Counter Notification</h2>
          <p>If you believe your content was wrongly removed, you may file a counter notification containing:</p>
          <ul>
            <li>Your physical or electronic signature</li>
            <li>Identification of the removed material</li>
            <li>A statement under penalty of perjury of your good faith belief</li>
            <li>Your consent to local federal court jurisdiction</li>
          </ul>
        </div>
      </div>
    `,
    contact: `
      <div class="container py-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h1 class="section-title mb-0">Contact Us</h1>
          <button class="btn-close" onclick="showSection('home')"></button>
        </div>
        <div class="contact-content text-center">
          <div class="contact-icon mb-4">
            <i class="fas fa-envelope"></i>
          </div>
          <h2>Get in Touch</h2>
          <p class="lead mb-4">Have questions or concerns? We're here to help!</p>
          <div class="contact-email">
            <p>Email us at:</p>
            <a href="mailto:apprium@gmail.com" class="email-link">apprium@gmail.com</a>
          </div>
          <div class="social-links mt-5">
            <a href="https://t.me/apprium" class="social-link" target="_blank">
              <i class="fab fa-telegram"></i>
            </a>
            <a href="https://instagram.com/bhatakash07" class="social-link" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com/@ANONYMOUSWHAT" class="social-link" target="_blank">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    `
  };
  
  return content[page] || '<div class="container py-5"><h1>Page Not Found</h1></div>';
};

export default legalTemplate;