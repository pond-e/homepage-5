import React, { useEffect } from 'react';

// Extend the Window interface to include the 'twttr' property
declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: () => void;
      };
    };
  }
}
import EmbedComponent from '../components/EmbedComponent'
import { embedsData } from '../components/articles';

const EmbedsPage: React.FC = () => {
  // 埋め込みスクリプトの読み込みを保証するための副作用
  useEffect(() => {
    // TwitterやIframelyなどのスクリプトを再実行
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    }
    
    // Iframelyのスクリプトを再読み込み
    const iframelyScript = document.querySelector('script[src*="iframely"]');
    if (iframelyScript) {
      const newScript = document.createElement('script');
      newScript.src = iframelyScript.getAttribute('src') || '//iframely.net/embed.js';
      newScript.async = true;
      document.body.appendChild(newScript);
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">記事一覧</h1>
      <div className="space-y-8">
        {embedsData.map(embed => (
          <EmbedComponent key={embed.id} embed={embed} />
        ))}
      </div>
    </div>
  );
};

export default EmbedsPage;