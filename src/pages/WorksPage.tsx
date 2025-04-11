function WorksPage() {
    type WorkData = {
        readonly id: number;
        title: string;
        description: string;
        imageSrc: string;
        imageAlt: string;
    };

    // データを外部に分離
    const worksData: WorkData[] = [
        {
            id: 1,
            title: "BgGapFiller",
            description: "背景画像生成 Web アプリ",
            imageSrc: "./images/BgGapFiller_4.png",
            imageAlt: "BgGapFiller_4.png"
        },
        {
            id: 2,
            title: "R☆AI☆NNER",
            description: "足圧センサーを用いたスマートインソール",
            imageSrc: "./images/RAINNER_1.png",
            imageAlt: "RAINNER_1.png"
        },
        {
            id: 3,
            title: "Temペット",
            description: "古いエアコンをスマートに、ペットに最適な環境を提供するリモートリモコン型デバイス「Temペット」",
            imageSrc: "./images/tempet_1.png",
            imageAlt: "tempet_1.png"
        }
    ];
    
    // 文字列を指定の長さで切り詰める関数
    const truncateText = (text: string, maxLength: number): string => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    };

    // ワークカードコンポーネント
    const WorkCard = ({ workData }: { workData: WorkData }) => (
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
            <div className="bg-gray-300 h-48 overflow-hidden">
                <img className="works-img object-cover w-full h-full" src={workData.imageSrc} alt={workData.imageAlt} />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-bold">{workData.title}</h2>
                <p className="text-gray-600 truncate">{truncateText(workData.description, 50)}</p>
            </div>
        </div>
    );

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">作成物一覧</h1>
            {worksData.map((work) => (
                <WorkCard
                    key={work.id}
                    workData={work}
                />
            ))}
        </div>
    );
}

export default WorksPage;