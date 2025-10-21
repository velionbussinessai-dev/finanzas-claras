import React, { useEffect } from 'react';
export default function AdSlot({ client = 'ca-pub-XXXXXXXXXXXXXXXX', slot = '1234567890', className='' }) {
  useEffect(() => {
    if (window && window.adsbygoogle) {
      try { window.adsbygoogle.push({}); } catch (e) {}
    }
  }, []);
  return (
    <div className={`w-full my-6 ${className}`}>
      <ins className="adsbygoogle block" style={{display:'block'}} data-ad-client={client} data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true"></ins>
    </div>
  );
}
