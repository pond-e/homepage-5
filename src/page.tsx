import { Search } from "lucide-react"

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination"
import { ArticleCard } from "./components/article-card"

export default function ArticlesPage() {
  // 記事データのモック
  const articles = [
    {
      id: 1,
      title: "Webデザインの最新トレンド2025",
      excerpt:
        "2025年に注目すべきWebデザインのトレンドを紹介します。ダークモード、ニューモーフィズム、3Dエレメントなど、最新のデザイン手法を解説。",
      category: "デザイン",
      date: "2025年4月10日",
      readTime: "5分",
      image: "/placeholder.svg?height=200&width=300",
      link: "ho",
    },
    {
      id: 2,
      title: "Next.js 14の新機能総まとめ",
      excerpt:
        "Next.js 14で追加された新機能と改善点を詳しく解説します。パフォーマンスの向上、新しいルーティングシステム、サーバーコンポーネントの進化など。",
      category: "開発",
      date: "2025年4月5日",
      readTime: "8分",
      image: "/placeholder.svg?height=200&width=300",
      link: "hoge"
    },
    {
      id: 3,
      title: "効率的なコードレビューの方法",
      excerpt:
        "チーム開発における効率的なコードレビューの方法とベストプラクティスを紹介します。レビュープロセスの最適化、フィードバックの伝え方など。",
      category: "開発",
      date: "2025年3月28日",
      readTime: "6分",
      image: "/placeholder.svg?height=200&width=300",
      link: "hoge"
    },
    {
      id: 4,
      title: "UIデザインの基本原則",
      excerpt:
        "使いやすいUIデザインを作るための基本原則を解説します。一貫性、フィードバック、ユーザーの認知負荷の軽減など、重要な要素を学びましょう。",
      category: "デザイン",
      date: "2025年3月20日",
      readTime: "7分",
      image: "/placeholder.svg?height=200&width=300",
      link: "hoge"
    },
    {
      id: 5,
      title: "TypeScriptの高度な型システム入門",
      excerpt:
        "TypeScriptの高度な型システムについて学びます。ジェネリック、条件型、マップ型など、型の柔軟性を最大限に活用する方法を解説します。",
      category: "開発",
      date: "2025年3月15日",
      readTime: "10分",
      image: "/placeholder.svg?height=200&width=300",
      link: "hoge"
    },
    {
      id: 6,
      title: "アクセシビリティを考慮したWebサイト制作",
      excerpt:
        "誰もが使いやすいWebサイトを作るためのアクセシビリティ対応について解説します。WAI-ARIAの活用、キーボード操作、スクリーンリーダー対応など。",
      category: "デザイン",
      date: "2025年3月8日",
      readTime: "9分",
      image: "/placeholder.svg?height=200&width=300",
      link: "hoge"
    },
  ]

  // カテゴリー一覧
  const categories = ["すべて", "デザイン", "開発", "マーケティング", "ビジネス"]

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
