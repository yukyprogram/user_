const CompanyInfo = () => {
    return (
        <div className="company-info">
            <h2>企業概要</h2>
            <div className="info-grid">
                <InfoItem label="所在地" value="テキストテキスト" />
                <InfoItem label="法人番号" value="テキストテキスト" />
                <InfoItem label="電話番号" value="テキストテキスト" />
                <InfoItem label="従業員数" value="テキストテキスト" />
                <InfoItem label="資本金" value="テキストテキスト" />
                <InfoItem label="email" value="テキストテキスト" />
                <InfoItem label="ホームページ" value="https://www.example.co.jp" isLink={true} />                
                <InfoItem label="組織タイプ" value="テキストテキスト" />
                <InfoItem label="設立年" value="テキストテキスト" />
                <InfoItem label="業界" value="テキストテキスト" />
                <InfoItem label="代表者名" value="テキストテキスト" />
            </div>
            <div className="info-item">
                <span className="label">取引銀行</span>
                <span className="value">銀行A、銀行B、銀行</span>
            </div>
            <div className="business-establishment-info">
            <div className="info-item">
                <span className="label">事業内容</span>
                <p className="value">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
            <div className="info-item">
                <span className="label">設立の経緯</span>
                <p className="value">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
            </div>
            <div className="certifications">
                <h3>許認可・免許</h3>
                <table>
                    <thead>
                        <tr>
                            <th>許可登録（種類1）</th>
                            <th>許可登録（種類2）</th>
                            <th>許可登録番号</th>
                            <th>取得・更新年月日</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ISO9000</td>
                            <td>その他</td>
                            <td>TSR-123456</td>
                            <td>2021年11月01日</td>
                        </tr>
                        <tr>
                            <td>ISO9000</td>
                            <td>その他</td>
                            <td>TSR-123456</td>
                            <td>2021年11月01日</td>
                        </tr>
                        <tr>
                            <td>ISO9000</td>
                            <td>その他</td>
                            <td>TSR-123456</td>
                            <td>2021年11月01日</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="shareholders">
                <h3>株主構成</h3>
                <table>
                    <thead>
                        <tr>
                            <th>株主名</th>
                            <th>上場区分</th>
                            <th>持株数（千株）</th>
                            <th>持株比率（%）</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>テキストテキスト</td>
                            <td>-</td>
                            <td>1500</td>
                            <td>37.5%</td>
                        </tr>
                        <tr>
                            <td>テキストテキスト</td>
                            <td>-</td>
                            <td>1500</td>
                            <td>37.5%</td>
                        </tr>
                        <tr>
                            <td>テキストテキスト</td>
                            <td>-</td>
                            <td>1500</td>
                            <td>37.5%</td>
                        </tr>
                        <tr>
                            <td>テキストテキスト</td>
                            <td>-</td>
                            <td>1500</td>
                            <td>37.5%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="employee-info">
            <h2>従業員の状況</h2>
            <div className="info-grid">
                <InfoItem label="平均年齢" value="テキスト" />
                <InfoItem label="平均給与" value="テキスト" />
                <InfoItem label="平均勤続年数" value="テキスト" />
            </div>
            <div className="employee-list">
                <h3>役員リスト</h3>
                <table>
                    <thead>
                        <tr>
                            <th>役員名</th>
                            <th>役名・肩書</th>
                            <th>就任年月日</th>
                            <th>所属部署</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>テキストテキスト</td>
                            <td>テキスト</td>
                            <td>2022年02月02日</td>
                            <td>総務</td>
                        </tr>
                        <tr>
                            <td>テキストテキスト</td>
                            <td>テキスト</td>
                            <td>2022年02月02日</td>
                            <td>総務</td>
                        </tr>
                        <tr>
                            <td>テキストテキスト</td>
                            <td>テキスト</td>
                            <td>2022年02月02日</td>
                            <td>総務</td>
                        </tr>
                        <tr>
                            <td>テキストテキスト</td>
                            <td>テキスト</td>
                            <td>2022年02月02日</td>
                            <td>総務</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        
    );
};

const InfoItem = ({ label, value, isLink = false }) => (
    <div className="info-item">
        <span className="label">{label}</span>
        <span className="value">
            {isLink ? (
                <a href={value} target="_blank" rel="noopener noreferrer">
                    {value}
                </a>
            ) : (
                value
            )}
        </span>
    </div>
);
