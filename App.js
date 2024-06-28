const App = () => {
    const [activeTab, setActiveTab] = React.useState('基本情報');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    

    return (
        <div className="container">
            <header>
                <div className="logo">ロゴ</div>
                <div className="menu">メニュー</div>
            </header>
            <main>
                <div className="company-header">
                    <div className="company-logo">企業<br/>ロゴ</div>
                    <h1 className="company-name">企業名</h1>
                </div>
                <nav>
                    {['基本情報', '経営者', '非財務情報', 'トークン', '取引先', '財務情報', '市場環境', '評価', '口コミ'].map(tab => (
                        <button
                            key={tab}
                            className={`nav-button ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
                {activeTab === '基本情報' && <CompanyInfo />}
                {activeTab === '経営者' && <ManagerInfo />}
                {activeTab === '非財務情報' && <NonFinancialInfo />}
                {activeTab === '評価' && <Evaluation />}
                {activeTab === '取引先' && <BusinessPartners />}
            </main>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
