const NonFinancialInfo = () => {
    return (
        <div className="non-financial-info">
            <h2>歴史</h2>
            <div className="history-timeline">
                <h3>沿革年表</h3>
                <div className="timeline-item">
                    <span className="year">1990</span>
                    <span className="description">テキストテキストテキストテキストテキスト</span>
                </div>
                <div className="timeline-item">
                    <span className="year">1995</span>
                    <span className="description">テキストテキストテキストテキストテキスト</span>
                </div>
                <div className="timeline-item">
                    <span className="year">2008</span>
                    <span className="description">テキストテキストテキストテキストテキスト</span>
                </div>
            </div>
            
            {['沿革', 'ビジョン', '企業理念', '経営方針', '行動指針', '事業戦略', '中期経営計画', '新規事業', '設備投資', 'M&A / 提携'].map((section, index) => (
                <div key={index} className="info-section">
                    <h3>{section}</h3>
                    <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
            ))}

            <div className="info-section">
                <h3>開示</h3>
                <table className="disclosure-table">
                    <thead>
                        <tr>
                            <th>項目</th>
                            <th>開示日</th>
                            <th>コメント</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>テキスト</td>
                            <td>YYYY/MM/DD</td>
                            <td>AAAAAAAA</td>
                        </tr>
                        <tr>
                            <td>テキスト</td>
                            <td>YYYY/MM/DD</td>
                            <td>AAAAAAAA</td>
                        </tr>
                        <tr>
                            <td>テキスト</td>
                            <td>YYYY/MM/DD</td>
                            <td>AAAAAAAA</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};