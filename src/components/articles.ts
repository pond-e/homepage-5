export type EmbedData = {
    id: string;
    title: string;
    embedCode: string;
    description?: string;
    category?: string;
  };
  
  // embeds.ts - 埋め込みデータストア
  export const embedsData: EmbedData[] = [
    {
      id: "article1",
      title: "ラズパイで3軸加速度センサー (AE-ADXL367) を使う方法",
      embedCode: '<div class="iframely-embed"><div class="iframely-responsive" style="padding-bottom: 52.5%; padding-top: 120px;"><a href="https://qiita.com/pond-e/items/35c39e1aa0f3440b0b20" data-iframely-url="//iframely.net/PQWAell"></a></div></div><script async src="//iframely.net/embed.js"></script>',
    },
    {
      id: "article2",
      title: "2024年8月から12月までの進捗",
      embedCode: '<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Froki-ars.hatenablog.com%2Fentry%2F2024%2F12%2F31%2F160051" title="2024年8月から12月までの進捗 - roki_ars(pond)のブログ" class="embed-card embed-blogcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 190px; max-width: 500px; margin: 10px 0px;"></iframe>',
    }
  ];