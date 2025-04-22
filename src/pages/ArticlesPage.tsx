import { Search } from "lucide-react"

import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination"
import { ArticleCard } from "./../components/article-card"

export default function ArticlesPage() {
  // 記事データのモック
  const articles = [
    {
      id: 1,
      title: "ラズパイで3軸加速度センサー (AE-ADXL367) を使う方法",
      excerpt: "ラズパイで3軸加速度センサー (AE-ADXL367) を使う方法 · 目次 · 販売リンク、データシート · 開発環境 · ラズパイへの接続方法 · I2Cの有効化 · コードを ...",
      category: "組み込み",
      date: "2025年3月15日",
      readTime: "5分",
      image: "https://iframely.net/PQWAell/thumbnail?maxwidth=960",
      link: "https://qiita.com/pond-e/items/35c39e1aa0f3440b0b20",
    },
    {
      id: 2,
      title: "2024年8月から12月までの進捗",
      excerpt:
        "8月 CanSat NSEとARLISSに向けてCanSatの開発をバリバリしてた。前もどこかの記事で書いたけど、つくばでCanSatの開発をすると思ってなかったからまた出来て楽しかっ…",
      category: "日記",
      date: "2024年12月31日",
      readTime: "5分",
      image: "./images/hatena-blog.png",
      link: "https://roki-ars.hatenablog.com/entry/2024/12/31/160051?_gl=1*3n43iq*_gcl_au*MzYwOTU3MjEuMTc0Mjg4NTE3Ng"
    },
    {
      id: 3,
      title: "加速度センサー ADXL345を3200 Hzで動かしてみた",
      excerpt:
        "私はCanSatという一種の自律制御ロボットの開発を行っているのですが、ロケットからの分離衝撃、地面への着地衝撃を測定する必要がありました。一般に着地した際には非常に短い時間の間に速度、加速度が変化…",
      category: "組み込み",
      date: "2024年12月25日",
      readTime: "4分",
      image: "https://iframely.net/boMGA4G/thumbnail?maxwidth=640",
      link: "https://qiita.com/pond-e/items/8b3fcdd93377b375f768"
    },
    {
      id: 4,
      title: "古いエアコンをスマートに、ペットに最適な環境を提供するリモートリモコン型デバイス「Temペット」",
      excerpt:
        "はじめに 昨今、自動温度調節機能やインターネット越しに操作できる機能を持ったエアコンが販売されていますが、それを導入するためにはエアコンごと買い替える必要があり...",
      category: "組み込み",
      date: "2024年10月25日",
      readTime: "10分",
      image: "https://pbs.twimg.com/card_img/1912499402239012865/uMLoaeFf?format=jpg&name=small",
      link: "https://elchika.com/article/f071bcac-4171-43c5-ac84-83035b03fcfb/"
    },
    {
      id: 5,
      title: "明石高専から筑波大学 情報科学類に編入して春学期を終えた感想",
      excerpt:
        "先人に倣って、自分も書いてみようと思います。 題名にわざわざ明石高専からと書いたのは、高専によって課題の量や成績の厳しさに差があるらしく、一口に編入と言っても...",
      category: "学校",
      date: "2024年8月10日",
      readTime: "10分",
      image: "https://assets.st-note.com/production/uploads/images/150255661/rectangle_large_type_2_ef466ff8f1f6d4904f92deedbc5c9a16.png?width=1200",
      link: "https://note.com/pond6814/n/n43d4c02fe50f"
    },
    {
      id: 6,
      title: "2024年1月から7月までの進捗",
      excerpt:
        "筑波大学に編入して忙しかったから更新が遅れちゃった 1月 ロジックIC 電子工作っぽい電子工作をやってみた 配線が多くて、大変。回路のテストにはLチカが一番楽だ...",
      category: "日記",
      date: "2024年7月19日",
      readTime: "9分",
      image: "./images/hatena-blog.png",
      link: "https://roki-ars.hatenablog.com/entry/2024/07/19/113147?_gl=1*hz3df9*_gcl_au*MzYwOTU3MjEuMTc0Mjg4NTE3Ng"
    },
  ]

  // カテゴリー一覧
  const categories = ["すべて", "組み込み", "Web", "日記", "学校"]

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">記事一覧</h1>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-2/3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="記事を検索..." className="pl-10" />
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button key={category} variant={category === "すべて" ? "default" : "outline"} size="sm">
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            excerpt={article.excerpt}
            category={article.category}
            date={article.date}
            readTime={article.readTime}
            image={article.image}
            link={article.link}
          />
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
