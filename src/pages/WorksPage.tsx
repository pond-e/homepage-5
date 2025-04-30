import { FC } from 'react'

// 型定義
interface WorkData {
    readonly id: number
    title: string
    description: string
    imageSrc: string
    imageAlt: string
    link: string
}

// 定数
const MAX_DESCRIPTION_LENGTH = 50

// ユーティリティ関数
const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
        return text
    }
    return text.substring(0, maxLength) + '...'
}

// データ
const worksData: WorkData[] = [
    {
        id: 1,
        title: "BgGapFiller",
        description: "背景画像生成 Web アプリ",
        imageSrc: "./images/BgGapFiller_4.png",
        imageAlt: "BgGapFiller_4.png",
        link: "https://bggapfiller.onrender.com/",
    },
    {
        id: 2,
        title: "R☆AI☆NNER",
        description: "足圧センサーを用いたスマートインソール",
        imageSrc: "./images/RAINNER_1.png",
        imageAlt: "RAINNER_1.png",
        link: "#",
    },
    {
        id: 3,
        title: "Temペット",
        description: "古いエアコンをスマートに、ペットに最適な環境を提供するリモートリモコン型デバイス「Temペット」",
        imageSrc: "./images/tempet_1.png",
        imageAlt: "tempet_1.png",
        link: "https://elchika.com/article/f071bcac-4171-43c5-ac84-83035b03fcfb/",
    }
]

// ワークカードコンポーネント
const WorkCard: FC<{ workData: WorkData }> = ({ workData }) => {
    const cardContent = (
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
            <div className="bg-gray-300 h-48 overflow-hidden">
                <img 
                    className="works-img object-cover w-full h-full" 
                    src={workData.imageSrc} 
                    alt={workData.imageAlt} 
                />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-bold">{workData.title}</h2>
                <p className="text-gray-600 truncate">
                    {truncateText(workData.description, MAX_DESCRIPTION_LENGTH)}
                </p>
            </div>
        </div>
    )

    return workData.link !== "#" ? (
        <a target="_blank" href={workData.link} className="block hover:opacity-90 transition-opacity">
            {cardContent}
        </a>
    ) : cardContent
}

// メインコンポーネント
const WorksPage: FC = () => {
    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">作成物一覧</h1>
            <div className="space-y-4">
                {worksData.map((work) => (
                    <WorkCard
                        key={work.id}
                        workData={work}
                    />
                ))}
            </div>
        </div>
    )
}

export default WorksPage