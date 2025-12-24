import React, { useEffect } from 'react';

const LinkedInFollowButton = ({ companyId }) => {
  useEffect(() => {
    // Create and append the LinkedIn script
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/in.js';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      // Once the script is loaded, the LinkedIn widgets will render automatically
      // if the necessary HTML elements are present in the DOM.
      if (window.IN && typeof window.IN.init === 'function') {
        window.IN.init();
      }
    };
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, [companyId]); // Re-run effect if companyId changes

  return (
    <div>
      {/* LinkedIn will find this div and transform it into the Follow button */}
      <script type="IN/FollowCompany" data-id={companyId} data-counter="bottom"></script>
    </div>
  );
};

export default LinkedInFollowButton;
