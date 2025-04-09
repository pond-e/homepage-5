function WorksPage() {
    return (
        
        <div className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">作成物一覧</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
            <div className="bg-gray-300 h-48 overflow-hidden"><img className="works-img object-cover w-full h-full" src="./images/BgGapFiller_4.png" alt="BgGapFiller_4.png" /></div>
            <div className="p-4">
                <h2 className="text-xl font-bold">BgGapFiller</h2>
                <p className="text-gray-600">背景画像生成 Web アプリ</p>
            </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
            <div className="bg-gray-300 h-48 overflow-hidden"><img className="works-img object-cover w-full h-full" src="./images/RAINNER_1.png" alt="RAINNER_1.png" /></div>
            <div className="p-4">
                <h2 className="text-xl font-bold">R☆AI☆NNER</h2>
                <p className="text-gray-600">足圧センサーを用いたスマートインソール</p>
            </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
            <div className="bg-gray-300 h-48 overflow-hidden"><img className="works-img object-cover w-full h-full" src="./images/tempet_1.png" alt="tempet_1.png" /></div>
            <div className="p-4">
                <h2 className="text-xl font-bold">Temペット</h2>
                <p className="text-gray-600">古いエアコンをスマートに</p>
            </div>
        </div>
    </div>
    
    );
}

export default WorksPage;