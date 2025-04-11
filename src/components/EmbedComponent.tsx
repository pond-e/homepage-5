// EmbedComponent.tsx
import React from 'react';
import { EmbedData } from './articles';

interface EmbedComponentProps {
  embed: EmbedData;
}

// 注意: dangerouslySetInnerHTMLは信頼できるソースからの埋め込みコードのみに使用する
const EmbedComponent: React.FC<EmbedComponentProps> = ({ embed }) => {
  return (
    <div className="embed-container">
      <h3 className="text-lg font-semibold mb-2">{embed.title}</h3>
      {embed.description && <p className="text-gray-600 mb-2">{embed.description}</p>}
      <div className="embed-content" dangerouslySetInnerHTML={{ __html: embed.embedCode }} />
    </div>
  );
};

export default EmbedComponent;