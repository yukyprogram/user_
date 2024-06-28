const ManagerInfo = () => {
    return (
        <div className="manager-info">
            <h2>経営者</h2>
            <div className="info-grid">
                <InfoItem label="代表者名" value="テキストテキスト" />
                <InfoItem label="生年月日" value="テキストテキスト" />
                <InfoItem label="性別" value="テキストテキスト" />
                <InfoItem label="出身地" value="テキストテキスト" />
                <InfoItem label="出身校" value="テキストテキスト" />
                <InfoItem label="配偶者有無" value="有・無" />
                <InfoItem label="他兼務" value="有・無" />
                <InfoItem label="後継者" value="有・無" />
                <InfoItem label="業界経験" value="有・無" />
            </div>
            <div className="info-item">
                <span className="label">関連事業</span>
                <p className="value">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
            <div className="info-item">
                <span className="label">趣味・スポーツ</span>
                <p className="value">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
            <div className="info-columns">
                <div className="info-column">
                    <h3>経歴</h3>
                    <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
                <div className="info-column">
                    <h3>人物像</h3>
                    <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
            </div>
            <div className="info-columns">
                <div className="info-column">
                    <h3>経営分析</h3>
                    <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
                <div className="info-column">
                    <h3>就任経緯</h3>
                    <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
            </div>
            <div className="info-columns">
                <div className="info-column">
                    <h3>得意分野</h3>
                    <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
                <div className="info-column">
                    <h3>事業経験</h3>
                    <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
            </div>
        </div>
    );
};

const InfoItem = ({ label, value }) => (
    <div className="info-item">
        <span className="label">{label}</span>
        <span className="value">{value}</span>
    </div>
);

// export default ManagerInfo;